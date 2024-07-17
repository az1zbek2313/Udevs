'use client';

import Hero from "@/components/hero";
import Service from "@/components/service";
import Team from "@/components/team";
import MobileApp from "@/components/mobileApp";
import ErpSystem from "@/components/erpSystem";
import Design from "@/components/design";
import Infrastructure from "@/components/infrastructure";
import Consult from "@/components/consult";
import Tools from "@/components/tools";
import Clients from "@/components/clients";
import Delever from "@/components/delever";
import Smsuz from "@/components/smsuz";
import Goodzone from "@/components/goodzone";
import Iman from "@/components/iman";
import Work from "@/components/work";
import Contact from "@/components/contact";

function HomePage() {
  
  return (
    <>
      {/* hero */}
      <Hero />
      {/* our services */}
      <Service />
      {/* team */}
      <Team />
      {/* Development of mobile applications */}
      <MobileApp />
      {/* ERP systems */}
      <ErpSystem />
      {/* UI / UX design */}
      <Design />
      {/* Optimization Infrastructure */}
      <Infrastructure />
      {/* IT consulting */}
      <Consult />
      {/* tools*/}
      <Tools />
      {/* our clients*/}
      <Clients />
      {/* delever */}
      <Delever />
      {/* smsuz */}
      <Smsuz />
      {/* goodzone */}
      <Goodzone />
      {/* iman */}
      <Iman />
      {/* how we work*/}
      <Work />
      {/* contact us*/}
      <Contact />
      
    </>
  )
}

export default HomePage