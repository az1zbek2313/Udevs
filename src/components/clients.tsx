import Marquee from "react-fast-marquee";
import { styles } from "@/utils/page";
import { FirstClient, SecondClient } from "@/functions/page";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const {t} = useTranslation();
  
  return (
    <div id="clients">
      <div className={`${styles.container} mt-8`}>
        <h1
          className={`${styles.heading1}  text-start ww:text-[64px] text-[32px] mb-[21px] ww:mb-[62px] ww:w-[800px] w-[270px] ww:leading-[64px] leading-[40px] mx-0`}
        >
          {t('ourClients')}
        </h1>
      </div>
      <Marquee speed={10} className="sm:h-[150px] h-[120px] sm:my-6">
        <div className="flex gap-3 sm:gap-6 w-full h-full">
          {FirstClient.map((el) => (
           <div key={el.id} className="hidden sm:inline-block transition-all duration-500 hover:scale-110">
             <Image
              width={210}
              height={126}
              key={el.id}
              src={el.img}
              alt="icon"
              style={{boxShadow:"0 0 8px rgba(0,0,0,.15)"}}
              className={`${el.id == 7 && "mr-6"} rounded-[24px]`}
            />
           </div>
          ))}
          {FirstClient.map((el) => (
           <div key={el.id} className="sm:hidden inline-block transition-all duration-500 hover:scale-110">
             <Image
              width={130}
              height={95}
              key={el.id}
              src={el.img}
              alt="icon"
              style={{boxShadow:"0 0 8px rgba(0,0,0,.15)"}}
              className={`${el.id == 7 && "mr-6"} rounded-[24px]`}
            />
           </div>
          ))}
        </div>
      </Marquee>
      <Marquee speed={10} direction="right" className="sm:h-[150px] h-[120px] sm:my-6">
        <div className="flex gap-3 sm:gap-6 w-full h-full">
        {SecondClient.map((el) => (
           <div key={el.id} className="hidden sm:inline-block transition-all duration-500 hover:scale-110">
             <Image
              width={210}
              height={126}
              key={el.id}
              src={el.img}
              alt="icon"
              style={{boxShadow:"0 0 8px rgba(0,0,0,.15)"}}
              className={`${el.id == 7 && "mr-6"} rounded-[24px]`}
            />
           </div>
          ))}
          {SecondClient.map((el) => (
           <div key={el.id} className="sm:hidden inline-block  transition-all duration-500 hover:scale-110">
             <Image
              width={130}
              height={95}
              key={el.id}
              src={el.img}
              alt="icon"
              style={{boxShadow:"0 0 8px rgba(0,0,0,.15)"}}
              className={`${el.id == 7 && "mr-6"} rounded-[24px]`}
            />
           </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Clients;
