import React from "react";
import { Container } from "@/components/Container";
import Link from "next/link";
import Image from "next/image";

export const SectionTitleSecond = () => {
  const items = [
    {
      title: "3,20",
      number: "2",
      country: "Italien",
      url: "/img/bancaprogetto_wordpress.png"
    },
    {
      title: "3,70",
      number: "3",
      country: "Schweden",
      url: "/img/hoistsparen_wordpress.png"
    },
    {
      title: "3,70",
      number: "5",
      country: "Deutschland",
      url: "/img/aareal_wordpress.png"
    },

  ];
  return (
    <Container>
      <div className="flex flex-wrap justify-center gap-8 px-6 py-14">
      {items.map((item, index) => (

        <Link key={index} className="flex flex-col relative lg:w-[363px] md:w-[300px] sm:w-[280] w-full justify-between items-center border-s-white rounded-[3px] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)]" href="#">
          <div className="flex gap-8 w-full justify-between p-4">
            <div className="flex items-center justify-center">
              <p className="lg:text-[45px] sm:text-[40px] text-[35px] font-semibold text-[#1bad2b] text-center text-base">
                {item.title}
              </p>
              <div className="flex flex-col justify-center items-center">
                <p className="hidden sm:flex text-[#1bad2b] text-center font-light lg:text-[14px] text-[14px]">
                  %
                </p>
                <p className="hidden sm:flex text-[#1bad2b] text-center font-light lg:text-[14px] text-[14px]">
                  p.a.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={item.url}
                width={100}
                height={100}
                alt="bancaprogetto"
              />
              <span className="w-full flex justify-center items-center text-lg mt-4">Italien</span>
            </div>
          </div>
          <div className="flex justify-between items-center px-4 border-b-rounded-[3px] bg-[#eeeeee] w-full h-[50px] ">
            <p className="text-gray-400">
              {item.number} Jahre | EUR
            </p>
            <p className=" text-blue-400 hover:text-red-400">
              Zum Angebot <span className="ml-2">&gt;</span>
            </p>
          </div>
        </Link>
                ))}

      </div>

    </Container>
  );
}

