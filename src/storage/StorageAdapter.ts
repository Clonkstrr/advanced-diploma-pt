import { openDB, type IDBPDatabase } from 'idb';
import type { ProgressState } from '../types/progress';

const STORE = 'kv';
const KEY = 'progress';

export class StorageAdapter {
  private dbPromise: Promise<IDBPDatabase>;

  constructor(dbName = 'advdiploma') {
    this.dbPromise = openDB(dbName, 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
      },
    });
  }

  async loadProgress(): Promise<ProgressState | null> {
    const db = await this.dbPromise;
    const value = (await db.get(STORE, KEY)) as ProgressState | undefined;
    return value ?? null;
  }

  async saveProgress(state: ProgressState): Promise<void> {
    const db = await this.dbPromise;
    await db.put(STORE, state, KEY);
  }
}
