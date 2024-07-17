"use client";

import { MobileCards } from "@/functions/page";
import { MobileTechnologiesCards } from "@/functions/page";
import { styles } from "@/utils/page";
import Image from "next/image";
import bgMobile from "@/../public/bgMobile.png";
import mobileImage from "@/../public/mobileIman.png";
import { useTranslation } from "react-i18next";

const MobileApp = () => {
  const { t } = useTranslation();

  return (
    <div id="mobileApp" className="ww:py-20 py-4 w-full backgroundImage">
      <div className={`${styles.container}`}>
        <h1
          className={`${styles.heading1}  text-start ww:text-[64px] text-[32px] mb-[21px] ww:mb-[42px] ww:w-[800px] w-[270px] ww:leading-[64px] leading-[40px] mx-0`}
        >
          {t("mobileApp")}
        </h1>
        <div className={`${styles.flex} ww:justify-between w-full `}>
          {/* responsive image mobile */}
          <div className="relative w-full ss:w-[500px] ww:hidden block h-full">
            <div className="relative flex ww:justify-center">
              <Image
                src={bgMobile}
                alt="Software development agency"
                className="object-cover"
              />
              <Image
                src={mobileImage}
                alt="Software development agency"
                className="absolute top-0 bottom-0 my-auto"
              />
            </div>
          </div>
          {/* mobile description */}
          <div className="flex flex-col justify-start ss:max-w-[500px] ww:w-[47%]">
            <p className="text-[16px] mt-4 leading-[30px] text-dark font-medium ww:text-[24px] ww:leading-[40px] ">
            {t("mobileAppText")}
            </p>
            <div className={`${styles.flex} justify-start`}>
              <div className="flex gap-2 flex-wrap justify-start ss:justify-between ww:justify-start ww:gap-2 ww:mt-12 mt-8 ww:mb-9 mx-0">
                {MobileCards.map((el) => (
                  <div
                    key={el.id}
                    className="p-2 ww:p-[10px] rounded-lg bg-background w-[140px] ss:w-[160px] ww:w-[150px]"
                  >
                    <Image
                      width={56}
                      height={56}
                      src={el.img}
                      alt="icon"
                      className="ss:w-[56px] ss:h-[56px] w-[40px] h-[40px] mb-3"
                    />
                    <h3 className="ww:text-[18px] text-[14px] text-dark font-[600]">
                      {el.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-6">
              <h3 className="text-secondary font-bold leading-10 text-[32px] mb-8">
              {t("technologies")}
              </h3>
              <div className="flex items-center justify-start gap-[48px]">
                {MobileTechnologiesCards.map((el) => (
                  <div
                    className="flex flex-col justify-center items-center"
                    key={el.id}
                  >
                    <Image
                      src={el.img}
                      alt="icon"
                      width={56}
                      height={56}
                      className="mb-2"
                    />
                    <span className="text-dark font-semibold leading-[30px] text-[20px]">
                      {el.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* mobile images */}
          <div className="relative w-[47%] hidden ww:block h-full">
            <div className="w-full md:h-[600px] lg:h-full relative flex ww:justify-center">
              <Image
                src={bgMobile}
                alt="Software development agency"
                className="w-full h-full object-cover md:rounded-[20px]"
              />
              <Image
                src={mobileImage}
                alt="Software development agency"
                className="absolute top-0 bottom-0 my-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
