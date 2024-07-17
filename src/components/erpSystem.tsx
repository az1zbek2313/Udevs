import { ErpSystemCards } from "@/functions/page";
import { styles } from "@/utils/page";
import Image from "next/image";
import bgMobile from "@/../public/bgMobile.png";
import mobileImage from "@/../public/erpImage.png";
import { useTranslation } from "react-i18next";

const ErpSystem = () => {
  const { t } = useTranslation();

  return (
    <div id="erpSystem" className="ww:py-20 py-4 w-full bg-background">
      <div className={`${styles.container}`}>
        <h1
          className={`${styles.heading1}  text-start ww:text-[64px] text-[32px] mb-[21px] ww:mb-[64px] ww:w-[800px] w-[270px] ww:leading-[64px] leading-[40px] mx-0`}
        >
          {t("erpSystem")}
        </h1>
        <div className={`${styles.flex1} w-full `}>
          {/* responsive image mobile */}
          <div className=" w-full ss:w-[500px] relative ww:w-[48%] h-full">
            <div className="relative flex ww:justify-center  ww:h-[600px] lg:h-full">
              <Image
                src={bgMobile}
                alt="Software development agency"
                className="object-cover ww:rounded-[20px]"
              />
              <Image
                src={mobileImage}
                alt="Software development agency"
                className="absolute top-0 bottom-0 my-auto"
              />
            </div>
          </div>
          {/* mobile description */}
          <div className="flex flex-col justify-start ss:max-w-[500px] ww:w-[46%] ww:ml-2">
            <p className="text-[16px] leading-[30px] text-dark font-medium w-full ww:text-[24px] ww:leading-[40px] ">
              {t("erpSystemText")}
            </p>
            <div className={`${styles.flex} justify-start`}>
              <div className="flex gap-2 flex-wrap justify-start ss:justify-between ww:justify-start ww:gap-2 ww:mt-12 mt-8 ww:mb-9 mx-0">
                {ErpSystemCards.map((el) => (
                  <div
                    key={el.id}
                    className="p-2 ww:p-[10px] rounded-lg bg-cardbg w-[140px] ss:w-[160px] ww:w-[150px]"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErpSystem;
