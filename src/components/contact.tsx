"use client";

import { styles } from "@/utils/page";
import { Contact as ContactMessage } from "@/functions/page";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface ValidateType {
  name: string | undefined;
  email: string | undefined;
  text: string | undefined;
}

const Contact = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [found1, setFound1] = useState<boolean>(false);
  const [found2, setFound2] = useState<boolean>(false);
  const [found3, setFound3] = useState<boolean>(false);
  const {t} = useTranslation();

  const Validate = ({ name, email, text }: ValidateType) => {
    if (!name) {
      nameRef.current?.focus();
      setFound1(false);
      return false;
    }
    if (!email) {
      emailRef.current?.focus();
      setFound2(false);
      return false;
    }
    if (!text) {
      textRef.current?.focus();
      setFound3(false);
      return false;
    }
    return true;
  };

  const handleClick = () => {
    const isValid = Validate({
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      text: textRef.current?.value || "",
    });

    if (isValid) {
      alert("Muvaffaqiyatli to'ldirildi ✅");
      if (nameRef.current) {
        nameRef.current.value = "";
      }
      if (emailRef.current) {
        emailRef.current.value = "";
      }
      if (textRef.current) {
        textRef.current.value = "";
      }
    }
  };

  return (
    <div id="contact" className="ww:py-10 py-8 backgroundImage">
      <div className={`${styles.container} relative`}>
        <h1
          className={`${styles.heading1} text-start ww:text-[64px] text-[32px] mb-[21px] ww:mb-[42px]`}
        >
          {t('contactus')}
        </h1>
        <div className="ww:p-padding ww:shadow-boxshadow rounded-none ww:rounded-xl gap-14 bg-white ww:flex ww:justify-between ww:items-center w-full">
          <div className="flex flex-col gap-6 w-full ww:w-[48%]">
            <h3 className="text-[20px] leading-7 text-contact font-manrope font-bold">
            {t('message')}
            </h3>
            {/* name input */}
            <div className="relative">
              <input
                ref={nameRef}
                onChange={(e) => {
                  e.target.value ? setFound1(true) : setFound1(false);
                }}
                type="text"
                id="floating_outlined"
                className={`block p-pInput w-full text-gray-900 bg-transparent rounded-md border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${
                  found1 ? "focus:border-blue-600" : "focus:border-red-500"
                } peer`}
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className={`absolute text-[20px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  ${
                  found1
                    ? "peer-focus:text-blue-600"
                    : "peer-focus:text-red-500"
                } peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
              >
                {t('name')}
              </label>
            </div>
            {/* email input */}
            <div className="relative">
              <input
                onChange={(e) => {
                  e.target.value ? setFound2(true) : setFound2(false);
                }}
                ref={emailRef}
                type="text"
                id="floating_outlined"
                className={`block p-pInput w-full text-gray-900 bg-transparent rounded-md border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ${
                  found2 ? "focus:border-blue-600" : "focus:border-red-500"
                } peer`}
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className={`absolute text-[20px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 ${
                  found2
                    ? "peer-focus:text-blue-600"
                    : "peer-focus:text-red-500"
                } peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
              >
                {t('email')}
              </label>
            </div>
            {/* <!-- Textarea --> */}
            <div className="relative">
              <textarea
                ref={textRef}
                onChange={(e) => {
                  e.target.value ? setFound3(true) : setFound3(false);
                }}
                id="hs-textarea-ex-1"
                className={`p-4 pb-12 block w-full focus:outline-none border-gray-200 border-[1px] rounded-lg text-sm ${
                  found3 ? "focus:border-blue-500" : "focus:border-red-500"
                } focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none`}
                placeholder={t('yourProject')}
              ></textarea>

              {/* <!-- Toolbar --> */}
              <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white">
                <div className="flex justify-between items-center">
                  {/* <!-- Button Group --> */}
                  <div className="flex items-center">
                    {/* <!-- Mic Button --> */}
                    <button
                      type="button"
                      className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        <line x1="9" x2="15" y1="15" y2="9"></line>
                      </svg>
                    </button>
                    {/* <!-- End Mic Button --> */}

                    {/* <!-- Attach Button --> */}
                    <label
                      htmlFor="attach"
                      className="cursor-pointer inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                      </svg>
                    </label>
                    <input type="file" id="attach" className="hidden" />
                    {/* <!-- End Attach Button --> */}
                  </div>
                  {/* <!-- End Button Group --> */}

                  {/* <!-- Button Group --> */}
                  <div className="flex items-center gap-x-1">
                    {/* <!-- Mic Button --> */}
                    <button
                      type="button"
                      className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" x2="12" y1="19" y2="22"></line>
                      </svg>
                    </button>
                    {/* <!-- End Mic Button --> */}

                    {/* <!-- Send Button --> */}
                    <button
                      type="button"
                      className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                      </svg>
                    </button>
                    {/* <!-- End Send Button --> */}
                  </div>
                  {/* <!-- End Button Group --> */}
                </div>
              </div>
              {/* <!-- End Toolbar --> */}
            </div>
            {/* <!-- End Textarea --> */}
            <button
              onClick={handleClick}
              className="text-white mb-4 ww:mb-0 w-[300px] mx-auto ss:mx-0 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {t('send')}
            </button>
          </div>
          <div className="flex flex-col ww:pl-10 w-full gap-6 ww:w-[48%]">
            {ContactMessage.map((el) => (
              <Link
                key={el.id}
                href={el.href}
                className="flex gap-2 items-center justify-start"
              >
                {el.img ? (
                  <Image src={el.img} alt="icon" />
                ) : (
                  <svg
                    className="text-blue-600"
                    focusable="true"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height={24}
                    width={24}
                    color="#1B5BF7"
                    style={{ color: "#1B5BF7", marginRight: "6px" }}
                  >
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
                  </svg>
                )}
                <p
                  className={`opacity-80 ${
                    !el.img && "text-blue-700 font-bold opacity-1"
                  }`}
                >
                  {el.title}
                </p>
              </Link>
            ))}
            <ul className="flex justify-start gap-3 mt-2">
              <li className="text-blue-600">
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                </Link>
              </li>
              <li className="text-blue-600">
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </Link>
              </li>
              <li className="text-blue-600">
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </Link>
              </li>
              <li className="text-blue-600">
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                  </svg>
                </Link>
              </li>
            </ul>
            <div className="hidden ww:block relative">
              <a
                href="https://yandex.com/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
                className="text-red-50 text-[12px] absolute top-0"
              >
                Tashkent
              </a>
              <a
                href="https://yandex.com/maps/10335/tashkent/?from=mapframe&ll=69.300851%2C41.334453&mode=usermaps&source=mapframe&um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&utm_medium=mapframe&utm_source=maps&z=15"
                className="absolute text-red-50 top-[14px] text-xs"
              >
                Yandex Maps: search for places, transport, and routes
              </a>
              <iframe
                src="https://yandex.com/map-widget/v1/?from=mapframe&ll=69.300851%2C41.334453&mode=usermaps&source=mapframe&um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&utm_source=mapframe&z=15"
                height="200"
                className="relative max-w-[400px] w-full "
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
