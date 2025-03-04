import React from 'react'

const projects = [
    { name: "Decentralized Chess App", link: "https://github.com/manashatwar/New_Final_product", demo: "#" },
    { name: "Foundry-Storage", link: "https://github.com/arijitroy667/Storage_list_Solidity-foundry", demo: "#" }
  ];
  
  const Projects = () => {
    return (
      <div className="text-center py-10">
        <h2 className="text-white text-3xl font-bold py-10">Featured Projects</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {projects.map((project) => (
            <a href={project.link} key={project.name} className="p-4 bg-gray-800 text-white rounded-lg hover:bg-blue-500 transition">
              {project.name}
            </a>
          ))}
        </div>
      </div>
    );
  };
  

export default Projects
