import { useContext } from "react";
import { ThemeContext } from "../components/themeSwitcher";

function Progres() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] gap-8">
      <div className="flex flex-row items-end gap-1">
        <h1>Masih Dalam Pengerjaan</h1>
        <span className="loading loading-dots w-4"></span>
      </div>

      <label className="swap swap-flip text-9xl relative flex items-center">
        <input type="checkbox" checked={isDarkMode} readOnly />
        <div className={`swap-on ${isDarkMode ? "" : "hidden"}`}>😇</div>
        <div className={`swap-off  ${isDarkMode ? "hidden" : ""}`}>😭</div>
      </label>
    </div>
  );
}

export default Progres;
