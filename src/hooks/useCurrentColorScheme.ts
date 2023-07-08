import { useEffect, useState } from "react";

const useCurrentColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    const setColorSchemeState = () => {
      setColorScheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", setColorSchemeState);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", setColorSchemeState);
    };
  }, []);

  return colorScheme;
};

export { useCurrentColorScheme };
