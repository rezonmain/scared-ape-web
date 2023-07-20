class LocalStorage<T extends Record<string, unknown>> {
  private store: Map<keyof T, unknown>;
  private globalKey: string;
  private keys: (keyof T)[];

  constructor(storageKeys: (keyof T)[], globalKey: string, initialValues: T) {
    this.store = new Map();
    this.globalKey = globalKey;
    this.keys = storageKeys;
    this.loadValues(initialValues);
    // Dynamically define object getters and setters from storage keys
    for (const key of storageKeys) {
      Object.defineProperty(this, key, {
        get: () => this.getIt(key),
        set: (value) => this.setIt(key, value),
      });
    }
  }

  private loadValues(initial: T) {
    const values = this.getAll();
    if (values) return this.loadValuesFromLocalStorage(values);
    this.loadFromInitialValues(initial);
  }

  private loadFromInitialValues(initial: T) {
    Object.entries(initial).forEach(([key, value]) => {
      this.store.set(key as keyof T, value);
    });
    localStorage.setItem(this.globalKey, JSON.stringify(initial));
  }

  private loadValuesFromLocalStorage(values?: T) {
    const state = values ?? localStorage.getItem(this.globalKey);
    if (!state) return;
    Object.entries(
      typeof state === "string" ? JSON.parse(state) : state
    ).forEach(([key, value]) => {
      this.store.set(key as keyof T, value);
    });
  }

  private getIt(key: keyof T) {
    // If available in map return it
    if (this.store.has(key)) return this.store.get(key);

    // If available in localStorage, save it to map & return it
    const values = localStorage.getItem(this.globalKey);
    if (!values) return null;

    const parsedValues = JSON.parse(values);
    if (parsedValues[key]) {
      this.store.set(key, parsedValues[key]);
      return parsedValues[key];
    }
    return null;
  }

  private setIt(key: keyof T, value: unknown) {
    localStorage.setItem(
      this.globalKey,
      JSON.stringify(Object.fromEntries(this.store))
    );
    this.store.set(key, value);
  }

  getAll() {
    if (this.keys.every((key) => this.store.has(key)))
      return Object.fromEntries(this.store) as T;
    const values = localStorage.getItem(this.globalKey);
    if (values) return JSON.parse(values);
    return null;
  }

  get state() {
    return Object.fromEntries(this.store) as T;
  }
}

type StorageModel<T extends Record<string, unknown>> = { [P in keyof T]: T[P] };

const LocalStorageFactory = <T extends Record<string, unknown>>(
  storageKeys: (keyof T)[],
  globalKey: string,
  initialValues: T
): LocalStorage<T> & StorageModel<T> =>
  new LocalStorage(storageKeys, globalKey, initialValues) as LocalStorage<T> &
    StorageModel<T>;

export { LocalStorageFactory as LocalStorage };
