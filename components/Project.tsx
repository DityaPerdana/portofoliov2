import React from 'react';
import { LinkPreview } from './ui/link-preview';
import Lanyard from './ui/Lanyard';

const Project = () => {
  const sections = [
    {
      name: 'NyctOwl Nimbus',
      category: 'FullStack Project',
      techStack: ['NextJS', 'Convex', 'Tailwindcss'],
      link: 'https://nyctowl-nimbus.vercel.app',
      img: '/nimbus.webp'
    },
    {
      name: 'NyctOwl Vision',
      category: 'FullStack Project',
      techStack: ['NextJS', 'Clerk', 'TailwindCSS'],
      link: 'https://nyctowlvision.vercel.app',
      img: '/vision.webp'
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 rounded-lg">
      {sections.map((section, index) => (
          <div className='border-t border-gray-200 py-8 first:border-t-0 group' key={index}>
        <LinkPreview url={section.link} imageSrc={section.img} isStatic
        >
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h2 className="text-4xl font-normal group-hover:text-gray-600 transition-colors mr-8 text-white">
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
              <span className="text-sm">
                {section.category}
              </span>
            </div>
          </div>
        </LinkPreview>
        </div>
      ))}
      <Lanyard />
    </div>
  );
};

export default Project;