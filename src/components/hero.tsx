"use client";
import Image from "next/image";
import heroImage from "@/../public/heroImage.svg";
import Typewriter from "typewriter-effect/dist/core";
import logotip from "../../public/logotip.svg";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: [
        `${t("mobileApp")}`,
        `${t("erpSystem")}`,
        `${t("design")}`,
        `${t("consult")}`,
        `${t("infrastructure")}`,
      ],
      autoStart: true,
      loop: true,
      delay: 75,
    });

    typewriter.pauseFor(1000).start();
  }, []);

  return (
    <main id="hero" className="pt-16 w-full md:h-[700px] backgroundImage">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-12 pt-16">
        {/* hero about website */}
        <div className="flex flex-col ww:justify-start justify-center items-start ww:w-[48%] w-[100%]">
          <Link
            href="/"
            id="footer"
            className="flex w-full items-center  ww:justify-start justify-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logotip}
              className="text-center ww:h-[89px] ww:w-[267px] w-[125px] h-[41px] mb-6"
              alt="uzDevs logo"
            />
          </Link>
          <h2 className="ww:text-[40px] text-2xl text-secondary xs:leading-[54px] font-extrabold mb-5 mx-auto text-center xs:text-start ww:mx-0">
            {t("heroCompany")}
          </h2>
          <h2
            id="typewriter"
            className="text-primary font-bold ww:text-[40px] w-[90%] mb-12 text-center mx-auto ww:text-start ww:mx-0 text-2xl ww:leading-[54px]"
          ></h2>
          <Link
            href={"#contact"}
            type="button"
            className="text-white hidden ww:block mr-8 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-20 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  text-[20px] font-medium"
          >
            {t("contact")}
          </Link>
        </div>
        {/* hero image */}
        <div className="ww:w-[48%] w-[100%]   ww:pt-12 pt-0">
          <Image className="ww:mx-0 mx-auto" src={heroImage} alt="hero image" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
