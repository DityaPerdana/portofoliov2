"use client";

import React from "react";
import { Urbanist } from "next/font/google";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { VelocityScroll } from "./scroll-based-velocity";
import InteractiveHoverButton from "./interactive-hover-button";
import { TextAnimate } from "./text-animate";
import { RainbowButton } from "./rainbow-button";
import RippleButton from "./ripple-button";
import Link from "next/link";

const rowdies = Urbanist({
  weight: ["900"],
});

const HeroHeader = () => {
  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId: any = null;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress: any) => {
    const width = window.innerWidth;
    path.current.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

  const lerp = (x: any, y: any, a: any) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e: any) => {
    const { movementY, clientX } = e;
    const pathBound = path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };
  return (
    <div
      id="hero"
      className={`${rowdies.className} overflow-hidden min-h-[100vh] min-w-full flex flex-col items-center justify-center relative`}
    >
        <div className="line absolute inset-0 flex items-center justify-center">
        <div
          onMouseEnter={() => {
            manageMouseEnter();
          }}
          onMouseMove={(e) => {
            manageMouseMove(e);
          }}
          onMouseLeave={() => {
            manageMouseLeave();
          }}
          className="box"
        ></div>
        <svg>
          <path ref={path}></path>
        </svg>
      </div>
      <div className="sm:translate-y-16 flex flex-col gap-2 translate-y-[6rem] pointer-events-none">
        <TextAnimate animation="scaleUp" by="text" className="text-blue-400 sm:text-[11rem] text-center text-8xl font-black italic">
          Raditya
        </TextAnimate>
        <TextAnimate animation="scaleUp" by="word" className="sm:text-[11rem] text-center text-8xl font-black italic">
          Alfarisi
        </TextAnimate>
      </div>
      <Image className="rounded-md ring-4  hidden sm:block hover:scale-150 transition ease-in absolute md:h-[200px] md:w-[200px] w-[100px] h-[100px] -translate-y-4 pointer-events-auto rotate-12 hover:rotate-1" src='/pp.webp' alt="pfp" width={900} height={900}/>
      <div className="flex sm:flex-row flex-col gap-2 sm:gap-[6.8rem] justify-center  sm:mt-20 mt-32">
        <InteractiveHoverButton />
        <RainbowButton className="sm:-translate-x-5">Get In Touch🤙</RainbowButton>
        <RippleButton rippleColor="#7dd3fc">
          <Link 
          href='./projects'
          >
            Project
          </Link>
        </RippleButton>
      </div>
      <VelocityScroll numRows={1} className="">Frontend Developer</VelocityScroll>
    </div>
  );
};

export default HeroHeader;