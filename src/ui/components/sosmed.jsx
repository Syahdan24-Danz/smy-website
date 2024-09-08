import { useContext } from "react";
import { ThemeContext } from "./themeSwitcher";

function Sosmed() {
  const { isDarkMode } = useContext(ThemeContext);

  const sosmed = [
    {
      name: "Github",
      icon: "/images/github.svg",
      link: "https://github.com/Syahdan24-Danz",
    },
    {
      name: "LinkedIn",
      icon: "/images/linkedin.svg",
      link: "https://www.linkedin.com/in/syahdan-firmansyah-651236250/",
    },
    {
      name: "Instagram",
      icon: "/images/instagram.svg",
      link: "https://www.instagram.com/syadnfr",
    },
    {
      name: "Email",
      icon: "/images/email.svg",
      link: "mailto:syahdan22001@mail.unpad.ac.id?subject=Interested%20in%20Your%20Work&body=Hello,%0A%0AI%20am%20very%20interested%20in%20your%20work%20and%20would%20love%20to%20discuss%20potential%20opportunities.%20Please%20let%20me%20know%20if%20we%20can%20set%20up%20a%20time%20to%20talk.%0A%0ABest%20regards,%0A[Your%20Name]",
    },
  ];

  return (
    <ul className="menu menu-horizontal flex text-center gap-4 p-0">
      {sosmed.map((sosmed) => (
        <li
          key={sosmed.name}
          className="bg-inherit rounded-box flex items-center"
        >
          <a href={sosmed.link} className="flex items-center">
            <img
              src={sosmed.icon}
              alt={sosmed.name}
              className="w-6 h-6"
              style={{
                filter: isDarkMode ? "invert(1)" : "invert(0)",
              }}
            />
            <span className="ml-2">{sosmed.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Sosmed;
