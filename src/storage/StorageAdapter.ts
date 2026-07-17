import { openDB, type IDBPDatabase } from 'idb';
import type { ProgressState } from '../types/progress';

const STORE = 'kv';
const KEY = 'progress';

export class StorageAdapter {
  private dbPromise: Promise<IDBPDatabase>;
  private readonly dbName: string;

  constructor(dbName = 'advdiploma') {
    this.dbName = dbName;
    this.dbPromise = this.open();
  }

  private open(): Promise<IDBPDatabase> {
    return openDB(this.dbName, 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
      },
      // Chromium may terminate an idle connection; reopen lazily on next use
      // instead of failing every subsequent call on the dead handle.
      terminated: () => {
        this.dbPromise = this.open();
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

  async loadValue(key: string): Promise<unknown | null> {
    const db = await this.dbPromise;
    return (await db.get(STORE, key)) ?? null;
  }

  async saveValue(key: string, value: unknown): Promise<void> {
    const db = await this.dbPromise;
    await db.put(STORE, value, key);
  }

  // Backups are ordinary kv entries under their own keys.
  loadBackup(key: string): Promise<unknown | null> { return this.loadValue(key); }
  saveBackup(key: string, value: unknown): Promise<void> { return this.saveValue(key, value); }
}
