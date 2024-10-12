import React from "react";

function Navbar() {
  return (
    <>
      <div className="min-h-full">
        <nav className="bg-blue-900 fixed top-0 left-0 w-full z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href="#home"
                      className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                      aria-current="page"
                    >
                      Home
                    </a>
                    <a
                      href="#about"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      About
                    </a>
                    <a
                      href="#skills"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Skills
                    </a>
                    <a
                      href="#portfolio"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Portfolio
                    </a>
                    <a
                      href="#contact"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Profile dropdown */}
                  <div className="relative ml-3">
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu, show/hide based on menu state. */}
          <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <a
                href="#home"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="#about"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                About
              </a>
              <a
                href="#skills"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Skills
              </a>
              <a
                href="#portfolio"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        <header></header>
        <main>
          {/* Home Section  */}
          <section
            className="home"
            id="home"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: "80px",
              height: "calc(100vh - 80px)",
              backgroundColor: "#112240",
            }}
          >
            <div className="content" style={{ flex: 1, maxWidth: "50%" }}>
              <h1
                style={{
                  fontSize: "3.5rem",
                  color: "#fff",
                  marginBottom: "10px",
                }}
              >
                Hi, I'm{" "}
                <span style={{ color: "#00bfff" }}>Ridwan Darmawan</span>
              </h1>
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#00bfff",
                  marginBottom: "20px",
                }}
              >
                Junior Developer
              </h3>
              <p
                style={{
                  color: "#aaa",
                  fontSize: "1rem",
                  marginBottom: "20px",
                }}
              >
                I am enthusiastic in technology and have a strong desire to
                learn.
              </p>
              <div className="buttons">
                <a
                  href="#portfolio"
                  className="btn btn-primary"
                  style={{
                    padding: "10px 20px",
                    fontSize: "1rem",
                    textDecoration: "none",
                    borderRadius: "5px",
                    marginRight: "10px",
                    backgroundColor: "#00bfff",
                    color: "#fff",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  View CV
                </a>
                <a
                  href="#contact"
                  className="btn btn-secondary"
                  style={{
                    padding: "10px 20px",
                    fontSize: "1rem",
                    textDecoration: "none",
                    borderRadius: "5px",
                    backgroundColor: "transparent",
                    color: "#00bfff",
                    border: "1px solid #00bfff",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div
              className="image"
              style={{ position: "relative", left: "0", marginLeft: "-20px" }}
            >
              <img
                src="/images/ridwan.jpg"
                alt="Profile Picture"
                style={{
                  width: "200px",
                  height: "auto",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
          </section>

          {/* About Section  */}
          <section
            className="about"
            id="about"
            style={{
              textAlign: "center",
              backgroundColor: "#112240",
              padding: "100px 50px",
            }}
          >
            <h2
              style={{
                color: "#fff",
                fontSize: "2.5rem",
                marginBottom: "20px",
              }}
            >
              About Me
            </h2>
            <p style={{ color: "#aaa", fontSize: "1.2rem" }}>
              I am an informatics student who is interested in web development,
              data science, and machine learning. I am also interested in drone
              piloting, I have worked on several mapping projects and video
              profiles.
            </p>
          </section>

          {/* Skills Section  */}
          <section
            className="skills"
            id="skills"
            style={{
              textAlign: "center",
              backgroundColor: "#112240",
              padding: "100px 50px",
            }}
          >
            <h2
              style={{
                color: "#fff",
                fontSize: "2.5rem",
                marginBottom: "50px",
              }}
            >
              My Skills
            </h2>
            <div
              className="skills-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "30px",
              }}
            >
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
              ].map((skill, index) => (
                <div
                  key={index}
                  className="skill"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0a192f",
                    borderRadius: "10px",
                    padding: "20px",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      marginBottom: "10px",
                    }}
                  />
                  <p style={{ color: "#fff", fontSize: "1.2rem" }}>
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Portfolio Section */}
          <section
            className="portfolio"
            id="portfolio"
            style={{
              textAlign: "center",
              backgroundColor: "#112240",
              padding: "100px 50px",
            }}
          >
            <div
              className="container"
              style={{ maxWidth: "1200px", margin: "0 auto" }}
            >
              <h2
                style={{
                  color: "#fff",
                  fontSize: "2.5rem",
                  marginBottom: "50px",
                }}
              >
                My Portfolio
              </h2>
              <div
                className="portfolio-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "30px",
                }}
              >
                {[
                  {
                    title: "Notes App Backend",
                    description: "Proyek Akhir Course Backend Dicoding",
                    image: "/images/notes.jpg",
                    link: "https://github.com/kowells/notes-app-back-end",
                  },
                  {
                    title: "Statistik Pengunjung Perpustakaan",
                    description:
                      "Proyek Magang di Perpustakaan Grhatama Pustaka Yogyakarta",
                    image: "/images/perpustakaan.png",
                    link: "https://github.com/kowells/project-magang",
                  },
                  {
                    title: "People Counting Using YOLOv8",
                    description:
                      "Proyek Skripsi Perhitungan Pengunjung Menggunakan YOLOv8n Secara Real-time",
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
                    title: "Peta Dusun Dedel Wetab",
                    description: "Peta Foto Udara Dusun Dedel Wetan",
                    image: "/images/peta.png",
                    link: "https://drive.google.com/file/d/1JvnN1VlHBQZEZmrSqD9_QUHioCWmFgIk/view?usp=sharing",
                  },
                ].map((project, index) => (
                  <div
                    className="portfolio-item"
                    key={index}
                    style={{
                      backgroundColor: "#0a192f",
                      borderRadius: "10px",
                      overflow: "hidden",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={`Project ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="portfolio-info" style={{ padding: "20px" }}>
                      <h3
                        style={{
                          color: "#fff",
                          fontSize: "1.5rem",
                          marginBottom: "10px",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          color: "#bbb",
                          fontSize: "1rem",
                          marginBottom: "20px",
                        }}
                      >
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        target="_blank"
                        className="btn"
                        style={{
                          display: "inline-block",
                          padding: "10px 20px",
                          color: "#64ffda",
                          border: "2px solid #64ffda",
                          borderRadius: "5px",
                          textDecoration: "none",
                          transition:
                            "background-color 0.3s ease, color 0.3s ease",
                        }}
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
            className="contact-me"
            id="contact"
            style={{
              textAlign: "center",
              backgroundColor: "#112240",
              padding: "100px 50px",
            }}
          >
            <div
              className="container"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              <h2
                style={{
                  color: "#fff",
                  fontSize: "2.5rem",
                  marginBottom: "50px",
                }}
              >
                Contact Me
              </h2>
              <div
                className="contact-details"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <div
                  className="contact-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0a192f",
                    padding: "20px",
                    borderRadius: "10px",
                    width: "100%",
                    maxWidth: "600px",
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    alt="Email"
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "20px",
                    }}
                  />
                  <p style={{ color: "#fff", fontSize: "1.2rem", margin: 0 }}>
                    Email:{" "}
                    <a
                      href="mailto:youremail@example.com"
                      style={{ color: "#00bfff", textDecoration: "none" }}
                    >
                      ridwand117@gmail.com
                    </a>
                  </p>
                </div>
                <div
                  className="contact-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0a192f",
                    padding: "20px",
                    borderRadius: "10px",
                    width: "100%",
                    maxWidth: "600px",
                  }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "20px",
                    }}
                  />
                  <p style={{ color: "#fff", fontSize: "1.2rem", margin: 0 }}>
                    WhatsApp:{" "}
                    <a
                      href="https://wa.me/1234567890"
                      style={{ color: "#00bfff", textDecoration: "none" }}
                    >
                      082139922566
                    </a>
                  </p>
                </div>
                <div
                  className="contact-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0a192f",
                    padding: "20px",
                    borderRadius: "10px",
                    width: "100%",
                    maxWidth: "600px",
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn"
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "20px",
                    }}
                  />
                  <p style={{ color: "#fff", fontSize: "1.2rem", margin: 0 }}>
                    LinkedIn:{" "}
                    <a
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      style={{ color: "#00bfff", textDecoration: "none" }}
                    >
                      www.linkedin.com/in/ridwan-darmawan-544aa0234/
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Navbar;
