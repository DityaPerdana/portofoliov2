// Certificates.jsx
import React from "react";
import { Card } from "./Card";
import { TextAnimate } from "./text-animate";

// Certificate data
export const certificates = [
  {
    title: "Belajar Dasar AI",
    desc: "Fundamental of deep learning, machine learning and data.",
    image: "/dasarai.webp",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    desc: "Learning semantic HTML and CSS fundamental.",
    image: "/dasarweb.webp",
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    desc: "Learning DOM manipulation, event, and web storage",
    image: "/frontendpemula.webp",
  },
  {
    title: "Belajar Dasar Pemrograman Javascript",
    desc: "Learning type data, pure function, flow controls, OOP, modular, syncrhonus-asyncronus, and code quality.",
    image: "/javascriptt.webp",
  },
  {
    title: "Belajar Fundamental Front-End Web Pemula",
    desc: "Learning data fetching, bundler.",
    image: "/intermediet.webp",
  },
  {
    title: "Introduction to Cyber Cecurity",
    desc: "Learning Cyber Cecurity Basics.",
    image: "/cybersec.webp",
  },
];

// Example usage in a component
const Cards = () => {
  return (
    <div className="flex flex-col text-center text-4xl">
      <TextAnimate className="font-sans font-bold">My Achievment</TextAnimate>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6`}
      >
        {certificates.map((cert, index) => (
          <Card
            key={index}
            title={cert.title}
            desc={cert.desc}
            image={cert.image}
          />
        ))}
      </div>
    </div>
  );
};

export { Card };
export default Cards;
