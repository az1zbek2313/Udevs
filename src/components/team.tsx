"use client";

import { styles } from "@/utils/page";
import Image from "next/image";
import teamImage from "@/../public/teamImage.svg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Team = () => {
  const [number, setNumber] = useState<number>(0);
  const [plus, setPlus] = useState<string>("");
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => {
        if (prevNumber >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevNumber + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  number == 100 &&
    setTimeout(() => {
      setPlus("+");
    }, 500);

  return (
    <div id="team" className="bg-background ww:py-20 py-8">
      <div className={`${styles.container}`}>
        <h1
          className={`${styles.heading1} text-start ww:text-[64px] text-[32px] mb-[21px] ww:mb-[42px]`}
        >
          {t("team")}
        </h1>
        <div className="w-full flex justify-between mt-20 items-start ww:mt-10 ww:items-center flex-col ww:flex-row">
          {/* responsive team image */}
          <div className="mb-6 ww:hidden flex ss:w-[500px] justify-center ">
            <Image
              width={300}
              src={teamImage}
              alt="Software development agency"
            />
          </div>
          {/* team message */}
          <div className="ww:w-[47%]">
            <p className="ww:text-xl text-[16px] ww:w-[88%] w-full ss:w-[500px] leading-7 ww:leading-10 text-secondary font-medium mb-[26px]">
            {t("teamText")}
            </p>
            <div className="mt-[40px]">
              <span className="transition-all duration-300 ease-in-out mb-2 text-[80px] ww:text-[120px] font-bold text-primary leading-[96px]">
                {number}
                <span id="plus">{plus}</span>
              </span>
            </div>
            <p className="ww:text-[40px] text-2xl font-extrabold text-secondary leading-[72px]">
            {t("deticted")}
            </p>
          </div>
          {/* team image */}
          <div className="w-[47%] hidden ww:inline-block">
            <Image src={teamImage} alt="Software development agency" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
