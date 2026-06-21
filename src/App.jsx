import React from "react";
import ProfileImage from "./assets/ProfileImage.jpg"; 
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="flex justify-between items-center px-10 py-5 bg-gray-100 shadow-md fixed w-full">
        <h1 className="font-bold text-black">My Portfolio</h1>
        <ul className="flex space-x-6 font-medium text-black">
          <li className="hover:text-yellow-500 cursor-pointer">Home</li>
          <li className="hover:text-yellow-500 cursor-pointer">About</li>
          <li className="hover:text-yellow-500 cursor-pointer">Projects</li>
          <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
        </ul>
      </nav>
      <section className="h-screen flex flex-col justify-center items-center text-center pt-20">
        <h1 className="text-black font-bold">Najma Zahoor</h1>
        <p className="text-xl mt-4 text-black">
          Front-End Developer | React and Tailwind
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full font-semibold hover:scale-105 transition">
          Download Resume
        </button>
      </section>
      <section className="py-20 px-10 bg-gray-100 flex flex-col md:flex-row items-center gap-10">
        <img
          src={ProfileImage}
          alt="Profile"
          className="rounded-full w-48 h-48 shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-black">About Me</h2>
          <p className="max-w-xl text-lg text-black">
            I am a passionate Front-End Developer skilled in building modern,
            responsive, and interactive web applications using React and Tailwind CSS.
          </p>
        </div>
      </section>
      <section className="py-20 px-10 text-center">
        <h2 className="font-bold mb-10 text-black">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind"].map((skill) => (
            <div
              key={skill}
              className="bg-white text-black p-4 rounded-xl shadow-xl hover:scale-105 transition border"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 px-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10 text-black">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white text-black rounded-xl shadow-xl p-6 hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold mb-2">
                Project {item}
              </h3>
              <p className="text-gray-600">
                Modern React + Tailwind project showcasing UI skills.
              </p>
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 px-10 text-center">
        <h2 className="text-3xl font-bold mb-10 text-black">Contact Me</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg text-black border"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg text-black border"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg text-black border"
          ></textarea>
          <button className="w-full bg-black text-white py-3 rounded-full font-bold hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </section>
      <footer className="text-center py-6 bg-gray-100">
        <p className="text-black">
          © 2026 Najma Zahoor. All rights reserved.
        </p>
      </footer>
    </div>
  );
}