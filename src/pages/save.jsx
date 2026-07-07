            {/* ===== QA ARTIFACTS SECTION ===== */}
            
            <section
                id="qa-artifacts"
                className="bg-[#0a192f] py-20 px-6"
            >
                <div className="max-w-6xl mx-auto">

                    {/* TITLE */}
                    <h2 className="text-[#64ffda] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
                        QA Artifacts
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Test Plan */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-[#112240] rounded-2xl p-8 border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all cursor-pointer"
                        >
                            <div className="text-5xl mb-6">📄</div>

                            <h3 className="text-white text-2xl font-semibold mb-4">
                                Test Plan
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Sample test planning document used to define testing scope and release strategy.
                            </p>
                        </motion.div>

                        {/* Test Cases */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-[#112240] rounded-2xl p-8 border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all cursor-pointer"
                        >
                            <div className="text-5xl mb-6">📄</div>

                            <h3 className="text-white text-2xl font-semibold mb-4">
                                Test Cases
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Structured test cases covering positive, negative, and edge-case scenarios.
                            </p>
                        </motion.div>

                        {/* Bug Report */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-[#112240] rounded-2xl p-8 border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all cursor-pointer"
                        >
                            <div className="text-5xl mb-6">📄</div>

                            <h3 className="text-white text-2xl font-semibold mb-4">
                                Bug Report
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Example bug report with reproduction steps, expected results, actual results, and severity classification.
                            </p>
                        </motion.div>

                        {/* API Testing */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-[#112240] rounded-2xl p-8 border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all cursor-pointer"
                        >
                            <div className="text-5xl mb-6">📄</div>

                            <h3 className="text-white text-2xl font-semibold mb-4">
                                API Testing
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Example API validation using Postman, including request, response, and status verification.
                            </p>
                        </motion.div>

                        {/* UAT Checklist */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-[#112240] rounded-2xl p-8 border border-[#64ffda]/10 hover:border-[#64ffda]/40 transition-all cursor-pointer md:col-span-2 lg:col-span-1"
                        >
                            <div className="text-5xl mb-6">📄</div>

                            <h3 className="text-white text-2xl font-semibold mb-4">
                                UAT Checklist
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                User Acceptance Testing checklist used before production deployment.
                            </p>
                        </motion.div>

                    </div>

                </div>
            </section>
            