"use client";
import React, { useState } from 'react';
import { Container } from "@/components/Container";
import Image from "next/image";
import { totalData } from "@/components/mainData";

export const SectionTitle = () => {


  return (
    <Container>
      {/* Input boxes for filtering */}

      {/* Display filtered data */}
      <div className="flex overflow-x-hidden justify-center gap-[50px]">
        {totalData.map((item, index) => {

          return (

            <div key={index} className="flex w-full justify-center my-6 bg-white border-s-white rounded-[20px] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] lg:w-[500px] mx-10 lg:mx-0 gap-6 continuous-scroll">
              <div className="flex justify-between gap-[100px] items-center p-6">
                <div>
                  <Image
                    src={item.image}
                    width={250}
                    height={50}
                    alt="logo"
                  />

                  <div className="flex flex-col justify-center text-gray-500 items-center">
                    <p className="text-[14px] font-normal">
                      {item.bullets[0]}
                    </p>
                    <p className="text-[14px] font-normal">
                      {item.bullets[1]}
                    </p>
                    <p className="text-[14px] font-normal">
                      {item.bullets[2]}
                    </p>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="flex flex-col text-gray-500 justify-center items-center">
                    <p className="flex text-[22px] w-full font-bold">
                      {item.percentage} <span>%</span>
                    </p>
                    <p className="text-[18px] font-normal">
                      Zinsen p. a.
                    </p>
                  </div>
                  {/* <button className="bg-[#FFB100] text-sm font-medium text-white rounded-lg h-14 px-4">
                    Zum Angebot<span className="ml-2">&gt;</span>
                  </button> */}
                </div>
              </div>
            </div>

          );
        })}
      </div>
    </Container>
  );
};

