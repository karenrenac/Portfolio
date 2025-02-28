import React from "react";

const About = () => {
  return (
    <section className="container py-5" id="about">
      <h2 className="text-center fw-bold mb-4">About Me</h2>
      <div className="row">
        <div className="col-md-6">
          <img src="/profile.jpg" className="img-fluid rounded" alt="Profile" />
        </div>
        <div className="col-md-6">
          <p>
            I am a passionate developer specializing in Data Analytics .
            I love solving complex problems and contributing to open-source projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
