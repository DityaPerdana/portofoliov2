"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Image from "next/image";
import { TextAnimate } from "./text-animate";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function SkillContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex flex-col h-[100vh] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
      id="skills"
    >
      <TextAnimate className="font-bold sm:text-5xl text-4xl">
        My Capabilities🔥
      </TextAnimate>
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-3 my-24">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div10Ref} className="size-16">
            <Image src="./postgre.svg" alt="html icon" width={50} height={50} />
          </Circle>
          <Circle ref={div11Ref} className="size-16">
            <Image src="./nodejs.svg" alt="html icon" width={50} height={50} />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} className="size-16">
            <Image src="./html.svg" alt="html icon" width={50} height={50} />
          </Circle>
          <Circle ref={div5Ref} className="size-16">
            <Image
              src="./typescript.svg"
              alt="html icon"
              width={50}
              height={50}
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} className="size-16">
            <Image src="./css.svg" alt="html icon" width={50} height={50} />
          </Circle>
          <Circle ref={div4Ref} className="size-32">
            <Image
              className="rounded-full bg-cover scale-125 hover:scale-150 transition ease-out"
              src="/pfp.webp"
              alt="html icon"
              width={900}
              height={900}
            />
          </Circle>
          <Circle ref={div6Ref} className="size-16">
            <Image src="./react.svg" alt="html icon" width={50} height={50} />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref} className="size-16">
            <Image
              src="./javascript-logo.svg"
              alt="html icon"
              width={50}
              height={50}
            />
          </Circle>
          <Circle ref={div7Ref} className="size-16">
            <Image src="./nextjs.svg" alt="html icon" width={50} height={50} />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div8Ref} className="size-16">
            <Image
              src="./tailwind.svg"
              alt="html icon"
              width={50}
              height={50}
            />
          </Circle>
          <Circle ref={div9Ref} className="size-16">
            <Image
              src="./supabase.svg"
              alt="html icon"
              width={50}
              height={50}
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        gradientStopColor="#06b6d4"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        gradientStopColor="#06b6d4"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        gradientStopColor="#06b6d4"
      />
      <AnimatedBeam
        containerRef={containerRef}
        gradientStopColor="#06b6d4"
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
        gradientStopColor="#06b6d4"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        gradientStopColor="#06b6d4"
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div4Ref}
        curvature={75}
        gradientStopColor="#06b6d4"
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        gradientStopColor="#06b6d4"
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div10Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        gradientStopColor="#06b6d4"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div11Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        gradientStopColor="#06b6d4"
        reverse
      />
    </div>
  );
}
