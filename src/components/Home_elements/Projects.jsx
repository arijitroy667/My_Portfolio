import React from 'react'

const projects = [
    { name: "Decentralized Voting App", link: "https://github.com/yourrepo", demo: "#" },
    { name: "NFT Marketplace", link: "https://github.com/yourrepo", demo: "#" }
  ];
  
  const Projects = () => {
    return (
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
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
