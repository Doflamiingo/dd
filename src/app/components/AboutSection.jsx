"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Lottie from "lottie-react";
import animationData from "../../../public/test.json";

const TAB_DATA = [
  {
    title: "Compétences",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Wordpress</li>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>FIgma</li>
        <li>Adobe XD</li>
        
      </ul>
    ),
  },
  {
    title: "Formations",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>IRFA Apisup</li>
        <li>La wab école du digitale</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Création de votre site web et mise en ligne.</li>
        <li>Respect des pratiques courantes pour optimiser le référencement SEO ou le design responsive.</li>
        <li>Gestion et maintenance du site web.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 md:flex-row-reverse">
      <Lottie animationData={animationData} height={200} width={200} className=" mt-20" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">À propos de moi</h2>
          <p className="text-base lg:text-lg">
            Développeur Web 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Compétences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Formations{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Services{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
