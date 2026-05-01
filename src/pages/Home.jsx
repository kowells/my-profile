import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Home() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);


    const projects = [
        {
            title: "Quality Assurance - HRIS Testing",
            description:
                "Testing manual web dan API HRIS.",
            images: ["/images/test-case.png", "/images/bug-report.png"],
            link: "https://github.com/",
            tools: ["Trello", "Postman", "Spreadsheet"],
        },
        {
            title: "HRIS",
            description:
                "Web Human Resource untuk data karyawan, perizinan, absensi.",
            images: ["/images/hris-login.png", "/images/hris-login.png"],
            link: "https://github.com/",
            tools: ["Codeigniter 3", "MySQL"],
        },
        {
            title: "Qlearning",
            description:
                "Web Learning Management System untuk e-learning interaktif.",
            images: ["/images/qlearning.png", "/images/qlearning.png"],
            link: "https://github.com/",
            tools: ["Codeigniter 4", "Datatables", "PHP", "MySQL"],
        },
        {
            title: "Bookshelf API",
            description:
                "API sederhana untuk mengelola catatan buku menggunakan Node.js dan Hapi Framework.",
            images: ["/images/notes.jpg", "/images/notes.png"],
            link: "https://github.com/kowells/notes-app-back-end",
            tools: ["Node.js", "Hapi", "Jest", "Postman"],
        },

        {
            title: "People Counting Using YOLOv8",
            description:
                "Sistem deteksi dan perhitungan pengunjung real-time menggunakan YOLOv8.",
            images: ["/images/people-counting.png", "/images/people-counting.png"],
            link: "https://github.com/yourproject3",
            tools: ["Python", "YOLOv8", "OpenCV", "Realtime"],
        },

    ];

    const skills = {
        "QA & Testing": [
            "Manual Testing",
            "Test Case Design",
            "API Testing (Postman)",
            "Automation Testing (Playwright)",
            "End-to-End Testing",
            "Bug Reporting"
        ],
        "Project Management": [
            "Agile / Scrum",
            "Project Planning",
            "Task Management",
            "Requirement Gathering"
        ],
        "Tools": [
            "Postman",
            "Playwright",
            "Git & GitHub"
        ],
        "Technical Basics": [
            "JavaScript",
            "REST API"
        ]
    };

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImage(0);
    };

    const closeModal = () => setSelectedProject(null);


    return (
        <main>
            {/* ===== HOME SECTION ===== */}
            <section
                id="home"
                className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center pt-20 bg-[#112240] px-6 md:px-16"
            >
                {/* TEXT */}
                <div className="text-center md:text-left flex-1 max-w-2xl mt-8 md:mt-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
                    >
                        Hi, I'm{" "}
                        <span className="text-[#64ffda] whitespace-nowrap">
                            Ridwan Darmawan
                        </span>
                    </motion.h1>

                    <h3 className="text-[#64ffda] font-semibold text-xl sm:text-2xl mb-5">
                        Project Manager | Quality Assurance
                    </h3>

                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-md md:max-w-lg mx-auto md:mx-0">
                        Focused on leading projects, improving workflows,
                        and ensuring high-quality software through structured testing, clear communication, and continuous improvement.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <a
                            href="https://drive.google.com/file/d/1FTqhNPuSkpKznQiH_oM4lUMoiC7e1_p7/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#64ffda] text-[#0a192f] py-2.5 px-8 rounded-md text-base font-medium hover:bg-transparent hover:text-[#64ffda] border border-[#64ffda] transition-all duration-300"
                        >
                            View CV
                        </a>
                        <a
                            href="#contact"
                            className="border border-[#64ffda] text-[#64ffda] py-2.5 px-8 rounded-md text-base font-medium hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center md:ml-10"
                >
                    <img
                        src="/images/ridwan.jpg"
                        alt="Ridwan Darmawan"
                        className="w-40 sm:w-52 md:w-60 rounded-full shadow-lg ring-4 ring-[#64ffda]/30"
                    />
                </motion.div>
            </section>

            {/* ===== ABOUT SECTION ===== */}
            <section
                id="about"
                className="min-h-screen flex flex-col justify-center items-center bg-[#0a192f] px-6 py-20"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-[#64ffda] text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center relative">
                        About Me
                        <span className="block w-20 h-[3px] bg-[#64ffda] mx-auto mt-3 rounded"></span>
                    </h2>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify">
                        Saya <span className="text-white font-semibold">Ridwan Darmawan</span>,
                        lulusan <span className="text-[#64ffda]">S1 Informatika UPN “Veteran” Yogyakarta</span>
                        dengan pengalaman di bidang pengembangan perangkat lunak dan pengujian sistem.
                        Saat ini saya berfokus sebagai
                        <span className="text-white font-medium"> Project Manager dan Quality Assurance</span>,
                        dengan peran dalam mengelola alur proyek, memastikan komunikasi tim berjalan efektif,
                        serta memastikan setiap produk yang dikembangkan memenuhi standar kualitas yang tinggi.
                    </p>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify mt-6">
                        Saya memiliki pengalaman dalam <span className="text-white font-medium">Quality Assurance</span>,
                        termasuk melakukan pengujian manual (black box testing), menyusun test case,
                        serta melakukan API dan end-to-end testing menggunakan
                        <span className="text-[#64ffda]"> Postman</span> dan
                        <span className="text-[#64ffda]"> Playwright</span>.
                        Saya juga terbiasa bekerja dengan proses <span className="text-[#64ffda]">SDLC</span>,
                        bug tracking, serta kolaborasi lintas tim untuk memastikan kualitas produk sebelum rilis.
                    </p>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify mt-6">
                        Selain itu, saya memiliki pemahaman teknis di bidang pengembangan web menggunakan
                        <span className="text-[#64ffda]"> JavaScript</span>,
                        <span className="text-[#64ffda]"> Node.js</span>, dan
                        <span className="text-[#64ffda]"> MySQL</span>,
                        yang membantu saya dalam berkomunikasi secara efektif dengan tim developer
                        dan mengambil keputusan berbasis teknis sebagai Project Manager.
                    </p>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify mt-6">
                        Sebelumnya, saya juga memiliki pengalaman sebagai
                        <span className="text-white font-medium"> IT Support</span>,
                        yang membentuk kemampuan saya dalam troubleshooting, problem solving,
                        serta adaptasi cepat terhadap berbagai permasalahan teknis.
                        Saya dikenal sebagai individu yang analitis, komunikatif, dan berorientasi pada hasil,
                        dengan komitmen untuk memastikan setiap proyek berjalan terstruktur dan menghasilkan
                        solusi yang berkualitas.
                    </p>


                </div>
            </section>

            {/* ===== SKILLS SECTION ===== */}
            <section id="skills" className="bg-[#112240] py-20 text-center">
                <h2 className="text-[#64ffda] text-3xl sm:text-4xl md:text-5xl font-bold mb-16">
                    My Skills
                </h2>

                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#0a192f] rounded-xl p-6 shadow-lg hover:shadow-[#64ffda]/20 transition-all text-left"
                        >
                            {/* Category Title */}
                            <h3 className="text-[#64ffda] text-xl font-semibold mb-4">
                                {category}
                            </h3>

                            {/* Skills List */}
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.08 }}
                                        className="bg-[#112240] text-white text-sm px-4 py-2 rounded-full border border-[#64ffda]/30 hover:bg-[#64ffda]/10 transition"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* ===== PORTFOLIO SECTION ===== */}
            <section id="portfolio" className="bg-[#0a192f] py-20 px-6 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-[#64ffda] text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
                        My Portfolio
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                className="bg-[#112240] rounded-lg overflow-hidden shadow-md hover:shadow-[#64ffda]/20 cursor-pointer transition"
                                onClick={() => openModal(project)}
                            >
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-44 object-cover"
                                />
                                <div className="p-5 text-left">
                                    <h3 className="text-white text-xl font-semibold mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tools.map((tool, j) => (
                                            <span
                                                key={j}
                                                className="text-[#64ffda] border border-[#64ffda] text-xs px-2 py-1 rounded-full"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* MODAL */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal} // ✅ klik di luar modal = tutup modal
                        >
                            <motion.div
                                className="bg-[#112240] rounded-lg max-w-4xl w-full h-[80vh] relative p-6 flex flex-col items-center justify-between overflow-hidden"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.9 }}
                                onClick={(e) => e.stopPropagation()} // 🚫 mencegah klik dalam modal ikut menutup
                            >
                                {/* Tombol close */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                                >
                                    &times;
                                </button>

                                {/* Image */}
                                <div className="relative flex-1 flex items-center justify-center overflow-hidden w-full">
                                    <img
                                        src={selectedProject.images[currentImage]}
                                        alt={selectedProject.title}
                                        className="max-w-full max-h-[60vh] object-contain rounded-md transition-all duration-300"
                                    />
                                </div>

                                {/* Indicator */}
                                {selectedProject.images.length > 1 && (
                                    <div className="flex justify-center gap-2 mt-3 mb-1">
                                        {selectedProject.images.map((_, idx) => (
                                            <span
                                                key={idx}
                                                className={`w-2.5 h-2.5 rounded-full ${idx === currentImage
                                                    ? "bg-[#64ffda]"
                                                    : "bg-gray-500/50"
                                                    }`}
                                            ></span>
                                        ))}
                                    </div>
                                )}

                                {/* Deskripsi */}
                                <div className="text-center mt-3">
                                    <h3 className="text-2xl mb-2">{selectedProject.title}</h3>
                                    <p className="text-gray-400 mb-4 max-w-lg mx-auto">
                                        {selectedProject.description}
                                    </p>
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-2 border-[#64ffda] text-[#64ffda] px-5 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition"
                                    >
                                        View Project
                                    </a>
                                </div>

                                {/* Navigasi kiri/kanan */}
                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() =>
                                                setCurrentImage((prev) =>
                                                    prev === 0
                                                        ? selectedProject.images.length - 1
                                                        : prev - 1
                                                )
                                            }
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0a192f]/70 text-white p-3 rounded-full hover:bg-[#64ffda] hover:text-[#0a192f] transition"
                                        >
                                            &#10094;
                                        </button>
                                        <button
                                            onClick={() =>
                                                setCurrentImage((prev) =>
                                                    prev === selectedProject.images.length - 1
                                                        ? 0
                                                        : prev + 1
                                                )
                                            }
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0a192f]/70 text-white p-3 rounded-full hover:bg-[#64ffda] hover:text-[#0a192f] transition"
                                        >
                                            &#10095;
                                        </button>
                                    </>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>


            </section>

            {/* ===== CONTACT SECTION ===== */}
            <section
                id="contact"
                className="bg-[#112240] py-20 px-6 flex flex-col items-center text-center"
            >
                <h2 className="text-[#64ffda] text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
                    Contact Me
                </h2>
                <div className="flex flex-col gap-6 w-full max-w-2xl">
                    {[
                        {
                            label: "Email",
                            link: "mailto:ridwand117@gmail.com",
                            text: "ridwand117@gmail.com",
                        },
                        {
                            label: "WhatsApp",
                            link: "https://wa.me/6282139922566",
                            text: "0821-3992-2566",
                        },
                        {
                            label: "LinkedIn",
                            link: "https://www.linkedin.com/in/ridwan-darmawan-544aa0234/",
                            text: "linkedin.com/in/ridwan-darmawan",
                        },
                    ].map((c, i) => (
                        <a
                            key={i}
                            href={c.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#0a192f] p-5 rounded-lg text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] transition transform hover:scale-105"
                        >
                            {c.label}: <span className="font-semibold">{c.text}</span>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}