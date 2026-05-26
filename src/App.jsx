import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

import {
  FaCode,
  FaRocket,
  FaLightbulb
} from "react-icons/fa";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss
} from "react-icons/si";

import {
  
  FaExternalLinkAlt
} from "react-icons/fa";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane
} from "react-icons/fa";

import emailjs from "@emailjs/browser";
import {useState, useRef } from "react";



function App() {
  const form = useRef();
  const [showMore, setShowMore] = useState(false);

const sendEmail = (e) => {

  e.preventDefault();

  emailjs
    .sendForm(
      "service_rrgv7x7",
      "template_5iw43kn",
      form.current,
      "8P7E8ON_WTTQcBXiS"
    )
    .then(
      () => {

        alert("Message Sent Successfully 🚀");

      },
      () => {

        alert("Failed To Send Message ❌");

      }
    );

};
  return (
    <div className="bg-slate-950 text-white min-h-screen ">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 z-50">

        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center nav-div">

          <h1 className="text-3xl font-bold text-cyan-400 logo">
            Gaurav Singh Parmar
          </h1>

          <ul className="flex gap-10 text-lg nav-links">

            <li>
              <a
                href="#about"
                className="hover:text-cyan-400 transition "
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="hover:text-cyan-400 transition"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-cyan-400 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>

      </nav>
      

{/* Hero Section */}
<section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden section-line">

  {/* Background Glow */}
  <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

  {/* Small Tag */}
  <p className="
    border border-cyan-400
    text-cyan-400
    px-7 py-2
    rounded-full
    mb-8
    tracking-[4px]
    text-sm
    z-10
    shadow-[0_0_20px_rgba(34,211,238,0.3)]
   hello-text">
    HELLO, I'M
  </p>

  {/* Name */}
  <h1 className="
    text-6xl
    md:text-8xl
    font-extrabold
    leading-tight
    z-10
    mb-4
  ">
    Gaurav Singh Parmar
  </h1>

  {/* Role */}
  <h2 className="
    text-4xl
    md:text-5xl
    font-bold
    text-cyan-400
    mb-8
    z-10
  ">
    Full Stack Developer
  </h2>

  {/* Description */}
  <p className="
    max-w-3xl
    text-slate-400
    text-lg
    md:text-xl
    leading-9
    z-10
  ">
    I build modern, responsive and scalable web applications
    with clean code and great user experience.
  </p>

  {/* Buttons */}
  <div className="flex gap-6 mt-12 z-10">

    
      <a
        href="#projects"
      //   className="
      //   bg-cyan-400
      //   text-black
      //   px-9 py-4
      //   rounded-2xl
      //   font-semibold
      //   hover:scale-105
      //   hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
      //   transition-all duration-300
      //  "
      className="group"
      >
      View Projects →
     </a>

    
   

    <a
      href="#contact"
      // className="
      // border border-slate-600
      // px-9 py-4
      // rounded-2xl
      // hover:border-cyan-400
      // hover:text-cyan-400
      // hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
      // transition-all duration-300
      // "
      className="group"
    >
      Contact Me ✉
    </a>

  </div>

  {/* Social Icons */}
  <div className="flex gap-8 mt-12 z-10 social-icons">

    {/* GitHub */}
    <a
      href="https://github.com/Gaurav-Singh-Parmar"
      target="_blank"
      className="
      text-3xl
      text-slate-300
      hover:text-cyan-400
      hover:-translate-y-2
      transition-all duration-300
      "
    >
      <FaGithub />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/gaurav-singh-parmar-571640317/"
      target="_blank"
      className="
      text-3xl
      text-slate-300
      hover:text-cyan-400
      hover:-translate-y-2
      transition-all duration-300
      "
    >
      <FaLinkedin />
    </a>

    {/* Gmail */}
    <a
      href="#contact"
      className="
      text-3xl
      text-slate-300
      hover:text-cyan-400
      hover:-translate-y-2
      transition-all duration-300
      "
    >
      <FaEnvelope />
    </a>

  </div>

</section>



{/* About Section */}
<section id="about" className="about-section">

  <div className="about-container">

    {/* Left Side */}
    <div className="about-left">

      <p className="about-tag">
        ABOUT ME
      </p>

      <h2 className="about-title">
        Who I Am
      </h2>

     <p className="about-text">

  I’m Gaurav Singh Parmar, a passionate Full Stack Developer
  and a B.Tech final year student who enjoys building modern,
  responsive, and user-friendly web applications.

  <br /><br />

  I love turning creative ideas into real-world digital products
  using clean and efficient code. Currently, I am improving my
  frontend and backend development skills by building real-world
  projects and exploring modern web technologies.

  <br /><br />

  I have experience working with technologies like React,
  JavaScript, Node.js, MongoDB, Express.js, and Tailwind CSS.
  I enjoy solving problems, learning new technologies,
  and creating smooth user experiences.

  <br /><br />

  My goal is to become a skilled software developer and work on
  impactful projects that help people and improve my development journey.

</p>

    </div>

    {/* Right Side Cards */}
<div className="about-cards">

  {/* Card 1 */}
  <div className="about-card">

    <div className="card-icon">
      <FaCode />
    </div>

    <h3>
      Clean Code
    </h3>

    <p>
      I write readable and maintainable code.
    </p>

  </div>

  {/* Card 2 */}
  <div className="about-card">

    <div className="card-icon">
      <FaRocket />
    </div>

    <h3>
      Performance
    </h3>

    <p>
      I build fast and optimized web applications.
    </p>

  </div>

  {/* Card 3 */}
  <div className="about-card">

    <div className="card-icon">
      <FaLightbulb />
    </div>

    <h3>
      Problem Solver
    </h3>

    <p>
      I love solving problems and learning new things.
    </p>

  </div>

</div>

  </div>

</section>


{/* Skills Section */}
<section id="skills" className="skills-section">

  <div className="skills-container">

    <p className="skills-tag">
      SKILLS
    </p>

    <h2 className="skills-title">
      My Tech Stack
    </h2>

    <div className="skills-grid">

      {/* HTML */}
      <div className="skill-card">
        <FaHtml5 className="skill-icon html" />
        <p>HTML</p>
      </div>

      {/* CSS */}
      <div className="skill-card">
        <FaCss3Alt className="skill-icon css" />
        <p>CSS</p>
      </div>

      {/* JS */}
      <div className="skill-card">
        <FaJs className="skill-icon js" />
        <p>JavaScript</p>
      </div>

      {/* React */}
      <div className="skill-card">
        <FaReact className="skill-icon react" />
        <p>React</p>
      </div>

      {/* Node */}
      <div className="skill-card">
        <FaNodeJs className="skill-icon node" />
        <p>Node.js</p>
      </div>

      {/* Express */}
      <div className="skill-card">
        <SiExpress className="skill-icon express" />
        <p>Express</p>
      </div>

      {/* MongoDB */}
      <div className="skill-card">
        <SiMongodb className="skill-icon mongo" />
        <p>MongoDB</p>
      </div>

      {/* Git */}
      <div className="skill-card">
        <FaGitAlt className="skill-icon git" />
        <p>Git</p>
      </div>

      {/* GitHub */}
<div className="skill-card">
  <FaGithub className="skill-icon github" />
  <p>GitHub</p>
</div>

      {/* Tailwind */}
      <div className="skill-card">
        <SiTailwindcss className="skill-icon tailwind" />
        <p>Tailwind CSS</p>
      </div>

    </div>

  </div>

</section>


{/* PROJECTS SECTION */}

<section id="projects" className="projects-section">

  <div className="projects-container">

    {/* Top */}
    <div className="projects-top">

      <div>

        <p className="projects-tag">
          PROJECTS
        </p>

        <h2 className="projects-title">
          My Projects
        </h2>

      </div>

      <button
  className="view-btn"
  onClick={() => setShowMore(!showMore)}
>
  {showMore ? "Show Less ←" : "View All Projects →"}
</button>

    </div>

    {/* Cards */}
    <div className="projects-grid">

      {/* Card 1 */}
      <div className="project-card">

        <img
          src="/image1.png"
          alt="project"
          className="project-img"
        />

        <div className="project-content">

          <h3>
            Movie Recommendation System
          </h3>

          <p>
           Developed a full-stack movie recommendation application using Next.js, Node.js, and MongoDB. Integrated API-based recommendation features and dynamic movie search functionality. Implemented secure authentication and designed responsive user interface components. Deployed the application on Vercel with optimized performance.
          </p>

          <div className="project-links">

            <a href="https://movie-recommand-two.vercel.app/">
              Live Demo <FaExternalLinkAlt />
            </a>

            <a href="https://github.com/Gaurav-Singh-Parmar/Movie-Recommendation-System">
              GitHub <FaGithub />
            </a>

          </div>

        </div>

      </div>

      {/* Card 2 */}
      <div className="project-card">

        <img
          src="/image2.png"
          alt="project"
          className="project-img"
        />

        <div className="project-content">

          <h3>
            Civic Complaint System
          </h3>

          <p>
            Developed a full-stack complaint tracking platform with role-based access control for users and admins. Designed and implemented secure CRUD REST APIs for complaint creation, status updates, and data management. Integrated authentication and protected routes. Deployed production-ready application using Next.js, Node.js, and MongoDB.
          </p>

          <div className="project-links">

            <a href=" https://civic-complaint-system-i5w8.vercel.app">
              Live Demo <FaExternalLinkAlt />
            </a>

            <a href="https://github.com/Gaurav-Singh-Parmar/city-complaint-portal">
              GitHub <FaGithub />
            </a>

          </div>

        </div>

      </div>

      {/* Card 3 */}
      <div className="project-card">

        <img
          src="/image3.png"
          alt="project"
          className="project-img"
        />

        <div className="project-content">

          <h3>
            AI Chatbot
          </h3>

          <p>
            Built an AI chatbot interface with responsive design and API integration for real-time conversations.
          </p>

          <div className="project-links">

            <a href="https://chat-beige-sigma.vercel.app/">
              Live Demo <FaExternalLinkAlt />
            </a>

            <a href="/">
              GitHub <FaGithub />
            </a>

          </div>

        </div>

      </div>

    </div>


    {
  showMore && (

    <div className="projects-grid mt-8">

      {/* CARD 4 */}
      <div className="project-card">

        <img
          src="/Airbnb.png"
          alt="project"
          className="project-img"
        />

        <div className="project-content">

          <h3>Airbnb Website</h3>

          <p>
           Currently working on it, will be deployed soon.
          </p>

          <div className="project-links">

            <a href="/">
              Live Demo
            </a>

            <a href="https://github.com/Gaurav-Singh-Parmar/Airbnb-website">
              GitHub
            </a>

          </div>

        </div>

      </div>

      {/* CARD 5 */}
      {/* <div className="project-card">

        <img
          src="/image1.png"
          alt="project"
          className="project-img"
        />

        <div className="project-content">

          <h3>Movie App</h3>

          <p>
            Movie app using API integration and search.
          </p>

          <div className="project-links">

            <a href="/">
              Live Demo
            </a>

            <a href="/">
              GitHub
            </a>

          </div>

        </div>

      </div> */}

      {/* CARD 6 */}
      {/* <div className="project-card">

        <img
          src="/image1.png"
          alt="project"
          className="project-img"
        />

        <div className="project-content">

          <h3>Chat Application</h3>

          <p>
            Real time chat application using Socket.io.
          </p>

          <div className="project-links">

            <a href="/">
              Live Demo
            </a>

            <a href="/">
              GitHub
            </a>

          </div>

        </div>

      </div> */}

    </div>

  )
}

  </div>

</section>



{/* CONTACT SECTION */}

<section id="contact" className="contact-section">

  <div className="contact-container">

    {/* LEFT SIDE */}
    <div className="contact-left">

      <p className="contact-tag">
        CONTACT
      </p>

      <h2 className="contact-title">
        Contact Me
      </h2>

      {/* Info */}
      <div className="contact-info">

        {/* Email */}
        <div className="contact-item">

          <FaEnvelope className="contact-icon" />

          <span>
            parmargaurav0786@gmail.com
          </span>

        </div>

        {/* Phone */}
        <div className="contact-item">

          <FaPhoneAlt className="contact-icon" />

          <span>
            +91 6367337203
          </span>

        </div>

        {/* Location */}
        <div className="contact-item">

          <FaMapMarkerAlt className="contact-icon" />

          <span>
            Jaipur, Rajasthan, India
          </span>

        </div>

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="contact-right">

      <form
  ref={form}
  onSubmit={sendEmail}
  className="contact-form"
>

        {/* Top Inputs */}
        <div className="input-row">

         <input
  type="text"
  name="from_name"
  placeholder="Your Name"
/>

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
          />

        </div>

        {/* Message */}
        <textarea
          rows="5"
          name="message"
          placeholder="Your Message"
        ></textarea>

        {/* Button */}
        <button type="submit">

          Send Message

          <FaPaperPlane />

        </button>

      </form>

    </div>

  </div>

</section>


{/* FOOTER */}

<footer className="footer">

  <div className="footer-container">

    {/* Left */}
    <p>
      © 2026 Gaurav Singh Parmar. All rights reserved.
    </p>

    {/* Right */}
    <p>
      Built with ❤️ using
      <span>
        React & Tailwind CSS
      </span>
    </p>

  </div>

</footer>

     
    </div>
  )
}

export default App