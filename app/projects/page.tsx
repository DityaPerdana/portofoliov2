import Project from "@/components/Project";
import Cards from "@/components/ui/Cards";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-w-full min-h-screen flex flex-col justify-center items-center font-serif">
        <Project />
        <Cards />
      </div>
    </>
  );
};

export default page;
