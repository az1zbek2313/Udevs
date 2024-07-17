import { styles } from "@/utils/page";
import Image from "next/image";
import { ServiceCards } from "@/functions/page";
import { useTranslation } from "react-i18next";

const Service = () => {
  const {t} = useTranslation();

  return (
    <div id="service" className="service">
      <div className="max-w-screen-xl mx-auto px-6 py-[100px] ">
        <h1
          className={`${styles.heading1} ww:text-[64px] text-[32px] ww:leading-[64px] mb-[21px] ww:mb-[42px]`}
        >
          {t("ourServices")}
        </h1>
        <div className="flex w-full flex-wrap  justify-between xs:gap-5 ww:gap-5 mt-16">
          {ServiceCards.map((el) => (
            <div
              key={el.id}
              className="p-4 mt-2 xs:mt-0 xs:p-8 rounded-lg bg-background w-[48%] xs:w-[47%] ww:w-[31%] xs:h-[210px]"
            >
              <Image
                width={35}
                height={35}
                src={el.img}
                alt="icon"
                className="mb-7 w-[35px] h-[35px]"
              />
              <h3 className="ww:text-xl text-[16px] text-dark font-[500] mb-5">
                {t(el.title)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
