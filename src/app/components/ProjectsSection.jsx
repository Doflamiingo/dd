"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Power Up Invest",
    description: "Cours de trading et copy trading",
    image: "/images/projects/1.png",
    tag: ["Tous", "CMS"],
    gitUrl: "/",
    previewUrl: "https://powerup-invest.fr/",
  },
  {
    id: 2,
    title: "Lykanza",
    description: "E-commerce de bracelet lithothérapie",
    image: "/images/projects/2.png",
    tag: ["Tous", "CMS"],
    gitUrl: "/",
    previewUrl: "https://lykanza.fr/",
  },
 
  {
    id: 3,
    title: "Skeep",
    description: "Site de coiffeur (en maintenance)",
    image: "/images/projects/3.png",
    tag: ["Tous", "CMS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Raphaël",
    description: "Portfolio ReactJS",
    image: "/images/projects/4.png",
    tag: ["Tous", "JS"],
    gitUrl: "/",
    previewUrl: "/",
  },
 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Tous");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mes projets
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Tous"
          isSelected={tag === "Tous"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="CMS"
          isSelected={tag === "CMS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="JS"
          isSelected={tag === "JS"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
