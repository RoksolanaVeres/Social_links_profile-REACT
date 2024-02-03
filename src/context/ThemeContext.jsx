import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({
  children,
  defaultTheme = "dark",
  storageKey = "app-theme",
  ...props
}) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [theme]);

  function setThemeInLocalStorage(theme) {
    localStorage.setItem(storageKey, theme);
    setTheme(theme);
  }

  const value = {
    theme,
    setTheme: setThemeInLocalStorage,
  };
  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
