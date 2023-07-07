const useLocalStore = () => {
  type SessionStore = {
    hasClosedBanner: boolean;
  };

  const store = {
    get: (key: keyof SessionStore) =>
      localStorage.getItem(key) as string | null,
    set: (key: keyof SessionStore, value: string) =>
      localStorage.setItem(key, value),
  };

  return { ...store };
};

export { useLocalStore };
