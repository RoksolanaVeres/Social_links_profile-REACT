import { createContext, useState } from "react";

export const ThemeContext = createContext({ themeValue: "dark" });

export const ThemeContextProvider = ({ children, initial = "dark" }) => {
  const [themeValue, setThemeValue] = useState(initial);
  return (
    <ThemeContext.Provider value={{ themeValue, setThemeValue }}>
      {children}
    </ThemeContext.Provider>
  );
};
