import Image from 'next/image';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between text-center md:text-left p-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Gagan Kishore</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Software Development Engineer</h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            With 4 years of experience in full-stack web development, I specialize in Node.js, React.js, and other modern web technologies. 
            Passionate about creating optimized and innovative solutions.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="https://www.linkedin.com/in/gagankishor-19423b18b" target="_blank" legacyBehavior>
              <a className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg">
                LinkedIn
              </a>
            </Link>
            <Link href="https://github.com/gagankishor" target="_blank" legacyBehavior>
              <a className="bg-gray-700 text-white px-5 py-3 rounded-lg hover:bg-gray-900 transition duration-300 shadow-lg">
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

      {/* Summary Section */}
      <section className="p-8 md:p-10 mt-10 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Summary</h3>
        <p className="text-lg md:text-xl leading-relaxed">
          I'm a Software Development Engineer with 4 years of experience in full-stack web development. I am skilled in Node.js, React.js,
          and various web technologies, with a proven track record of optimizing application performance and delivering innovative solutions.
          I'm currently seeking new opportunities to leverage my skills in a dynamic environment.
        </p>
      </section>

      {/* Education Section */}
      <section className="p-8 md:p-10 mt-10 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Education</h3>
        <p className="text-lg md:text-xl font-semibold mb-2">
          B.Tech in Computer Science - Graduated in 2020
        </p>
        <p className="text-lg md:text-xl">JIET Group of Institutions, Jodhpur</p>
      </section>

      {/* Skills Section */}
      <section className="p-8 md:p-10 mt-10 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Technical Skills</h3>
        <ul className="text-lg md:text-xl list-disc pl-5 space-y-3">
          <li><strong>Front-End:</strong> HTML, CSS, JavaScript, React.js, Vue.js, Next.js, Tailwind CSS, TypeScript, Bootstrap</li>
          <li><strong>Back-End:</strong> Node.js, Express.js, Django, Flask, Sequelize.js</li>
          <li><strong>Database Management:</strong> MySQL, MS SQL Server, Redis, MongoDB, SQLite</li>
          <li><strong>Web Development Tools:</strong> Firebase, AWS (S3, RDS, EC2, CodeDeploy), Payment Gateways (Razorpay, Paytm, Stripe, PayPal)</li>
          <li><strong>Version Control:</strong> GitHub, Bitbucket</li>
          <li><strong>Testing:</strong> Postman, JMeter</li>
          <li><strong>Other:</strong> Python, C, C++, Machine Learning</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="p-8 md:p-10 mt-10 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Professional Experience</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-2xl md:text-3xl font-semibold">Geekologix Technology Pvt Ltd, Jodhpur</h4>
            <p className="text-lg md:text-xl italic mb-4">Software Development Engineer (June 2023 – Present)</p>
            <ul className="list-disc pl-5 space-y-2 text-lg md:text-xl leading-relaxed">
              <li>Led and contributed to multiple successful web application developments using Node.js, Flask, Next.js, React.js, and Express.js.</li>
              <li>Optimized application performance by implementing efficient database management with MS SQL and MySQL.</li>
              <li>Collaborated with cross-functional teams to deliver innovative solutions and meet project deadlines.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-semibold">Systrans Technology Pvt Ltd, Jodhpur</h4>
            <p className="text-lg md:text-xl italic mb-4">Software Development Engineer (May 2022 – May 2023)</p>
            <ul className="list-disc pl-5 space-y-2 text-lg md:text-xl leading-relaxed">
              <li>Developed scalable and responsive web applications using Node.js, Vue.js, and Django frameworks.</li>
              <li>Integrated third-party services such as AWS S3 bucket and Razorpay for enhanced functionalities.</li>
              <li>Implemented RESTful APIs and conducted unit testing to ensure application reliability.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-semibold">Freelance, Remote</h4>
            <p className="text-lg md:text-xl italic mb-4">Software Developer (February 2020 – April 2022)</p>
            <ul className="list-disc pl-5 space-y-2 text-lg md:text-xl leading-relaxed">
              <li>Worked independently on various client projects, delivering custom web solutions tailored to client requirements.</li>
              <li>Utilized Firebase for real-time data synchronization and push notifications.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="p-8 md:p-10 mt-10 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Certifications</h3>
        <ul className="text-lg md:text-xl list-disc pl-5 space-y-3">
          <li>Web Backend with NodeJS, Express & MongoDB</li>
          <li>Machine Learning</li>
          <li>MongoDB Transactions</li>
          <li>React JS with Exciting Projects</li>
        </ul>
      </section>

    </div>
  );
};

export default Home;
