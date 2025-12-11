        {/* LEFT SIDE */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className="flex flex-col justify-center gap-4"
                                        >
                                            <h2 className="text-[17px] font-light leading-snug">
                                                Eligibility <br /> and Admission <br /> Process
                                            </h2>

                                            <div className="flex flex-col sm:flex-row gap-4 mt-2">

                                                {/* Eligibility Box */}
                                                <motion.div
                                                    whileHover={{ scale: 1.03 }}
                                                    transition={{ type: "spring", stiffness: 180 }}
                                                    className="bg-maroon-600/60 p-4 rounded-xl flex-1"
                                                >
                                                    <h3 className="font-semibold text-[14px]">Eligibility</h3>
                                                    <p className="text-[14px] mt-1">
                                                        Graduation in any discipline with a minimum aggregate of 50%.
                                                    </p>
                                                </motion.div>

                                                {/* Scholarship Box */}
                                                <motion.div
                                                    whileHover={{ scale: 1.03 }}
                                                    transition={{ type: "spring", stiffness: 180 }}
                                                    className="bg-maroon-600/60 p-4 rounded-xl flex-1"
                                                >
                                                    <h3 className="font-semibold text-[14px]">Scholarships</h3>
                                                    <p className="text-[14px] mt-1">
                                                        <span className="font-semibold">Financial Aid:</span> Up to 100% scholarships for eligible applicants.
                                                    </p>
                                                </motion.div>

                                            </div>
                                        </motion.div>

                                        {/* RIGHT SIDE */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className="flex flex-col justify-center border-l border-white/30 pl-6"
                                        >
                                            <h3 className="font-semibold text-[14px] mb-3">Admission Process</h3>

                                            <div className="space-y-3 text-[14px]">
                                                <div>
                                                    <p className="font-semibold">Step 01: Application Submission</p>
                                                    <p>Fill out the online application form</p>
                                                </div>

                                                <div>
                                                    <p className="font-semibold">Step 02: Entrance Exam</p>
                                                    <p>Submit scores from CAT/CMAT/XAT/GMAT/ATMA</p>
                                                </div>

                                                <div>
                                                    <p className="font-semibold">Step 03: Personal Interview</p>
                                                    <p>Engage in a one-on-one interview with our admissions panel</p>
                                                </div>
                                            </div>
                                        </motion.div>