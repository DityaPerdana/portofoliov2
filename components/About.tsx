import React from "react";
import TextReveal from "./ui/text-reveal";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ['latin']
});

const About = () => {
  return (
    <div
      className="min-w-full min-h-screen flex items-center justify-center mt-24"
      id="about"
    >
      <h3 className="font-bold text-3xl -translate-y-10 hidden sm:block">
        About <span className="text-sky-400">Me</span>, Keep Scrolling!👆
      </h3>
      <div className={`${montserrat.className}`}>
        <TextReveal text="Hi! I'm Raditya Alfarisi, a student from Sumatera Barat, Indonesia. I'm currently studying at SMKN 4 Payakumbuh, specializing in PPLG (Software and Game Development). As a frontend developer at NyctOwl Studio, I'm passionate about creating engaging web experiences. When I'm not coding, you can find me strategizing over a game of chess, and write some book – it's my favorite ways to exercise my mind. I have a natural curiosity and love for learning new things, which serves me well in both my studies and professional development. This drive to continuously expand my knowledge helps me stay current with the latest technologies and trends in frontend development." />
      </div>
    </div>
  );
};

export default About;
