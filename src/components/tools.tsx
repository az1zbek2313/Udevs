"use client";

import { styles } from "@/utils/page";
import Image from "next/image";
import { useRef, useState } from "react";
import { allTools } from "@/functions/page";
import { useTranslation } from "react-i18next";

const Tools = () => {
  const frontendRef = useRef<HTMLInputElement>(null);
  const backendRef = useRef<HTMLInputElement>(null);
  const devopsRef = useRef<HTMLInputElement>(null);
  const testingRef = useRef<HTMLInputElement>(null);
  const uxRef = useRef<HTMLInputElement>(null);
  const InfrastructureRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const [frontend, setFrontend] = useState<boolean>(false);
  const [backend, setBackend] = useState<boolean>(false);
  const [devops, setDevops] = useState<boolean>(false);
  const [testing, setTesting] = useState<boolean>(false);
  const [design, setDesign] = useState<boolean>(false);
  const [Infrastructure, setInfrastructure] = useState<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(false);
  const {t} = useTranslation();

  const handleChange = () => {
    setFrontend(frontendRef.current?.checked!);
    setBackend(backendRef.current?.checked!);
    setDevops(devopsRef.current?.checked!);
    setTesting(testingRef.current?.checked!);
    setDesign(uxRef.current?.checked!);
    setInfrastructure(InfrastructureRef.current?.checked!);
    setMobile(mobileRef.current?.checked!);
  };

  const handleClick = (e:any) => {
    if (frontend || backend || devops || testing || design || Infrastructure || mobile) {
      // all tools view
      setFrontend(false);
      setBackend(false);
      setDevops(false);
      setTesting(false);
      setDesign(false);
      setInfrastructure(false);
      setMobile(false);
      // radio button false 
      if (e.target.checked) {
        e.target.checked = false;
      } 
    }
  };

  return (
    <div id="tools" className="ww:py-20 py-4 w-full bg-background">
      <div className={`${styles.container}`}>
        <h1
          className={`${styles.heading1}  text-start ww:text-[64px] text-[32px] mb-[21px] ww:mb-[64px] ww:w-[800px] w-[270px] ww:leading-[64px] leading-[40px] mx-0`}
        >
          {t('tools')}
        </h1>

        {/* radio buttons */}
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center me-4">
              <input
                onChange={handleChange}
                onClick={handleClick}
                ref={frontendRef}
                id="red-radio"
                type="radio"
                value=""
                name="colored-radio"
                className="w-6 h-6 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              />
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-semibold text-black dark:text-gray-300 cursor-pointer"
              >
                Frontend
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                onChange={handleChange}
                onClick={handleClick}
                ref={backendRef}
                id="green-radio"
                type="radio"
                value=""
                name="colored-radio"
                className="w-6 h-6 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              />
              <label
                htmlFor="green-radio"
                className="ms-2 text-sm font-semibold text-black dark:text-gray-300 cursor-pointer"
              >
                Backend
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                onChange={handleChange}
                onClick={handleClick}
                ref={devopsRef}
                id="purple-radio"
                type="radio"
                value=""
                name="colored-radio"
                className="w-6 h-6 bg-gray-100 border-gray-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              />
              <label
                htmlFor="purple-radio"
                className="ms-2 text-sm font-semibold text-black dark:text-gray-300 cursor-pointer"
              >
                Devops
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                onChange={handleChange}
                onClick={handleClick}
                ref={testingRef}
                id="teal-radio"
                type="radio"
                value=""
                name="colored-radio"
                className="w-6 h-6 text-teal-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              />
              <label
                htmlFor="teal-radio"
                className="ms-2 text-sm font-semibold text-black dark:text-gray-300 cursor-pointer"
              >
                Testing
              </label>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center me-4">
              <input
                onChange={handleChange}
                onClick={handleClick}
                ref={uxRef}
                id="yellow-radio"
                type="radio"
                value=""
                name="colored-radio"
                className="w-6 h-6 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              />
              <label
                htmlFor="yellow-radio"
                className="ms-2 text-sm font-semibold text-black dark:text-gray-300 cursor-pointer"
              >
                UX/UI
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                onChange={handleChange}
                onClick={handleClick}
                ref={InfrastructureRef}
                id="orange-radio"
                type="radio"
                value=""
                name="colored-radio"
                className="w-6 h-6 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              />
              <label
                htmlFor="orange-radio"
                className="ms-2 text-sm font-semibold text-black dark:text-gray-300 cursor-pointer"
              >
                Infrastructure
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                onChange={handleChange}
                onClick={handleClick}
                ref={mobileRef}
                id="pink-radio"
                type="radio"
                value=""
                name="colored-radio"
                className="w-6 h-6 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              />
              <label
                htmlFor="pink-radio"
                className="ms-2 text-sm font-semibold text-black dark:text-gray-300 cursor-pointer"
              >
                Mobile
              </label>
            </div>
          </div>
        </div>

        {/* all tools  */}
        <div className="mt-12 grid gap-[8px] ww:grid-cols-12 ss:grid-cols-8 grid-cols-4">
          {allTools.map((el) => (
            <div
              key={el.id}
              style={
                (frontend && el.category !== "frontend") ||
                (backend && el.category !== "backend") ||
                (devops && el.category !== "devops") ||
                (testing && el.category !== "testing") ||
                (design && el.category !== "design") ||
                (Infrastructure && el.category !== "Infrastructure") ||
                (mobile && el.category !== "mobile")
                  ? { background: "transparent", opacity: 0.4 }
                  : { background: el.bgColor, opacity: 1 }
              }
              className="flex flex-col items-center justify-center h-[54px] ww:h-[90px] rounded-[5px] transition-opacity duration-200"
            >
              <Image
                src={el.image}
                alt="tool"
                className="ww:w-6 ww:h-6 w-[15px] h-[15px]"
              />
              <span className="mt-[5px] ww:mt-[15px] text-[9px] ww:text-[11px] text-center overflow-ellipsis ">
                {el.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
