import { SunIcon, MoonIcon } from "../components/Icons";
import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "dark";
  });

  function getThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem("theme");
    savedTheme && setTheme(savedTheme);
    savedTheme === "light" && document.documentElement.classList.remove("dark");
  }

  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });

    document.documentElement.classList.toggle("dark");
  }

  useEffect(() => {
    getThemeFromLocalStorage();
  }, [theme]);

  return (
    <div className="self-end text-white">
      <button
        className="flex size-[40px] items-center justify-center rounded-xl hover:bg-slate-200 hover:dark:bg-darkGrey"
        onClick={toggleTheme}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}
