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

  const run = async () => {
    if (!hasPending) return;
    const value = pending as T;
    hasPending = false;
    pending = undefined;
    await save(value);
  };

  const saver = ((value: T) => {
    pending = value;
    hasPending = true;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => { timer = null; void run(); }, delayMs);
  }) as DebouncedSaver<T>;

  saver.flush = async () => {
    if (timer) { clearTimeout(timer); timer = null; }
    await run();
  };

  return saver;
}
