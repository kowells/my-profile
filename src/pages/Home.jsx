import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Home() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);


    const projects = [
        {
            title: "Realbugz - Testing",
            description:
                "Testing form web manual dan automation menggunakan Playwright.",
            images: ["/images/realbugz-1.png", "/images/realbugz-2.png"],
            link: "https://github.com/kowells/realbugz-testing",
            tools: ["Playwright", "Spreadsheet", "Trello"],
        },
        {
            title: "SINKAL Publik - Testing",
            description:
                "Testing web manual dan automation menggunakan Playwright.",
            images: ["/images/sinkal1.png", "/images/sinkal3.png", "/images/sinkal2.png"],
            link: "https://github.com/kowells/sinkal-publik-testing",
            tools: ["Playwright", "Spreadsheet", "Open Project"],
        },
        {
            title: "Fake Store API  - Testing",
            description:
                "Testing API menggunakan Postman.",
            images: ["/images/fakestoreapi-1.png"],
            link: "https://github.com/kowells/fakestoreapi-testing",
            tools: ["Postman", "Spreadsheet", "Trello"],
        },
        {
            title: "HRIS Cuti - Testing",
            description:
                "Testing manual web dan API HRIS.",
            images: ["/images/test-case.png", "/images/bug-report.png"],
            link: "https://drive.google.com/file/d/1PyMUO3ndtIHSiUjH58SKKeM6ymCmAync/view?usp=sharing",
            tools: ["Trello", "Postman", "Spreadsheet"],
        },
        {
            title: "HRIS",
            description:
                "Web Human Resource untuk data karyawan, perizinan, absensi.",
            images: ["/images/hris-login.png", "/images/hris-login.png"],
            link: "/private",
            tools: ["Codeigniter 3", "MySQL"],
        },
        // {
        //     title: "Qlearning",
        //     description:
        //         "Web Learning Management System untuk e-learning interaktif.",
        //     images: ["/images/qlearning.png", "/images/qlearning.png"],
        //     link: "/private",
        //     tools: ["Codeigniter 4", "Datatables", "PHP", "MySQL"],
        // },
        // {
        //     title: "Bookshelf API",
        //     description:
        //         "API sederhana untuk mengelola catatan buku menggunakan Node.js dan Hapi Framework.",
        //     images: ["/images/notes.jpg", "/images/notes.png"],
        //     link: "https://github.com/kowells/notes-app-back-end",
        //     tools: ["Node.js", "Hapi", "Jest", "Postman"],
        // },

        // {
        //     title: "People Counting Using YOLOv8",
        //     description:
        //         "Sistem deteksi dan perhitungan pengunjung real-time menggunakan YOLOv8.",
        //     images: ["/images/people-counting.png", "/images/people-counting.png"],
        //     link: "/private",
        //     tools: ["Python", "YOLOv8", "OpenCV", "Realtime"],
        // },

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
                        Quality Assurance
                    </h3>

                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-md md:max-w-lg mx-auto md:mx-0">
                        QA Engineer focused on system quality, release stability, and user validation for web & mobile applications.
                        Experienced in manual testing, API validation, and cross-team project coordination.
                    </p>

                    <p className="flex items-center justify-center md:justify-start gap-2 text-gray-300 mb-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-[#64ffda]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                            />
                        </svg>

                        <span>Sleman, Yogyakarta</span>
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
                        <a
                            href="#project"
                            className="border border-[#64ffda] text-[#64ffda] py-2.5 px-8 rounded-md text-base font-medium hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300"
                        >
                            Project
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
                        Tentang Saya
                        <span className="block w-20 h-[3px] bg-[#64ffda] mx-auto mt-3 rounded"></span>
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify">
                        Saya percaya kualitas aplikasi bukan hanya tentang fitur berjalan,
                        tetapi juga tentang bagaimana sistem tetap stabil, minim kendala,
                        dan nyaman digunakan oleh user. Karena itu, saya terbiasa melakukan
                        <span className="text-[#64ffda]"> manual testing</span>,
                        <span className="text-[#64ffda]"> automation testing</span>,
                        <span className="text-[#64ffda]"> regression testing</span>,
                        <span className="text-[#64ffda]"> UAT</span>,
                        <span className="text-[#64ffda]"> bug reporting</span>, dan
                        <span className="text-[#64ffda]"> system validation</span>
                        untuk memastikan setiap release benar-benar siap digunakan.
                    </p>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify mt-6">
                        Selama lebih dari
                        <span className="text-white font-medium"> 1,5 tahun</span>,
                        saya terlibat dalam pengembangan dan pengujian aplikasi web maupun mobile,
                        termasuk sistem HR dan berbagai aplikasi internal perusahaan.
                        Saya sering menangani masalah seperti bug setelah deployment,
                        alur fitur yang tidak sesuai kebutuhan user,
                        hingga integrasi sistem yang kurang stabil.
                        Untuk mengatasinya, saya terbiasa menyusun
                        <span className="text-[#64ffda]"> test case</span>,
                        melakukan
                        <span className="text-[#64ffda]"> validasi API</span>,
                        membuat
                        <span className="text-[#64ffda]"> dokumentasi bug</span>,
                        serta melakukan
                        <span className="text-[#64ffda]"> end-to-end testing</span>
                        agar proses testing lebih terstruktur dan mudah ditindaklanjuti oleh tim developer.
                    </p>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify mt-6">
                        Didukung pengalaman sebagai
                        <span className="text-white font-medium"> Full Stack Web Developer</span>,
                        saya memiliki pemahaman yang baik terhadap alur aplikasi,
                        database, dan integrasi sistem sehingga lebih mudah
                        dalam menganalisis masalah dari sisi teknis maupun pengalaman pengguna.
                        Saya juga terbiasa berkolaborasi dengan developer,
                        user, dan stakeholder untuk memastikan setiap fitur
                        berjalan sesuai kebutuhan bisnis dan memiliki kualitas
                        yang layak sebelum release.
                    </p>

                </div>
            </section>

            {/* ===== QA CONTRIBUTION SECTION ===== */}
            <section
                id="qa-contribution"
                className="bg-[#112240] py-20 px-6"
            >
                <div className="max-w-6xl mx-auto">
                    {/* TITLE */}
                    <h2 className="text-[#64ffda] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
                        QA Contribution
                    </h2>

                    {/* GRID */}
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* CARD 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-[#0a192f] p-8 rounded-2xl border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all shadow-lg hover:shadow-[#64ffda]/10"
                        >
                            <div className="text-[#64ffda] text-4xl mb-5">🛡️</div>

                            <h3 className="text-white text-2xl font-semibold mb-4">
                                Release Stability & Regression Testing
                            </h3>

                            <p className="text-gray-300 leading-relaxed text-lg">
                                Melakukan regression testing dan validasi fitur sebelum deployment
                                untuk membantu meminimalkan bug setelah release serta menjaga
                                stabilitas aplikasi web dan mobile saat digunakan user.
                            </p>
                        </motion.div>

                        {/* CARD 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#0a192f] p-8 rounded-2xl border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all shadow-lg hover:shadow-[#64ffda]/10"
                        >
                            <div className="text-[#64ffda] text-4xl mb-5">📋</div>

                            <h3 className="text-white text-2xl font-semibold mb-4">
                                Structured Bug Reporting & Faster Validation
                            </h3>

                            <p className="text-gray-300 leading-relaxed text-lg">
                                Menyusun checklist testing, dokumentasi bug, dan laporan validasi
                                yang membantu developer mempercepat proses tracking issue,
                                retesting, dan perbaikan fitur sebelum release.
                            </p>
                        </motion.div>

                        {/* CARD 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-[#0a192f] p-8 rounded-2xl border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all shadow-lg hover:shadow-[#64ffda]/10"
                        >
                            <div className="text-[#64ffda] text-4xl mb-5">🔗</div>

                            <h3 className="text-white text-2xl font-semibold mb-4">
                                API & System Integration Validation
                            </h3>

                            <p className="text-gray-300 leading-relaxed text-lg">
                                Melakukan pengujian API dan validasi integrasi Front-End,
                                Back-End, serta Database menggunakan Postman dan Hoppscotch
                                untuk memastikan sinkronisasi data berjalan akurat dan konsisten.
                            </p>
                        </motion.div>

                        {/* CARD 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-[#0a192f] p-8 rounded-2xl border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all shadow-lg hover:shadow-[#64ffda]/10"
                        >
                            <div className="text-[#64ffda] text-4xl mb-5">👥</div>

                            <h3 className="text-white text-2xl font-semibold mb-4">
                                HR System & User Workflow Validation
                            </h3>

                            <p className="text-gray-300 leading-relaxed text-lg">
                                Melakukan pengujian sistem HR dan berbagai aplikasi internal
                                bersama user dan tim lintas divisi untuk memastikan workflow,
                                approval, dan fitur operasional berjalan sesuai kebutuhan bisnis
                                dan minim revisi setelah implementasi.
                            </p>
                        </motion.div>

                    </div>
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
            <section id="project" className="bg-[#0a192f] py-20 px-6 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-[#64ffda] text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
                        Project
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