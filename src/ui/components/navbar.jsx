import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ThemeContext } from "./themeSwitcher";
import LogoCoding from "./logoCoding";
import Judul from "./judul";
import { Link } from "react-router-dom";

function Navbar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar relative flex md:flex-row justify-between items-center py-4 px-4 md:px-16 text-[1.2rem] font-semibold">
      <Logo isDarkMode={isDarkMode} />

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <label className="btn btn-circle swap swap-rotate">
          <button
            className="text-3xl"
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            ) : (
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            )}
          </button>
        </label>
      </div>

      {/* Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:flex-row md:gap-8 md:w-auto md:static absolute top-16 right-0 rounded-xl md:bg-inherit p-4 md:p-0 z-10 bg-[${
          isDarkMode ? "#2a323c" : "#e6ebf0"
        }]`}
      >
        <NavMenu />
        <br />
        <ButtonDarkMode isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
}

export default Navbar;

function Logo({ isDarkMode }) {
  return (
    <div className="flex flex-row items-center gap-2">
      <LogoCoding
        style={{
          filter: isDarkMode ? "invert(0)" : "invert(1)",
        }}
      />
      <Judul>
        Syahdan<span className="italic text-cyan-500">.WEB</span>
      </Judul>
    </div>
  );
}

Logo.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

function NavMenu() {
  const menuList = [
    { name: "Home", link: "/" },
    { name: "Project", link: "/Project" },
    { name: "Contact Me", link: "/ContactMe" },
  ];

  return (
    <ul className="flex flex-col md:flex-row gap-8 md:gap-8">
      {menuList.map((item) => (
        <li key={item.name}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

function ButtonDarkMode({ isDarkMode, toggleTheme }) {
  return (
    <label className="flex cursor-pointer gap-2 items-center">
      {/* Sun Icon for Light Mode */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={isDarkMode ? "hidden" : "block"} // Tampilkan hanya pada light mode
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>

      {/* Checkbox for Toggling Theme */}
      <input
        type="checkbox"
        className="toggle"
        checked={isDarkMode}
        onChange={toggleTheme}
      />

      {/* Moon Icon for Dark Mode */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={isDarkMode ? "block" : "hidden"} // Tampilkan hanya pada dark mode
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
}

ButtonDarkMode.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
