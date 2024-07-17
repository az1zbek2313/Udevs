import { ImanCards } from "@/functions/page";
import { styles } from "@/utils/page";
import Image from "next/image";
import bgIman from "@/../public/imanImage.png";
import imanLogo from "@/../public/imanLogo.svg";
import imanIcon from "@/../public/imanIcon.svg";
import { useTranslation } from "react-i18next";

const Iman = () => {
  const {t} = useTranslation();

  return (
    <div
      id="iman"
      className="ww:py-20 py-10 w-full backgroundImage"
    >
      <div className={`${styles.container}`}>
        <div className={`${styles.flex} w-full `}>
          {/* hidden smsuz */}
          <div className="mb-[24px] ww:hidden block">
            <Image src={imanLogo} alt="delever logo" className="mb-[20px]" />
            <section className="bg-imanbg flex items-center gap-2 px-4 py-1 w-[130px] rounded-3xl">
              <Image src={imanIcon} alt="delivery icon" />
              <span className="text-imancolor text-[14px]">Finance</span>
            </section>
          </div>
          {/*responsive image smsuz */}
          <div className=" ww:hidden block w-full relative ww:w-[48%] h-full">
            <div className="relative flex ww:justify-center  ww:h-[600px] lg:h-full">
              <Image
                src={bgIman}
                alt="Software development agency"
                className="object-contain ww:rounded-[20px]"
              />
            </div>
          </div>
          {/* goodzone description */}
          <div className="flex flex-col justify-start  ww:w-[48%]">
            <div className="mb-[34px] hidden ww:block">
              <Image src={imanLogo} alt="delever logo" className="mb-[30px]" />
              <section className="bg-imanbg flex items-center gap-2 px-4 py-1 w-[120px] rounded-3xl">
                <Image src={imanIcon} alt="delivery icon" />
                <span className="text-imancolor text-[14px]">
                  Finance
                </span>
              </section>
            </div>
            <p className="text-[16px] leading-[30px] text-secondary font-semibold w-full ww:text-[20px] ww:leading-[40px] ww:w-[547px]">
            {t('imanText')}
            </p>
            <h3 className="font-bold text-[1.38316rem] mt-6 text-dark">
            {t('wedid')}
            </h3>
            <div className={`${styles.flex} justify-start`}>
              <div className="flex gap-2 flex-wrap justify-start ww:gap-4 mt-6 ww:mb-9 mx-0">
                {ImanCards.map((el) => (
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
                    <h3 className="ww:text-[18px] xs:text-[14px] text-[10px] text-dark font-[600]">
                      {el.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* image smsuz */}
          <div className="hidden ww:block w-full relative ww:w-[48%] h-full">
            <div className="relative flex ww:justify-center  ww:h-[600px] lg:h-full">
              <Image
                src={bgIman}
                alt="Software development agency"
                className="object-contain ww:rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iman;
