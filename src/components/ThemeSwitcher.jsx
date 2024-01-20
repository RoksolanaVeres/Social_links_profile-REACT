import { SunIcon, MoonIcon } from "../components/Icons";
import { useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    document.documentElement.classList.toggle("dark");
  }
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
