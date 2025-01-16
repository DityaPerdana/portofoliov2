import React from "react";
import { LinkPreview } from "./ui/link-preview";
import Reveal from "./ui/Reveal";
import { TextAnimate } from "./ui/text-animate";

const Project = () => {
  const sections = [
    {
      name: "NyctOwl Nimbus",
      category: "FullStack Project",
      techStack: ["NextJS", "Convex", "Tailwindcss"],
      link: "https://nyctowl-nimbus.vercel.app",
      img: "/nimbus.webp",
    },
    {
      name: "NyctOwl Vision",
      category: "FullStack Project",
      techStack: ["NextJS", "Clerk", "TailwindCSS"],
      link: "https://nyctowlvision.vercel.app",
      img: "/vision.webp",
    },
    {
      name: "Web Kelas X PPLG 1",
      category: "Front-End Project",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://xpplg-1.vercel.app",
      img: "/xpplg.webp",
    },
  ];

  return (
    <div className="min-w-full min-h-screen flex flex-col">
      <TextAnimate className="font-sans text-4xl absolute mt-24  font-bold p-8">
        Featured Work
      </TextAnimate>
      <div className="justify-center items-center mt-48 p-8 rounded-lg">
        {sections.map((section, index) => (
          <div
            className="border-t border-gray-200 py-8 first:border-t-0 group"
            key={index}
          >
            <Reveal>
              <LinkPreview url={section.link} imageSrc={section.img} isStatic>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h2 className="text-4xl font-normal group-hover:text-gray-600 transition-colors pr-8 dark:text-white">
                      {section.name}
                    </h2>
                    <div className="flex gap-2 flex-wrap">
                      {section.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-sm">{section.category}</span>
                  </div>
                </div>
              </LinkPreview>
            </Reveal>
          </div>
        ))}
        {/* <Lanyard /> */}
      </div>
    </div>
  );
};

export default Project;
