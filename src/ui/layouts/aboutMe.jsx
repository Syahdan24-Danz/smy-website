import Judul from "../components/judul";
import Text from "../components/text";
import Sosmed from "../components/sosmed";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../components/themeSwitcher";

function AboutMe() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full md:w-10/12 md:p-2 lg:w-8/12 xl:w-1/2 relative p-8 overflow-hidden">
      <div
        className={`mockup-code py-8 px-4 flex flex-col overflow-hidden w-full h-full ${
          isDarkMode
            ? "bg-[#2a323c] text-[#E6EBF0]"
            : "bg-[#E6EBF0] text-[#2c3137]"
        } w-full max-w-full`}
      >
        <pre data-prefix="$" className="flex items-center">
          <Judul className={`font-semibold text-[2rem] md:text-[1.5rem]`}>
            Syahdan Firmansyah
          </Judul>
        </pre>
        <Pre>
          <Text className={"text-success"}>Hallo, Saya Syahdan Firmansyah</Text>
        </Pre>
        <Pre>
          <Text>
            Mahasiswa Semester 5 Prodi{" "}
            <span className="text-orange-500 font-semibold">
              Bisnis Digital FEB UNPAD.
            </span>
          </Text>
        </Pre>
        <br />
        <Pre>
          <Text className="text-justify self-center">
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
        </Pre>
        <div className="divider divider-success w-20 self-center"></div>
      </div>

      <div className="flex flex-col mt-6 items-center gap-2">
        <Text className="text-inherit text-center">Find me on</Text>
        <div>
          <Sosmed />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

function Pre({ children }) {
  return (
    <pre data-prefix=">" className="flex text-inherit text-[1rem] text-wrap">
      {children}
    </pre>
  );
}
Pre.propTypes = {
  children: PropTypes.node.isRequired,
};
