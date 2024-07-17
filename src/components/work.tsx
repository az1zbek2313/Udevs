'use client';

import { styles } from "@/utils/page";
import { WorkCards } from "@/functions/page";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Work = () => {
  const {t} = useTranslation();

  return (
    <div id="team" className="ww:py-20 py-8">
      <div className={`${styles.container} relative`}>
        <h1
          className={`${styles.heading1} text-start ww:text-[64px] text-[32px] mb-[21px] ww:mb-[42px]`}
        >
          {t('work')}
        </h1>
        <div
          className="flex justify-between items-start py-10 flex-col ww:flex-row bgImage"
        >
          {WorkCards.map((el) => (
            <div
              key={el.id}
              className="flex ww:flex-col flex-row ww:justify-center items-center gap-4 mt-4 ww:mt-0 ww:gap-1  ww:max-w-[20%]"
            >
              <Image src={el.img} alt="icon" className="w-[56px] ww:w-[80px]" />
              <div className="flex flex-col items-start ww:items-center justify-start ww:justify-center">
                <h3 className="text-[18px] font-semibold leading-[28px]">
                  {t(el.title)}
                </h3>
                <span className="ww:px-5 text-[16px] font-normal leading-[26px] opacity-80 text-start ww:text-center">
                  {t(el.description)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
