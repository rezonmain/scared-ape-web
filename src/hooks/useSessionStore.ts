const useSessionStore = () => {
  type SessionStore = {
    hasClosedBanner: boolean;
  };

  const store = {
    get: (key: keyof SessionStore) =>
      sessionStorage.getItem(key) as string | null,
    set: (key: keyof SessionStore, value: string) =>
      sessionStorage.setItem(key, value),
  };

  return { store };
};

export { useSessionStore };
