import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column align-items-center bg-light">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <section className="d-flex flex-column align-items-center text-center mt-5">
        <Image
          src="/profile.jpg" // Replace with your actual profile image
          alt="Your Name"
          width={150}
          height={150}
          className="rounded-circle shadow-lg"
        />
        <h1 className="fw-bold text-dark mt-3 display-4">Karen Rena</h1>
      </section>

      {/* Projects Section */}
      <section className="mt-5 w-75">
        <h2 className="text-center fw-semibold text-dark fs-3">Projects</h2>
        <p className="text-center text-muted">Some of the work I have done.</p>

        {/* Example Project */}
        <div className="row mt-4 justify-content-center">
          <div className="col-md-4">
            <div className="card shadow">
              <Image
                src="/project1.png"
                alt="Project 1"
                width={300}
                height={200}
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title fw-semibold">Project Name</h3>
                <p className="card-text text-muted">Short description of the project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-5 text-center">
        <h2 className="fw-semibold text-dark fs-3">Get in Touch</h2>
        <p className="text-muted">Let us work together!</p>
        <a
          href="mailto:your.email@example.com"
          className="btn btn-primary mt-3 px-4 py-2 fs-5 fw-semibold shadow"
        >
          Contact Me
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-5 py-4 text-muted text-center">
        &copy; 2024 Karen. All rights reserved.
      </footer>
    </div>
  );
}
