import React from "react";

const Projects = () => {
  const projects = [
    { title: "Project One", desc: "Description of project one", link: "#" },
    { title: "Project Two", desc: "Description of project two", link: "#" },
    { title: "Project Three", desc: "Description of project three", link: "#" }
  ];

  return (
    <section className="container py-5" id="projects">
      <h2 className="text-center fw-bold mb-4">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.desc}</p>
                <a href={project.link} className="btn btn-outline-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
