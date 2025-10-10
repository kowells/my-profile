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
          className="home min-h-screen flex flex-col-reverse md:flex-row justify-center items-center pt-20 bg-[#112240] px-6 md:px-16"
          id="home"
        >
          <div className="content text-center md:text-left flex-1 max-w-lg mt-8 md:mt-0">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl mb-2">
              Hi, I'm <span className="text-sky-400">Ridwan Darmawan</span>
            </h1>
            <h3 className="text-sky-400 text-xl sm:text-2xl mb-4">
              Junior Developer
            </h3>
            <p className="text-gray-400 text-base mb-5">
              I am enthusiastic in technology and have a strong desire to learn.
            </p>
            <div className="buttons flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mt-4">
              <a
                href="https://drive.google.com/file/d/1K0To7ndkOLm5nRuJXT22p9slye-JWSaf/view?usp=drive_link"
                className="bg-sky-500 text-white py-2 px-6 rounded-md text-base hover:bg-sky-300 transition"
              >
                View CV
              </a>
              <a
                href="#contact"
                className="border border-sky-500 text-sky-500 py-2 px-6 rounded-md text-base hover:bg-sky-300 hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="image flex justify-center md:ml-10">
            <img
              src="/images/ridwan.jpg"
              alt="Ridwan Darmawan"
              className="w-40 sm:w-52 md:w-60 h-auto rounded-full object-cover"
            />
          </div>
        </section>

        {/* About Section  */}
        <section
          className="about min-h-screen flex flex-col justify-center items-center bg-[#112240] px-6 py-20 text-center"
          id="about"
        >
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl mb-6">
            About Me
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
            I am a graduate of Informatics from UPN "Veteran" Yogyakarta with
            over a year of experience in web development. I have worked as a
            freelance web developer, a back-end engineer at Sobat Gurun, and I
            am currently a web developer at QHomemart Yogyakarta. I am
            passionate about web development, data science, and machine
            learning. Additionally, I have experience in drone piloting and have
            contributed to several mapping projects and video profiles.
          </p>
        </section>

        {/* Skills Section  */}
        <section className="skills text-center bg-[#112240] py-20" id="skills">
          <h2 className="text-white text-3xl sm:text-4xl mb-10">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-6 md:px-12">
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
                className="flex flex-col items-center justify-center bg-[#0a192f] rounded-lg p-4 hover:scale-105 transition-transform"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-14 h-14 mb-2"
                />

                <p className="text-white text-sm sm:text-base">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          className="portfolio text-center bg-[#112240] py-20 px-6"
          id="portfolio"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-3xl sm:text-4xl mb-10">
              My Portfolio
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Qlearning",
                  description: "Web Learning Management System",
                  image: "/images/qlearning.png",
                  link: "https://github.com/",
                },
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
                  className="bg-[#0a192f] rounded-lg overflow-hidden transform transition hover:scale-105"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-white text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] transition"
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
          className="contact-me bg-[#112240] py-20 px-6 flex flex-col justify-center items-center text-center"
          id="contact"
        >
          <h2 className="text-white text-3xl sm:text-4xl mb-10">Contact Me</h2>
          <div className="flex flex-col gap-6 w-full max-w-2xl">
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
            ].map((c) => (
              <div
                key={c.id}
                className="flex flex-col sm:flex-row items-center justify-center bg-[#0a192f] p-4 rounded-lg hover:scale-105 transition"
              >
                <img
                  src={c.imgSrc}
                  alt={c.alt}
                  className="w-10 h-10 mb-2 sm:mb-0 sm:mr-4"
                />
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 text-lg hover:text-sky-300"
                >
                  {c.text}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
