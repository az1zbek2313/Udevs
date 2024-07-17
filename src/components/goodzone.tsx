'use client';

import { DeleverCards } from "@/functions/page";
import { styles } from "@/utils/page";
import Image from "next/image";
import bgGoodzone from "@/../public/goodzoneImage.png";
import goodzoneIcon from "@/../public/commerceredIcon.svg";
import goodzoneLogo from "@/../public/goodzoneLogo.png";
import { useTranslation } from "react-i18next";

const Goodzone = () => {
  const {t} = useTranslation();
  
  return (
    <div
      id="goodzone"
      className="ww:py-20 py-10 w-full backgroundImage"
    >
      <div className={`${styles.container}`}>
        <div className={`${styles.flex} w-full `}>
          {/* hidden goodzone */}
        <div className="mb-[24px] ww:hidden block">
              <Image
                src={goodzoneLogo}
                alt="delever logo"
                className="mb-[20px]"
              />
              <section className="bg-goodzonebg flex items-center gap-2 px-4 py-1 w-[130px] rounded-3xl">
                <Image src={goodzoneIcon} alt="delivery icon" />
                <span className="text-goodzonecolor text-[14px]">{t('goodzone')}</span>
              </section>
            </div>
          {/* image goodzone */}
          <div className=" w-full relative ww:w-[48%] h-full">
            <div className="relative flex ww:justify-center  ww:h-[600px] lg:h-full">
              <Image
                src={bgGoodzone}
                alt="Software development agency"
                className="object-contain ww:rounded-[20px]"
              />
            </div>
          </div>
          {/* goodzone description */}
          <div className="flex flex-col justify-start  ww:w-[48%]">
            <div className="mb-[34px] hidden ww:block">
              <Image
                src={goodzoneLogo}
                alt="goodzone logo"
                className="mb-[30px]"
              />
              <section className="bg-goodzonebg flex items-center gap-2 px-4 py-1 w-[156px] rounded-3xl">
                <Image src={goodzoneIcon} alt="delivery icon" />
                <span className="text-goodzonecolor text-[14px]">E-Commerce</span>
              </section>
            </div>
            <p className="text-[16px] leading-[30px] text-secondary font-semibold w-full ww:text-[20px] ww:leading-[40px] ">
            {t('deleverText')}
            </p>
            <h3 className="font-bold text-[1.38316rem] mt-6 text-dark">
            {t('wedid')}
            </h3>
            <div className={`${styles.flex} justify-start`}>
              <div className="flex gap-2 flex-wrap justify-start ww:gap-4 mt-6 ww:mb-9 mx-0">
                {DeleverCards.map((el) => (
                  <div
                    key={el.id}
                    className="p-2 ww:p-[10px] rounded-lg bg-background w-[31%] ww:w-[150px]"
                  >
                    <Image
                      width={56}
                      height={56}
                      src={el.img}
                      alt="icon"
                      className="ss:w-[56px] ss:h-[56px] w-[40px] h-[40px] mb-3"
                    />
                    <h3 className="ww:text-[18px] xs:text-[14px] text-[12px] text-dark font-[600]">
                      {el.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goodzone;
