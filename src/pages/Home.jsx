import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Home() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);


    const projects = [
        {
            title: "Realbugz",
            description:
                "Performed manual and automated testing using Playwright, created test scenarios, executed regression testing, and documented defects before release.",
            images: ["/images/realbugz-1.png", "/images/realbugz-2.png"],
            link: "https://github.com/kowells/realbugz-testing",
            tools: ["Playwright", "Spreadsheet", "Trello"],
        },
        {
            title: "SINKAL Public Portal",
            description:
                "Executed automated testing for a government information system, validating public workflows, forms, and critical user journeys before deployment.",
            images: ["/images/sinkal1.png", "/images/sinkal3.png", "/images/sinkal2.png"],
            link: "https://github.com/kowells/sinkal-publik-testing",
            tools: ["Playwright", "Spreadsheet", "Open Project"],
        },
        {
            title: "Fake Store REST API",
            description:
                "Designed API test cases and validated REST endpoints using Postman, including authentication, CRUD operations, response validation, and error handling.",
            images: ["/images/fakestoreapi-1.png"],
            link: "https://github.com/kowells/fakestoreapi-testing",
            tools: ["Postman", "Spreadsheet", "Trello"],
        },
        {
            title: "HRIS Leave Management",
            description:
                "Designed test cases, validated leave approval workflows, executed API testing, and documented bug reports for HRIS leave management features.",
            images: ["/images/test-case.png", "/images/bug-report.png"],
            link: "https://drive.google.com/file/d/1PyMUO3ndtIHSiUjH58SKKeM6ymCmAync/view?usp=sharing",
            tools: ["Trello", "Postman", "Spreadsheet"],
        },
        {
            title: "HRIS",
            description:
                "Human Resource Information System supporting attendance, leave, employee management, and approval workflows with end-to-end validation.",
            images: ["/images/hris-login.png", "/images/hris-login.png"],
            link: "/private",
            tools: ["Codeigniter 3", "MySQL"],
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
            "Git & GitHub",
            "Maestro",
            "Allure Report",

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
                        QA Engineer with nearly 2 years of experience ensuring web and mobile applications are stable, reliable, and ready for production.
                        Experienced in test planning, API validation, regression testing, and investigating complex business workflows.
                        Supported by a strong software development background, allowing me to identify issues from both technical and user perspectives.
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
                            href="https://drive.google.com/file/d/1tNzUWwmM-il3986DD_CsFyQdm3EOspM2/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#64ffda] text-[#0a192f] py-2.5 px-8 rounded-md text-base font-medium hover:bg-transparent hover:text-[#64ffda] border border-[#64ffda] transition-all duration-300"
                        >
                            Download CV
                        </a>
                        <a
                            href="#project"
                            className="border border-[#64ffda] text-[#64ffda] py-2.5 px-8 rounded-md text-base font-medium hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="border border-[#64ffda] text-[#64ffda] py-2.5 px-8 rounded-md text-base font-medium hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300"
                        >
                            Let's Connect
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

            {/* ===== QA HIGHLIGHTS SECTION ===== */}
            <section
                id="qa-highlight"
                className="bg-[#0a192f] py-20 px-6"
            >
                <div className="max-w-6xl mx-auto">

                    {/* TITLE */}
                    <h2 className="text-[#64ffda] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14">
                        QA Highlights
                    </h2>

                    {/* HIGHLIGHT CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">

                        {/* YEARS OF EXPERIENCE */}
                        <div className="bg-[#112240] rounded-2xl p-8 text-center border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all">
                            <h3 className="text-[#64ffda] text-5xl font-bold mb-3">
                                2
                            </h3>
                            <p className="text-gray-300 text-lg">
                                Years of Experience
                            </p>
                        </div>

                        {/* PRODUCTION RELEASES */}
                        <div className="bg-[#112240] rounded-2xl p-8 text-center border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all">
                            <h3 className="text-[#64ffda] text-5xl font-bold mb-3">
                                10+
                            </h3>
                            <p className="text-gray-300 text-lg">
                                Production Releases
                            </p>
                        </div>

                        {/* TEST CASES */}
                        <div className="bg-[#112240] rounded-2xl p-8 text-center border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all">
                            <h3 className="text-[#64ffda] text-5xl font-bold mb-3">
                                100+
                            </h3>
                            <p className="text-gray-300 text-lg">
                                Test Cases
                            </p>
                        </div>

                        {/* REST APIs */}
                        <div className="bg-[#112240] rounded-2xl p-8 text-center border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all">
                            <h3 className="text-[#64ffda] text-5xl font-bold mb-3">
                                45+
                            </h3>
                            <p className="text-gray-300 text-lg">
                                REST APIs Tested
                            </p>
                        </div>

                    </div>

                    {/* DESCRIPTION */}
                    <p className="max-w-4xl mx-auto mt-14 text-center text-gray-300 text-lg leading-relaxed">
                        Experienced in validating{" "}
                        <span className="text-white font-medium">HRIS</span>,
                        <span className="text-white font-medium"> Learning Management Systems</span>,
                        <span className="text-white font-medium"> Government Information Systems</span>,
                        and{" "}
                        <span className="text-white font-medium">
                            Internal Business Applications
                        </span>.
                    </p>

                </div>
            </section>

            {/* ===== ABOUT SECTION ===== */}
            <section
                id="about"
                className="min-h-screen flex flex-col justify-center items-center bg-[#112240] px-6 py-20"
            >
                <div className="max-w-4xl mx-auto">

                    <h2 className="text-[#64ffda] text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center relative">
                        About Me
                        <span className="block w-20 h-[3px] bg-[#64ffda] mx-auto mt-3 rounded"></span>
                    </h2>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify">
                        QA Engineer with
                        <span className="text-white font-medium"> 2+ years of experience</span>
                        {" "}in
                        <span className="text-[#64ffda]"> manual</span>,
                        <span className="text-[#64ffda]"> API</span>,
                        <span className="text-[#64ffda]"> regression</span>,
                        <span className="text-[#64ffda]"> UAT</span>, and
                        <span className="text-[#64ffda]"> automation testing</span>.
                    </p>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify mt-6">
                        Experienced in testing
                        <span className="text-[#64ffda]"> web</span> and
                        <span className="text-[#64ffda]"> mobile applications</span>
                        {" "}across
                        <span className="text-[#64ffda]"> government</span> and
                        <span className="text-[#64ffda]"> business systems</span>,
                        {" "}with a background in
                        <span className="text-white font-medium"> full-stack development</span>
                        {" "}that helps me investigate issues from both
                        <span className="text-[#64ffda]"> technical</span> and
                        <span className="text-[#64ffda]"> business perspectives</span>.
                    </p>

                </div>
            </section>

            {/* ===== EXPERIENCE SECTION ===== */}
            <section id="experience" className="bg-[#0a192f] py-20">
                <div className="max-w-6xl mx-auto px-6">

                    {/* TITLE */}
                    <h2 className="text-[#64ffda] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
                        Experience
                    </h2>

                    <div className="space-y-10">

                        {/* EXPERIENCE 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-[#112240] rounded-2xl p-8 border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all"
                        >
                            <h3 className="text-white text-2xl font-bold">
                                QA Engineer & Project Manager
                            </h3>

                            <p className="text-[#64ffda] text-lg mt-2 mb-8">
                                PT Stechoq Robotika Indonesia
                            </p>

                            <h4 className="text-white font-semibold mb-4">
                                What I Contributed
                            </h4>

                            <ul className="space-y-4 text-gray-300 leading-relaxed">
                                <li>✔ Designed <span className="text-white font-medium">100+ test cases</span> and test plans for <span className="text-white font-medium">10+ production releases</span>.</li>

                                <li>✔ Performed manual, regression, API, end-to-end, and UAT testing across complex government workflows.</li>

                                <li>✔ Investigated database synchronization issues, business logic inconsistencies, and system integration problems to identify root causes.</li>

                                <li>✔ Coordinated QA activities with developers and stakeholders to ensure every release was production-ready.</li>
                            </ul>
                        </motion.div>

                        {/* EXPERIENCE 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#112240] rounded-2xl p-8 border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all"
                        >
                            <h3 className="text-white text-2xl font-bold">
                                Full Stack Developer
                            </h3>

                            <p className="text-[#64ffda] text-lg mt-2 mb-8">
                                PT QHome Sukses Abadi
                            </p>

                            <h4 className="text-white font-semibold mb-4">
                                QA Contribution
                            </h4>

                            <ul className="space-y-4 text-gray-300 leading-relaxed">
                                <li>✔ Tested and validated HRIS, QLearning, and ASM before deployment.</li>

                                <li>✔ Validated <span className="text-white font-medium">45+ REST APIs</span> and identified <span className="text-white font-medium">15+ bugs</span> during development.</li>

                                <li>✔ Tested complex HR workflows involving multi-level approvals, leave management, attendance, and shift scheduling.</li>

                                <li>✔ Led UAT sessions, prepared QA documentation, and collaborated with users to validate business requirements.</li>
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ===== PROJECT SECTION ===== */}
            <section id="project" className="bg-[#112240] py-20 px-6 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-[#64ffda] text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
                        Projects
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                className="bg-[#0a192f] rounded-lg overflow-hidden shadow-md hover:shadow-[#64ffda]/20 cursor-pointer transition"
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

            {/* ===== QA DOCUMENTATION SECTION ===== */}
            <section
                id="qa-artifacts"
                className="bg-[#0a192f] py-20 px-6"
            >
                <div className="max-w-4xl mx-auto">

                    {/* TITLE */}
                    <h2 className="text-[#64ffda] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
                        QA Documentation
                    </h2>

                    {/* QA DOCUMENTATION CARD */}
                    <motion.a
                        href="https://drive.google.com/drive/folders/1gJjBrsFvM5svHE_yu59L9jG8wtxDzV-e?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        className="bg-[#112240] rounded-2xl p-10 border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all cursor-pointer block max-w-2xl mx-auto"
                    >
                        <div className="text-6xl mb-6 text-center">
                            📋
                        </div>

                        <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-4 text-center">
                            QA Documentation
                        </h3>

                        <p className="text-gray-300 leading-relaxed text-center text-lg">
                            Sample QA documentation including
                            <span className="text-[#64ffda]"> test cases</span>,
                            <span className="text-[#64ffda]"> bug reports</span>,
                            <span className="text-[#64ffda]"> test plans</span>, and
                            <span className="text-[#64ffda]"> test execution reports</span>.
                        </p>

                        <div className="text-[#64ffda] mt-8 font-medium text-center text-lg">
                            View QA Samples →
                        </div>
                    </motion.a>

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
            {/* ===== CONTACT SECTION ===== */}
            <section
                id="contact"
                className="bg-[#0a192f] py-24 px-6"
            >
                <div className="max-w-5xl mx-auto text-center">

                    {/* TITLE */}
                    <p className="text-[#64ffda] text-sm sm:text-base font-medium tracking-widest uppercase mb-4">
                        Get In Touch
                    </p>

                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Let's Work Together
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
                        Looking for a QA Engineer who cares about software quality,
                        reliable systems, and a great user experience?
                        Feel free to reach out.
                    </p>

                    {/* CONTACT CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* EMAIL */}
                        <motion.a
                            href="mailto:ridwand117@gmail.com"
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.2 }}
                            className="group bg-[#112240] rounded-2xl p-7 border border-[#64ffda]/10 hover:border-[#64ffda]/50 transition-all"
                        >
                            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[#64ffda]/10 flex items-center justify-center text-2xl group-hover:bg-[#64ffda] group-hover:text-[#0a192f] transition-all">
                                ✉
                            </div>

                            <h3 className="text-white text-xl font-semibold mb-2">
                                Email
                            </h3>

                            <p className="text-gray-400 text-sm break-all">
                                ridwand117@gmail.com
                            </p>

                            <div className="text-[#64ffda] mt-5 text-sm font-medium">
                                Send Email →
                            </div>
                        </motion.a>


                        {/* WHATSAPP */}
                        <motion.a
                            href="https://wa.me/6282139922566"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.2 }}
                            className="group bg-[#112240] rounded-2xl p-7 border border-[#64ffda]/10 hover:border-[#64ffda]/50 transition-all"
                        >
                            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[#64ffda]/10 flex items-center justify-center text-2xl group-hover:bg-[#64ffda] group-hover:text-[#0a192f] transition-all">
                                ☎
                            </div>

                            <h3 className="text-white text-xl font-semibold mb-2">
                                WhatsApp
                            </h3>

                            <p className="text-gray-400 text-sm">
                                0821-3992-2566
                            </p>

                            <div className="text-[#64ffda] mt-5 text-sm font-medium">
                                Chat on WhatsApp →
                            </div>
                        </motion.a>


                        {/* LINKEDIN */}
                        <motion.a
                            href="https://www.linkedin.com/in/ridwan-darmawan-544aa0234/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.2 }}
                            className="group bg-[#112240] rounded-2xl p-7 border border-[#64ffda]/10 hover:border-[#64ffda]/50 transition-all"
                        >
                            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[#64ffda]/10 flex items-center justify-center text-2xl group-hover:bg-[#64ffda] group-hover:text-[#0a192f] transition-all">
                                in
                            </div>

                            <h3 className="text-white text-xl font-semibold mb-2">
                                LinkedIn
                            </h3>

                            <p className="text-gray-400 text-sm">
                                Ridwan Darmawan
                            </p>

                            <div className="text-[#64ffda] mt-5 text-sm font-medium">
                                View Profile →
                            </div>
                        </motion.a>

                    </div>

                    {/* FOOTER CTA */}
                    <div className="mt-14 pt-8 border-t border-white/10">
                        <p className="text-gray-500 text-sm">
                            Open to QA Engineer opportunities and professional collaborations.
                        </p>
                    </div>

                </div>
            </section>
        </main>
    );
}