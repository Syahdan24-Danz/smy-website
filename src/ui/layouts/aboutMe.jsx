import Judul from "../components/judul";
import Text from "../components/text";
import Sosmed from "../components/sosmed";
import { useContext } from "react";
import { ThemeContext } from "../components/themeSwitcher";

function AboutMe() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full md:w-10/12 md:p-2 lg:w-8/12 xl:w-1/2 relative p-4 ">
      <div
        className={`mockup-code p-6 md:p-8 flex flex-col ${
          isDarkMode ? "bg-[#2a323c] text-white" : "bg-[#E6EBF0] text-[#2c3137]"
        } w-full max-w-screen-lg`}
      >
        <pre data-prefix="$" className="flex items-center">
          <Judul
            className={`font-bold text-lg md:text-xl xl:text-2xl ${
              isDarkMode ? "text-white" : "text-[#000]"
            }`}
          >
            Syahdan Firmansyah
          </Judul>
        </pre>
        <pre
          data-prefix=">"
          className={`flex md:text-sm lg:text-lg xl:text-xl`}
        >
          <Text className="text-success">Hallo, Saya Syahdan Firmansyah</Text>
        </pre>
        <pre data-prefix=">" className="flex text-sm mb-4 md:text-base">
          <Text className="text-iherit">
            Mahasiswa Semester 5 Prodi{" "}
            <span className="text-orange-500 font-semibold">
              Bisnis Digital FEB UNPAD.
            </span>
          </Text>
        </pre>
        <pre data-prefix=">" className="flex text-justify text-sm md:text-base">
          <Text className="text-iherit text-wrap">
            Saya memiliki minat mendalam di bidang pengembangan web, khususnya{" "}
            <span className="text-orange-500">frontend development</span>{" "}
            menggunakan{" "}
            <span className="text-orange-500">
              HTML, CSS, Javascript dan Framework React.js
            </span>
            . Saya memiliki pengalaman dalam membangun antarmuka web yang
            interaktif dan responsif. Saat ini, saya sedang mencari kesempatan
            magang sebagai Web Developer untuk memperdalam keterampilan saya dan
            berkontribusi pada proyek-proyek nyata. Dengan semangat belajar yang
            tinggi, saya berkomitmen untuk terus mengembangkan diri dalam
            memanfaatkan teknologi modern dan praktik terbaik dalam pengembangan
            web.
          </Text>
        </pre>
      </div>
      <div className="flex flex-col mt-6 items-center gap-2">
        <Text className="text-inherit text-base md:text-center">
          Find me on
        </Text>
        <div>
          <Sosmed />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
