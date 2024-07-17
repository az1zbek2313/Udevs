"use client";

import Link from "next/link";
import logotip from "../../public/logotip.svg";
import Image from "next/image";
import phoneIcon from "@/../public/phone.svg";
import erpIcon from "@/../public/erp.svg";
import designIcon from "@/../public/design.svg";
import consultIcon from "@/../public/consult.svg";
import infrastructureIcon from "@/../public/infrastructure.svg";
import deleverIcon from "@/../public/delever.svg";
import smsuzIcon from "@/../public/smsuz.svg";
import goodzoneIcon from "@/../public/goodzone.svg";
import imanIcon from "@/../public/iman.svg";
import rusflag from "@/../public/rusflag.svg";
import engflag from "@/../public/engflag.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "flowbite";
import { useDispatch } from "react-redux";
import {
  langToEng,
  langToRus,
} from "@/app/GlobalRedux/Feature/language/languageSlice";
import i18n from "@/Languages/i18n";

function Navbar() {
  const [toggleService, setToggleService] = useState<boolean>(false);
  const [togglePortfolio, setTogglePortfolio] = useState<boolean>(false);
  const [toggleLanguage, setToggleLanguage] = useState<boolean>(false);
  const [toggleBars, setToggleBars] = useState<boolean>(false);
  const changeLang = (value:string) => {
    i18n.changeLanguage(value);
  }
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function handleLanguage(arg: string) {
    if (arg === "en") {
      changeLang('en');
      dispatch(langToEng());
      localStorage.setItem("lang", JSON.stringify("en"));
    }
    if (arg === "ru") {
      changeLang('ru');
      dispatch(langToRus());
      localStorage.setItem("lang", JSON.stringify("ru"));
    }
  }

  return (
    <nav className="fixed z-40 w-full bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={logotip} className="h-8" alt="uzDevs logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-multi-level"
          onClick={() => setToggleBars(!toggleBars)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-600 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="true"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* <!-- drawer component --> */}
        <div
          id="drawer-right-example"
          className={`fixed transition-all duration-200 ${
            !toggleBars ? "hidden" : "lg:hidden"
          } top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-slate-100 dark:bg-gray-800 w-full`}
          aria-labelledby="drawer-right-label"
        >
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={logotip} className="h-8" alt="uzDevs logo" />
          </Link>
          <button
            type="button"
            onClick={() => setToggleBars(!toggleBars)}
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3 text-blue-600 text-3xl"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div>
            <ul className="leading-10 my-44">
              <li
                onClick={() => setToggleBars(!toggleBars)}
                className="text-center text-3xl font-bold mb-4"
              >
                <Link href={`#service`}>{t('services')}</Link>
              </li>
              <li
                onClick={() => setToggleBars(!toggleBars)}
                className="text-center text-3xl font-bold mb-4"
              >
                <Link href={`#clients`}>{t('clients')}</Link>
              </li>
              <li
                onClick={() => setToggleBars(!toggleBars)}
                className="text-center text-3xl font-bold"
              >
                <Link href={`#command`}>{t('command')}</Link>
              </li>
            </ul>
            <Link
              href={"#contact"}
              type="button"
              className="block text-white mr-8 w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-lg"
            >
              {t('contact')}
            </Link>
            <ul className="flex justify-center gap-3 mt-6">
              <li className="bg-blue-600 text-white p-3 text-3xl rounded-3xl">
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </Link>
              </li>
              <li className="bg-blue-600 text-white p-3 text-3xl rounded-3xl">
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                  </svg>
                </Link>
              </li>
              <li className="bg-blue-600 text-white p-3 text-3xl rounded-3xl">
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`w-full lg:block md:w-auto ${
            toggleBars ? "block" : "hidden"
          }`}
          id="navbar-multi-level"
        >
          <ul className=" flex flex-col justify-between items-center font-medium p-5 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="#service"
                className="py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:border-b-2 border-blue-600 md:p-0 md:w-auto transition-all duration-200 dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent font-semibold border-2 text-sm"
                aria-current="page"
              >
                {t("direction")}
              </Link>
            </li>
            <li>
              <Link
                href="#team"
                className="py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:border-b-2 border-blue-600 md:p-0 md:w-auto transition-all duration-200 dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent font-semibold border-2 text-sm"
                aria-current="page"
              >
                {t("command")}
              </Link>
            </li>
            <li className="relative">
              <button
                id="dropdownBottomButton"
                onMouseEnter={() => setToggleService(!toggleService)}
                data-dropdown-toggle="dropdownBottom"
                data-dropdown-placement="bottom"
                className="md:hover:text-blue-800 relative flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent font-semibold text-sm"
              >
                {t("services")}{" "}
                <svg
                  className="w-2 h-2 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownBottom"
                onMouseLeave={() => setToggleService(false)}
                onMouseEnter={() => setToggleService(true)}
                className={`z-10 ${
                  toggleService ? "" : "hidden"
                } absolute top-1 bg-white rounded-lg shadow w-72 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownBottomButton"
                >
                  <li>
                    <p className="ml-4 mt-2 mb-4 opacity-65">{t("direction")}</p>
                  </li>
                  <li className="flex items-center justify-center">
                    <a
                      href="#mobileApp"
                      className="flex items-center justify-center gap-6 px-3 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white hover:text-white transition-all duration-500"
                    >
                      <Image src={phoneIcon} alt="icon" />
                      <p>{t("mobileApp")}</p>
                    </a>
                  </li>
                  <li className="flex items-center justify-center">
                    <a
                      href="#erpSystem"
                      className="flex items-center justify-center gap-6 px-3 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white hover:text-white transition-all duration-500"
                    >
                      <Image src={erpIcon} alt="icon" />
                      <p>{t("erpSystem")}</p>
                    </a>
                  </li>
                  <li className="flex items-center justify-center">
                    <a
                      href="#design"
                      className="flex items-center justify-center gap-6 px-3 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white hover:text-white transition-all duration-500"
                    >
                      <Image src={designIcon} alt="icon" />
                      <p>{t("design")}</p>
                    </a>
                  </li>
                  <li className="flex items-center justify-center">
                    <a
                      href="#consult"
                      className=" w-full flex items-center justify-start gap-6 px-3 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white hover:text-white transition-all duration-500"
                    >
                      <Image src={consultIcon} alt="icon" />
                      <p>{t("consult")}</p>
                    </a>
                  </li>
                  <li className="flex items-center justify-center">
                    <a
                      href="#infrastructure"
                      className="flex items-center justify-start gap-6 px-3 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white hover:text-white transition-all duration-500"
                    >
                      <Image src={infrastructureIcon} alt="icon" />
                      <p>{t("infrastructure")}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="#tools"
                className="py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:border-b-2 border-blue-600 md:p-0 md:w-auto transition-all duration-200 dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent font-semibold border-2 text-sm"
                aria-current="page"
              >
                {t("tools")}
              </Link>
            </li>
            <li>
              <Link
                href="#clients"
                className="py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:border-b-2 border-blue-600 md:p-0 md:w-auto transition-all duration-200 dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent font-semibold border-2 text-sm"
                aria-current="page"
              >
                {t("clients")}
              </Link>
            </li>
            <li className="relative">
              <button
                id="dropdownNavbarLink"
                onMouseEnter={() => setTogglePortfolio(!togglePortfolio)}
                data-dropdown-toggle="dropdownNavbar"
                className="md:hover:text-blue-800 flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent font-semibold text-sm"
              >
                {t("portfolio")}{" "}
                <svg
                  className="w-2 h-2 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownBottom"
                onMouseLeave={() => setTogglePortfolio(false)}
                onMouseEnter={() => setTogglePortfolio(true)}
                className={`z-10 ${
                  togglePortfolio ? "" : "hidden"
                } mt-3 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownBottomButton"
                >
                  <li>
                    <p className="ml-4 mt-2 mb-4 opacity-65">{t("portfolio")}</p>
                  </li>
                  <li className="flex items-center justify-center">
                    <a
                      href="#delever"
                      className="flex w-full items-center justify-start gap-6 px-3 pl-8 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white hover:text-white transition-all duration-500"
                    >
                      <Image src={deleverIcon} alt="icon" />
                      <p>Develever</p>
                    </a>
                  </li>
                  <li className="flex items-center justify-center">
                    <a
                      href="#smsuz"
                      className="flex w-full items-center justify-start gap-6 px-3 pl-8 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white hover:text-white transition-all duration-500"
                    >
                      <Image src={smsuzIcon} alt="icon" />
                      <p>Sms.uz</p>
                    </a>
                  </li>
                  <li className="flex items-center justify-center">
                    <a
                      href="#goodzone"
                      className="w-full flex items-center justify-start gap-6 px-3 pl-8 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white hover:text-white transition-all duration-500"
                    >
                      <Image src={goodzoneIcon} alt="icon" />
                      <p>Goodzone</p>
                    </a>
                  </li>
                  <li className="flex items-center justify-center">
                    <a
                      href="#iman"
                      className=" w-full flex items-center justify-start gap-6 px-3 pl-8 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white hover:text-white transition-all duration-500"
                    >
                      <Image src={imanIcon} alt="icon" />
                      <p>Iman</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                onMouseEnter={() => setToggleLanguage(true)}
                data-dropdown-toggle="dropdownNavbar"
                className="md:hover:text-blue-800 flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent font-semibold text-sm"
              >
                {t("language")}{" "}
                <svg
                  className="w-2 h-2 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownBottom"
                onMouseLeave={() => setToggleLanguage(false)}
                onMouseEnter={() => setToggleLanguage(true)}
                className={`z-10 ${
                  toggleLanguage ? "" : "hidden"
                } mt-3 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-28 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownBottomButton"
                >
                  <li
                    onClick={() => {
                      handleLanguage("ru");
                    }}
                    className="flex items-center justify-center"
                  >
                    <div className="flex w-full items-center justify-start gap-6 px-3 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white hover:text-white transition-all duration-500">
                      <Image width={24} src={rusflag} alt="icon" />
                      <p className="text-[16px] font-medium">Rus</p>
                    </div>
                  </li>

                  <li
                    onClick={() => {
                      handleLanguage("en");
                    }}
                    className="flex items-center justify-center"
                  >
                    <div className="flex w-full items-center justify-start gap-6 px-3 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white hover:text-white transition-all duration-500">
                      <Image width={24} src={engflag} alt="icon" />
                      <p className="text-[16px] font-medium">Eng</p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href={"#contact"}
                type="button"
                className="text-white mr-8 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
