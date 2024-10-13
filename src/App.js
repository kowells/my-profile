import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header></header>
      <main>
        {/* Home Section  */}
        <section
          className="home h-screen flex justify-center items-center pt-20 bg-[#112240] overflow-hidden"
          id="home"
        >
          <div className="content flex-1 max-w-lg">
            <h1 className="text-white text-5xl mb-2 whitespace-nowrap">
              Hi, I'm <span className="text-sky-400">Ridwan Darmawan</span>
            </h1>
            <h3 className="text-sky-400 text-2xl mb-5">Junior Developer</h3>
            <p className="text-gray-400 text-base mb-5">
              I am enthusiastic in technology and have a strong desire to learn.
            </p>
            <div className="buttons flex justify-center space-x-8 mt-4">
              {" "}
              {/* Menambahkan justify-center */}
              <a
                href="https://drive.google.com/file/d/1SISp3_L1UTsQfr8boXC3QyUTLXhQNRlB/view?usp=drive_link"
                className="bg-sky-500 text-white py-2 px-4 rounded-md text-base transition-colors duration-300 hover:bg-sky-300"
              >
                View CV
              </a>
              <a
                href="#contact"
                className="bg-transparent text-sky-500 py-2 px-4 rounded-md border border-sky-500 text-base transition-colors duration-300 hover:bg-sky-300 hover:text-white"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="image relative ml-10">
            {" "}
            {/* Memperbesar margin kiri */}
            <img
              src="/images/ridwan.jpg"
              alt="Profile Picture"
              className="w-48 h-auto rounded-full object-cover"
            />
          </div>
        </section>

        {/* About Section  */}
        <section
          className="about h-screen flex flex-col justify-center items-center bg-[#112240] px-4"
          id="about"
        >
          <h2 className="text-white text-5xl mb-5">About Me</h2>
          <p className="text-gray-400 text-xl max-w-2xl text-center leading-relaxed">
            I am a final-year student with skills in programming and software
            development, supported by experience in team projects. I have
            expertise as a drone pilot, specializing in videography and mapping
            applications, having successfully completed several projects in this
            field. As a fast learner with a keen interest in the latest
            technologies, I possess strong analytical skills and a passion for
            continuous improvement.
          </p>
        </section>

        {/* Skills Section  */}
        <section
          className="skills h-screen text-center bg-[#112240] py-24 overflow-hidden"
          id="skills"
        >
          <h2 className="text-white text-4xl mb-12">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mx-20">
            {[
              {
                name: "HTML",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              },
              {
                name: "CSS",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
              },
              {
                name: "JavaScript",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              },
              {
                name: "React",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Node.js",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "Python",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              },
              {
                name: "Tailwind",
                img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
              },
              {
                name: "PHP",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
              },
              {
                name: "MySQL",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
              },
              {
                name: "Bootstrap",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
              },
              {
                name: "Drone Pilot",
                img: "https://i.pinimg.com/originals/ba/d6/f7/bad6f7ea11ce3e085230ff0ed8bee378.jpg",
              },
              {
                name: "MS Office",
                img: "https://www.logo.wine/a/logo/Microsoft_Office_2013/Microsoft_Office_2013-Logo.wine.svg",
              },
              {
                name: "Pix4D",
                img: "https://thedronecentre.ae/wp-content/uploads/2021/09/new_capture_name_light_v.svg",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-[#0a192f] rounded-lg p-4 transition-transform transform hover:scale-105 mx-2" // Tambahkan mx-2 untuk memberi jarak horizontal
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-16 h-16 mb-2"
                />
                <p className="text-white text-base">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          className="portfolio h-[150vh] text-center bg-[#112240] py-24"
          id="portfolio"
        >
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-white text-4xl mb-12">My Portfolio</h2>
            <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Bookshelf API",
                  description:
                    "Proyek akhir dari Course Belajar Back-End Pemula dengan Javascript Dicoding yang bertujuan membuat API untuk catatan/notes",
                  image: "/images/notes.jpg",
                  link: "https://github.com/kowells/notes-app-back-end",
                },
                {
                  title: "Statistik Pengunjung Perpustakaan",
                  description:
                    "Proyek website perhitungan statistik jumlah pengunjung di Grhatama Pustaka, bertujuan untuk menghitung dan menganalisis jumlah pengunjung secara efektif",
                  image: "/images/perpustakaan.png",
                  link: "https://github.com/kowells/project-magang",
                },
                {
                  title: "People Counting Using YOLOv8",
                  description:
                    "Proyek sistem perhitungan pengunjung yang dikembangkan untuk pusat perbelanjaan, di rancang untuk memantau dan menganalisis jumlah pengunjung secara real-time",
                  image: "/images/people-counting.png",
                  link: "https://github.com/yourproject3",
                },
                {
                  title: "Data Science",
                  description: "Proyek Akhir Course Data Science Sanbercode",
                  image: "/images/ds.png",
                  link: "https://colab.research.google.com/drive/1TFyL_1mSwjUcE6YarY1BC9-e68a8sBGv",
                },
                {
                  title: "Peta Dusun Dedel Wetan",
                  description: "Peta Foto Udara Dusun Dedel Wetan",
                  image: "/images/peta.png",
                  link: "https://drive.google.com/file/d/1JvnN1VlHBQZEZmrSqD9_QUHioCWmFgIk/view?usp=sharing",
                },
                {
                  title: "Video Drone",
                  description: "Video hasil shoot drone",
                  image: "/images/drone.png",
                  link: "https://www.youtube.com/playlist?list=PL_Cg8j6TEJU2rvuydnnm2IP5lSH_LTbFB",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="portfolio-item bg-[#0a192f] rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  <img
                    src={project.image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="portfolio-info p-6">
                    <h3 className="text-white text-2xl mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-base mb-6">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 text-[#64ffda] border-2 border-[#64ffda] rounded-lg transition-colors duration-300 hover:bg-[#64ffda] hover:text-[#0a192f]"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section  */}
        <section
          className="contact-me h-screen text-center bg-[#112240] py-24 overflow-hidden flex flex-col justify-center items-center"
          id="contact"
        >
          <div className="container max-w-4xl w-full mx-auto">
            <h2 className="text-white text-4xl mb-12">Contact Me</h2>
            <div className="contact-details flex flex-col items-center gap-8">
              {[
                {
                  id: "email",
                  imgSrc:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
                  alt: "Email",
                  link: "mailto:ridwand117@gmail.com",
                  text: "ridwand117@gmail.com",
                },
                {
                  id: "whatsapp",
                  imgSrc:
                    "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
                  alt: "WhatsApp",
                  link: "https://wa.me/6282139922566",
                  text: "082139922566",
                },
                {
                  id: "linkedin",
                  imgSrc:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
                  alt: "LinkedIn",
                  link: "https://www.linkedin.com/in/ridwan-darmawan-544aa0234/",
                  text: "www.linkedin.com/in/ridwan-darmawan-544aa0234/",
                },
              ].map(({ id, imgSrc, alt, link, text }) => (
                <div
                  key={id}
                  className="contact-item flex items-center justify-center bg-[#0a192f] p-5 rounded-lg w-full max-w-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-blue-900"
                >
                  <img src={imgSrc} alt={alt} className="w-10 h-10 mr-5" />
                  <p className="text-white text-xl m-0">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 transition duration-300 ease-in-out"
                    >
                      {text}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
