"use client";
import Link from "next/link"
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Button } from "@/components/ui/moving-border";
import { Boxes } from "./ui/background-boxes";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
function HeroSection()
{
    const words = [
        {
          text: "Master",
        },
        {
          text: "Keyboard",
          className: "text-blue-500 dark:text-yellow-500",
        },
        {
          text: "Making",
          className: "text-blue-500 dark:text-yellow-500",
        },
        {
          text: "with",
        },
        {
          text: "this",
          
        },
        {
            text: "Course.",
          },
      ];
    


return (
  <div className="h-96 pt-200 relative w-full overflow-hidden bg-color-blue-500 flex flex-col items-center justify-center rounded-lg">
    <div className="p-200 absolute inset-0 w-full h-full bg- z-20 [mask-image:radial-gradient(transparent,)] pointer-events-none" />

    <Boxes />
    <div className = "h-auto md:h-[40 rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden ms-auto">
    <div className="p-4 relative z-10 w-full text-center">
        <TypewriterEffect words={words} />
        <p>Embark on a transformative journey to design and build your own keyboard
            with our immersive course. From selecting components to soldering and
            programming, learn every step of the process. Unlock creativity and customization as you craft a unique keyboard tailored to your preferences.
            Join us and bring your dream keyboard to life!</p>
         <div className="mt-4">
            <Link href={"/courses"}>
               <Button borderRadius="2.75rem"
        className="bg-white dark:bg-yellow-500 text-rgb(17, 24, 39) dark:text-black border-neutral-200 dark:border-slate-800">Explore Course</Button>
            </Link>
        </div>

    </div>
    </div>
  </div>
);
}

export default HeroSection