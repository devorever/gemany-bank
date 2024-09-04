import React from "react";
import { Container } from "@/components/Container";
import Image from "next/image";
import { BookOpenIcon } from "@heroicons/react/24/solid";
export const Testimonials = () => {
  return (
    <Container>
      <div className="flex justify-around bg-[#eeeeee] py-4 px-8">
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src="/img/emoticon-256.png"
            alt="smiling face"
            width={15}
            height={15}
            className="text-black fill-current"
          />
          <p className="text-xs">1.000.000+</p>
          <p className="text-xs">zufriedene Kunden</p>

        </div>
        <div className="flex flex-col hover:text-red-400 cursor-pointer justify-center items-center gap-2">
          <Image
            src="/img/trustpilot_logo_color.png"
            alt="smiling face"
            width={90}
            height={45}
            className="text-black fill-current"
          />
          <Image
            src="/img/4.5_stars.svg"
            alt="smiling face"
            width={90}
            height={45}
            className="text-black fill-current"
          />
          <p className="text-xs">7.877 Bewertungen</p>

        </div>
        <div className="hidden sm:flex flex-col justify-center items-center gap-2">
          <Image
            src="/img/media-logos.png"
            alt="smiling face"
            width={130}
            height={65}
            className="text-black fill-current"
          />
          <p className="text-xs">bekannt aus dem TV</p>

        </div>
        <div className="hidden sm:flex flex-col justify-center items-center gap-2">
          <BookOpenIcon className="w-4 h-4" />
          <p className="text-xs">1.000.000+</p>
          <p className="text-xs">zufriedene Kunden</p>

        </div>
      </div>
    </Container>
  );
};