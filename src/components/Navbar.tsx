"use client";
import Link from "next/link";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import * as SVG from "../components/SVG"
import { useState } from "react";
export const Navbar = () => {
  const navigation = [
    "Save",
  ];
  const items = [
    {
      icon: <SVG.DailyAllow />,
      title: "Daily allowance",
      description: "Flexible deposit with no fixed term and variable interest rate",
      bgColor: "bg-[#9CD3E4]",

    },
    {
      icon: <SVG.FixedDeposit />,
      title: "Fixed Deposit",
      description: "Deposit with fixed term and fixed interest rate",
      bgColor: "bg-[#FFD700]",
    },
    {
      icon: <SVG.TerminationPay />,
      title: "Termination Pay",
      description: "Deposit without fixed term with variable interest rate and notice period",
      bgColor: "bg-[#FF6347]",
    },
    {
      icon: <SVG.MoneyMarket />,
      title: "Money market portfolio",
      description: "ETF portfolio with variable interest without fixed term, unlimited investment amount",
      bgColor: "bg-[#9CD3E4]",
    },
  ];
  const items1 = [
    {
      title: "Fixed Deposit Comparison",

    },
    {
      title: "Fixed Deposit 2 years",
    },
    {
      title: "Fixed Deposit 1 year",
    },
    {
      title: "Fixed Deposit 6 months",
    },
  ];
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Your custom logic here
    console.log('Hovered');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Your custom logic here
    console.log('Not Hovered');
  };
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center py-1 mx-auto lg:justify-between px-2 w-full">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="https://www.weltsparen.de/app/themes/sg-core-theme/assets/lib/img/Logo_WeltSparen.svg"
                        alt="N"
                        width="128"
                        height="32"
                        className="w-[128px]"
                      />
                    </span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <p key={index} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                        {item}
                      </p>
                    ))}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline 
                "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {isHovered && (<div className="hidden lg:flex absolute top-10 right-0 p-4 border shadow-orange-50 bg-white" onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div className="border-r-2 border-gray-300 mx-4">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4 items-center hover:bg-gray-100 justify-start p-2 cursor-pointer">
                <div className={`relative flex items-center justify-center ${item.bgColor} rounded-full w-8 h-8 aspect-square`}>
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <p className="text-[16px] font-semibold text-gray-500">{item.title}</p>
                  <p className="text-[13px] font-normal text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className=" cursor-pointer">
              <Image
                src="/img/Image_Tagesgeld-Vergleich.png"
                alt="N"
                width="128"
                height="32"
                className="w-[128px]"
              />
              <p className="hover:text-blue-300 text-[16px] font-semibold text-gray-500">
                Daily money comparison
              </p>
            </span>
            {items1.map((item, index) => (
              <p key={index} className="hover:text-blue-300 cursor-pointer flex gap-2 text-[16px] font-semibold text-gray-500">
                <span>&gt;</span>
                {item.title}
              </p>
            ))}
          </div>
        </div>)}
      </nav>
      <hr className="border-[0.5px] border-[#d6d3d3]"></hr>
    </div>
  );
}

