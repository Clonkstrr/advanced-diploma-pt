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
});
