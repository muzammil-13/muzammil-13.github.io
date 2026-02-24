import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
    {
        year: "2015–2020",
        title: "⚙️ The Curious Tinkerer",
        content: "Before the degrees and dev tools, I was just a tech-obsessed teenager. Flashing custom ROMs, fixing desktops, troubleshooting phones, and diving deep into docs, YouTube tutorials, and XDA forums—that was my bootcamp. Linux terminals, recovery modes, and optimization tricks were my playground."
    },
    {
        year: "2020–2023",
        title: "🎓 The Degree & Discovery",
        content: (
            <>
                <p className="mb-2">I pursued my <strong>Bachelor of Computer Applications</strong> through storms—literally.</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>📚 First year: COVID lockdowns turned classrooms into browser tabs.</li>
                    <li>🌊 Second year: flooded with academic pressure—exams, lab records, and uncertainty.</li>
                    <li>💻 Third year: I got my first laptop—my gateway to exploring Linux admin, Android dev, and cloud computing.</li>
                </ul>
            </>
        )
    },
    {
        year: "2023",
        title: "🐍 The Foundation Year",
        content: "I kicked things off with a Python Full Stack internship—my first structured experience building both the frontend and backend of real-world apps."
    },
    {
        year: "2024",
        title: "⚡ The Launchpad",
        content: (
            <>
                <p className="mb-2">I participated in <strong>IEEE Launchpad Kerala</strong>, where I learned:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Frontend fundamentals</li>
                    <li>CTF Hackathon & Problem-solving in Coding</li>
                    <li>Core engineering principles & Communication</li>
                </ul>
            </>
        )
    },
    {
        year: "2024",
        title: "☁️ Cloud & Code",
        content: "Later that year, I earned 5+ skill badges via the Google Cloud PCA Cohort, gaining practical experience with GCP services and infrastructure basics."
    },
    {
        year: "2024",
        title: "💼 Corporate Readiness",
        content: "The EY GDS NextGen Emp Program helped me refine my MERN stack capabilities while building real teamwork and soft skills that are critical in the workplace."
    },
    {
        year: "2025",
        title: "🚀 Sharpening the Blade",
        content: "I completed 89% of The Odin Project's Web Foundations, solidifying my understanding of full-stack architecture through project-based learning."
    },
    {
        year: "2025–Present",
        title: "🧠 The SaaS Mindset",
        content: (
            <>
                <p className="mb-2">Now I'm part of <strong>Micro SaaSkool</strong>, focusing on:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>MVP building & SaaS product thinking</li>
                    <li>Iterating with user feedback</li>
                    <li>Laying the groundwork for a meaningful tech product</li>
                </ul>
            </>
        )
    }
];

const Journey = () => {
    return (
        <section id="journey" className="py-20 bg-gray-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="section-title text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    📚 My Learning Journey
                </motion.h2>
                <motion.p
                    className="text-center text-gray-600 dark:text-gray-400 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    The path hasn't been linear—but it's been intentional.
                </motion.p>

                <div className="relative max-w-4xl mx-auto py-10 timeline">
                    {timelineEvents.map((event, index) => {
                        const isEven = index % 2 !== 0; // 0-indexed, so 0 is "odd" visually
                        return (
                            <motion.div
                                key={index}
                                className={`w-full md:w-1/2 mb-8 relative pl-[70px] pr-5 md:pl-[40px] md:pr-[40px] box-border ${isEven ? 'md:left-1/2' : 'md:left-0 text-left md:text-right md:pl-5 md:pr-10'
                                    }`}
                                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Timeline Dot */}
                                <div
                                    className={`absolute w-5 h-5 rounded-full bg-roseTaupe top-[15px] left-[30px] md:top-[15px] ${isEven ? 'md:left-[-10px]' : 'md:right-[-10px] md:left-auto'
                                        }`}
                                ></div>

                                {/* Timeline Content */}
                                <div className="card w-full">
                                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 block object-left">
                                        {event.year}
                                    </span>
                                    <h3 className="text-xl font-bold text-roseTaupe dark:text-gray-200 mb-3">
                                        {event.title}
                                    </h3>
                                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                                        {event.content}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Journey;
