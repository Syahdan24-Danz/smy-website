import Judul from "../components/judul";
import Text from "../components/text";
import Sosmed from "../components/sosmed";
import { useContext } from "react";
import { ThemeContext } from "../components/themeSwitcher";

function AboutMe() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex flex-col w-1/2  ">
      <div
        className={`mockup-code p-8 flex flex-col ${
          isDarkMode ? "bg-[#2a323c] text-white" : "bg-[#E6EBF0] text-[#2c3137]"
        }`}
      >
        <pre data-prefix="$" className="flex items-center text-[1rem]">
          <Judul
            className={`font-bold w-full text-[1.5rem] ${
              isDarkMode ? "text-white" : "text-[#000]"
            }`}
          >
            Syahdan Firmansyah
          </Judul>
        </pre>
        <pre data-prefix=">" className={`flex text-[1rem] `}>
          <Text className={" text-success"}>
            Hallo, Saya Syahdan Firmansyah
          </Text>
        </pre>
        <pre data-prefix=">" className="flex  text-[1rem] mb-4">
          <Text className={"text-iherit"}>
            Mahasiswa Semester 5 Prodi{" "}
            <span className="text-orange-500 font-semibold">
              Bisnis Digital FEB UNPAD.
            </span>
          </Text>
        </pre>
        <pre data-prefix=">" className=" flex text-justify text-[1rem]">
          <Text className="text-[1rem] text-iherit text-wrap">
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
        <Text className={"text-inherit text-[1rem] w-auto"}>Find me on</Text>
        <div>
          <Sosmed />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
