import React from "react";
import { Container } from "@/components/Container";
import Link from "next/link";


export const SectionTitle = () => {
  const items = [
    {
      title: "Festgeld",
      description: "Attraktive Zinsen sichern mit bis zu 3,70 % p. a.",
      buttonName: "Jetzt sparen"
    },
    {
      tooltip: "Mit Sparplan",
      title: "Tagesgeld",
      description: "Flexibel sparen und bis zu 3,40 % p. a. erhalten",
      buttonName: "Jetzt sparen"
    },
    {
      tooltip: "Sparplan ab 50 €",
      title: "Investments",
      description: "ETF-Portfolios, Private Equity und Kryptowährungen",
      buttonName: "Jetzt investieren"
    },
    {
      tooltip: "Neu",
      title: "Vermögensverwaltung",
      description: "Global diversifiziert anlegen in über 8.000 Aktien und mit bis zu 7,3 % p. a. Zielrendite",
      buttonName: "Jetzt investieren"
    },
  ];
  return (
    <Container>
      <div className="flex flex-wrap justify-center gap-4 px-6 py-14">
        {items.map((item, index) => (
          <Link key={index} className="flex flex-col relative lg:w-[263px] md:w-[200px] sm:w-[180px] w-[220px] justify-between items-center border-s-white rounded-[3px] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)]" href="#">
            <div className="flex w-full justify-between">
              <div className="pl-[25px] sm:px-[25px] pt-2 sm:pt-8 pb-2 space-y-4">
                <p className="lg:text-[18px] sm:text-[16px] text-[18px] text-black text-center text-base">
                  {item.title}
                </p>
                <p className="hidden sm:flex text-center font-light lg:text-[14px] text-[14px]">
                  {item.description}
                </p>
              </div>
              <span className="hidden max-sm:flex items-center justify-center text-blue-400 hover:text-red-400 bg-gray-100 w-[20px] ml-2">&gt;</span>
            </div>
            <div className="hidden sm:flex justify-center items-center border-b-rounded-[3px] bg-[#eeeeee] w-full h-[50px] ">
              <p className=" text-blue-400 hover:text-red-400">
                {item.buttonName}<span className="ml-2">&gt;</span></p>
            </div>
            {item.tooltip && (<div className="hidden sm:flex absolute left-3 -top-3 bg-[#004b8c] text-white py-[2px] px-1 text-10px sm:text-sm">
              {item.tooltip}
            </div>)}
          </Link>
        ))}
      </div>

    </Container>
  );
}

