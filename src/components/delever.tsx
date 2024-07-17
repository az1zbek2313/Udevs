'use client';

import { DeleverCards } from "@/functions/page";
import { styles } from "@/utils/page";
import Image from "next/image";
import bgDelever from "@/../public/deleverImage.png";
import deliveryIcon from "@/../public/deliveruIcon.svg";
import deleverLogo from "@/../public/deleverLogo.svg";
import { useTranslation } from "react-i18next";

const Delever = () => {
  const { t } = useTranslation();

  return (
    <div id="delever" className="ww:py-20 py-10 w-full backgroundImage">
      <div className={`${styles.container}`}>
        <div className={`${styles.flex} w-full `}>
          {/* hidden delever logog */}
          <div className="mb-[24px] ww:hidden block">
            <Image src={deleverLogo} alt="delever logo" className="mb-[20px]" />
            <section className="bg-deliverybg flex items-center gap-2 px-4 py-1 w-[118px] rounded-3xl">
              <Image src={deliveryIcon} alt="delivery icon" />
              <span className="text-deliverycolor text-[14px]">
                {t("delever")}
              </span>
            </section>
          </div>
          {/* image delever */}
          <div className=" w-full relative ww:w-[48%] h-full">
            <div className="relative flex ww:justify-center  ww:h-[600px] lg:h-full">
              <Image
                src={bgDelever}
                alt="Software development agency"
                className="object-cover ww:rounded-[20px]"
              />
            </div>
          </div>
          {/* delever description */}
          <div className="flex flex-col justify-start  ww:w-[48%]">
            <div className="mb-[34px] hidden ww:block">
              <Image
                src={deleverLogo}
                alt="delever logo"
                className="mb-[30px]"
              />
              <section className="bg-deliverybg flex items-center gap-2 px-4 py-1 w-[118px] rounded-3xl">
                <Image src={deliveryIcon} alt="delivery icon" />
                <span className="text-deliverycolor text-[14px]">{t('delever')}</span>
              </section>
            </div>
            <p className="text-[16px] leading-[30px] text-secondary font-semibold w-full ww:text-[20px] ww:leading-[40px] ">
              {t("deleverText")}
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

export default Delever;
