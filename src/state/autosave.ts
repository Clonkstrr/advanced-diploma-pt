export interface DebouncedSaver<T> {
  (value: T): void;
  flush: () => Promise<void>;
}

export function createDebouncedSaver<T>(
  save: (value: T) => Promise<void>,
  delayMs = 300,
): DebouncedSaver<T> {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let pending: T | undefined;
  let hasPending = false;
  // All saves are chained so they never overlap and flush() can await whatever
  // is in flight. Failures are contained per-link, so the chain never rejects.
  let chain: Promise<void> = Promise.resolve();

  const run = (): Promise<void> => {
    chain = chain.then(async () => {
      if (!hasPending) return;
      const value = pending as T;
      hasPending = false;
      pending = undefined;
      try {
        await save(value);
      } catch (err) {
        console.error('Autosave failed; keeping the value pending for retry.', err);
        // Restore for retry unless a newer value arrived while this save ran.
        if (!hasPending) {
          pending = value;
          hasPending = true;
        }
      }
    });
    return chain;
  };

  const saver = ((value: T) => {
    pending = value;
    hasPending = true;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => { timer = null; void run(); }, delayMs);
  }) as DebouncedSaver<T>;

  saver.flush = () => {
    if (timer) { clearTimeout(timer); timer = null; }
    return run();
  };

  return saver;
}
