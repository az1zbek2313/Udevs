"use client";

interface ToggleType {
  toggleBars: boolean;
  setToggleBars: any;
}

import relogo from "@/../public/ReLogo.png";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const DrawerComponent = ({ toggleBars, setToggleBars }: ToggleType) => {
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [have, setHave] = useState<string | null>(null);

  const handleChange = () => {
    if (textRef.current?.value) {
      setHave(textRef.current?.value!);
    } else {
      setHave(null);
    }
  };

  return (
    <div  
      id="drawer-right-example"
      className={`fixed transition-all duration-200 ${
        !toggleBars ? "hidden" : "block"
      } top-0 right-0 z-40 h-screen overflow-y-auto transition-transform bg-gray-100 shadow-shad dark:bg-gray-800 w-full ss:w-[360px]`}
      aria-labelledby="drawer-right-label"
    >
      {/* navbar  */}
      <nav className="bg-white z-50 p-[15px] shadow-sm fixed top-0 ss:w-[360px] w-full">
        <div className="flex items-center">
          <Image
            width={44}
            height={44}
            src={relogo}
            alt="logo image"
            className="mr-4"
          />
          <div className="flex flex-col ">
            <div className="text-[15px]">Udevs</div>
            <div className="mt-1 text-xs text-absaluteNav">
              <span className="text-[8px]">🟢</span> Welcome
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setToggleBars(false)}
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="text-gray-400 bg-transparent cursor-pointery hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3 text-gray-300 text-3xl"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
      </nav>

      {/* card shablon */}
      <div className="px-6 z-0 py-4 relative">
        <section className="px-4 py-2 bdr mt-20 w-[92%] flex flex-col items-start justify-between rounded-lg rounded-es-none bg-absaluteCard">
          <h3 className="text-[13px] font-bold">
            Udevs &nbsp;
            <span className="font-light opacity-45">16 июл. 23:23</span>
          </h3>
          <p className="text-[14px] leading-[1.4] font-sans mt-1">
            How can we help you )?
          </p>
        </section>
      </div>

      {/* footer  */}
      <footer className="bg-white px-[15px]  shadow-md fixed bottom-0 ss:w-[360px] w-full">
        <form className="max-w-sm mx-auto flex justify-between items-center">
          <textarea
            ref={textRef}
            onChange={handleChange}
            id="message"
            rows={2}
            className="block placeholder:text-[16px] p-2.5 w-full text-sm text-dark bg-transparent border border-transparent focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-dark dark:text-white"
            placeholder="Введите сообщение…"
          ></textarea>
          {
            have &&
          <button
            type="button"
            className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-black bg-gray-200 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          }
        </form>
        <div className="flex justify-between items-center my-3 border-t-[1.5px] pt-2">
          {/* <!-- Button Group --> */}
          <div className="flex items-center">
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
            {/* <!-- Send Button --> */}
            <Link
              target="blank"
              href="https://replain.cc/ru?utm_source=replain_copyright&utm_medium=affiliate"
              className="text-[11px] text-[#bbb] "
            >
              Powered by ⚡ Re:plain
            </Link>
            {/* <!-- End Send Button --> */}
          </div>
          {/* <!-- End Button Group --> */}
        </div>
      </footer>
    </div>
  );
};

export default DrawerComponent;
