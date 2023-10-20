import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="projects" className={"bg-white text-black"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12 border mt-8">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-2xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {projects.map((project, index) => (
            <Card
              key={index}
              imageUrl="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
              title={project.title}
              description={project.description}
              linkUrl={project.linkUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
