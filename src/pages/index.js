import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Navbar */}
      <NavBar />

      {/*Hero Section */}
      <section className="flex flex-col items-center text-center mt-20">
        <Image
          src="/profile.jpg" // Replace with your actual profile image
          alt="Your Name"
          width={150}
          height={150}
          className="rounded-full shadow-lg"
        />
       <h1 className ="text-4xl font-bold text-gray-800 mt-4">Hello, I am Karen</h1>
      </section>

      {/*Projects Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
        <p className="text-gray-600 mt-2">Some of the work I have done.</p>
        
        {/* Example Project */}
        <div className="mt-6 flex gap-4">
          <div className="p-4 bg-white rounded-lg shadow-md max-w-sm">
            <Image src="/project1.png" alt="Project 1" width={300} height={200} className="rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Project Name</h3>
            <p className="text-gray-500">Short description of the project.</p>
          </div>
        </div>
      </section>

      {/*Contact Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
        <p className="text-gray-600 mt-2">Let us work together!</p>
        <a href="mailto:your.email@example.com" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
          Contact Me
        </a>
      </section>

      {/*Footer */}
      <footer className="mt-20 py-6 text-gray-500 text-sm">
        &copy; 2024 Karen. All rights reserved.
      </footer>
    </div>
  );
}
