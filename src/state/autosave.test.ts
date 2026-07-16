import { describe, it, expect, vi } from 'vitest';
import { createDebouncedSaver } from './autosave';

describe('createDebouncedSaver', () => {
  it('coalesces rapid calls into one save after the delay', async () => {
    vi.useFakeTimers();
    const save = vi.fn().mockResolvedValue(undefined);
    const saver = createDebouncedSaver(save, 100);
    saver('a'); saver('b'); saver('c');
    expect(save).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(100);
    expect(save).toHaveBeenCalledTimes(1);
    expect(save).toHaveBeenCalledWith('c');
    vi.useRealTimers();
  });

  it('flush() saves immediately', async () => {
    const save = vi.fn().mockResolvedValue(undefined);
    const saver = createDebouncedSaver(save, 1000);
    saver('x');
    await saver.flush();
    expect(save).toHaveBeenCalledWith('x');
  });

  it('restores the pending value after a rejected save so it can retry', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const save = vi.fn()
      .mockRejectedValueOnce(new Error('quota'))
      .mockResolvedValue(undefined);
    const saver = createDebouncedSaver(save, 50);
    saver('x');
    await saver.flush(); // first attempt rejects; flush itself must not throw
    expect(errorSpy).toHaveBeenCalled();
    await saver.flush(); // value restored -> retried
    expect(save).toHaveBeenCalledTimes(2);
    expect(save).toHaveBeenLastCalledWith('x');
    errorSpy.mockRestore();
  });

  it('does not resurrect a stale value when a newer one arrived during a failed save', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    let rejectFirst: (e: Error) => void;
    const save = vi.fn()
      .mockImplementationOnce(() => new Promise<void>((_, rej) => { rejectFirst = rej; }))
      .mockResolvedValue(undefined);
    const saver = createDebouncedSaver(save, 50);
    saver('old');
    const firstFlush = saver.flush();
    await vi.waitFor(() => expect(save).toHaveBeenCalledTimes(1)); // 'old' now in flight
    saver('new');
    rejectFirst!(new Error('boom'));
    await firstFlush;
    await saver.flush();
    expect(save).toHaveBeenLastCalledWith('new');
    errorSpy.mockRestore();
  });

  it('flush() awaits an in-flight save started by the timer', async () => {
    vi.useFakeTimers();
    let resolveSave: () => void;
    let settled = false;
    const save = vi.fn().mockImplementation(
      () => new Promise<void>((res) => { resolveSave = () => { settled = true; res(); }; }),
    );
    const saver = createDebouncedSaver(save, 100);
    saver('x');
    await vi.advanceTimersByTimeAsync(100); // timer fires, save now in flight
    const flushPromise = saver.flush().then(() => {
      expect(settled).toBe(true); // flush must not resolve before the in-flight save
    });
    resolveSave!();
    await flushPromise;
    vi.useRealTimers();
  });
});
