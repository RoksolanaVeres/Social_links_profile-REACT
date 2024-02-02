import { SunIcon, MoonIcon } from "../components/Icons";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
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
