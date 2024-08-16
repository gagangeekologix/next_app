"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-100vw bg-gradient-to-r from-gray-800 to-slate-950 text-gray-900">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between text-center md:text-left p-10 bg-gradient-to-r from-gray-800 to-slate-950 text-white w-full group">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Gagan Kishore</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Software Development Engineer</h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Crafting innovative and scalable web solutions. Passionate about turning ideas into reality through code.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="https://www.linkedin.com/in/gagankishor-19423b18b" target="_blank" legacyBehavior>
              <a className="relative bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-2xl group-hover:ring-2 group-hover:ring-white group-hover:ring-opacity-75">
                LinkedIn
              </a>
            </Link>
            <Link href="https://github.com/gagankishor" target="_blank" legacyBehavior>
              <a className="relative bg-gray-700 text-white px-5 py-3 rounded-lg hover:bg-gray-900 transition duration-300 shadow-2xl group-hover:ring-2 group-hover:ring-white group-hover:ring-opacity-75">
                GitHub
              </a>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/profile.jpeg" // Replace with your profile image
            alt="Gagan's Profile Image"
            width={350}
            height={350}
            className="rounded-full mx-auto shadow-xl"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="p-8 md:p-10 mt-10 max-w-5xl mx-auto from-gray-100 to-slate-200 text-slate-100 shadow-2xl rounded-lg">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h3>
        <p className="text-lg md:text-xl leading-relaxed text-center">
          I'm a passionate Software Development Engineer with 4 years of experience in full-stack web development. I love solving complex problems and bringing ideas to life through technology.
        </p>
      </section>

      {/* Projects Section */}
      <section className="p-8 md:p-10 mt-10 max-w-5xl mx-auto from-gray-100 to-slate-200 text-slate-100 shadow-2xl rounded-lg">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-lg p-5 shadow-md group">
            <h4 className="text-2xl font-semibold mb-2">Project One</h4>
            <p className="text-lg">Description of the project and the technologies used.</p>
            <Link href="https://github.com/project-one" target="_blank" className="text-blue-500 hover:underline mt-4 inline-block group-hover:ring-2 group-hover:ring-blue-500">
              View on GitHub
            </Link>
          </div>
          <div className="bg-gray-900 rounded-lg p-5 shadow-md group">
            <h4 className="text-2xl font-semibold mb-2">Project Two</h4>
            <p className="text-lg">Description of the project and the technologies used.</p>
            <Link href="https://github.com/project-two" target="_blank" className="text-blue-500 hover:underline mt-4 inline-block group-hover:ring-2 group-hover:ring-blue-500">
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="p-8 md:p-10 mt-10 max-w-5xl mx-auto from-gray-100 to-slate-200 text-slate-100 shadow-2xl rounded-lg">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full group-hover:ring-2 group-hover:ring-blue-500">React.js</span>
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full group-hover:ring-2 group-hover:ring-blue-500">Node.js</span>
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full group-hover:ring-2 group-hover:ring-blue-500">TypeScript</span>
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full group-hover:ring-2 group-hover:ring-blue-500">Next.js</span>
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full group-hover:ring-2 group-hover:ring-blue-500">Tailwind CSS</span>
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full group-hover:ring-2 group-hover:ring-blue-500">Express.js</span>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-8 md:p-10 mt-10 max-w-5xl mx-auto from-gray-100 to-slate-200 text-slate-100 shadow-2xl rounded-lg">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact</h3>
        <p className="text-lg md:text-xl text-center mb-4">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="mailto:gagankishor101@gmail.com" className="relative bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-2xl group-hover:ring-2 group-hover:ring-white group-hover:ring-opacity-75">
            Email Me
          </Link>
          <Link href="https://www.linkedin.com/in/gagankishor-19423b18b" target="_blank" className="relative bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-2xl group-hover:ring-2 group-hover:ring-white group-hover:ring-opacity-75">
            LinkedIn
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
