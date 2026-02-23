import React from 'react';
import { motion } from 'framer-motion';

const volunteerRoles = [
    {
        title: "IBM Impact Volunteer",
        org: "IBM",
        duration: "Sep 2025 - Present",
        category: "Social Services",
        description: "Empowering neurodiverse students at the Spastics Society of Karnataka through digital literacy and life skills.",
        highlights: [
            "Gamified 'Scams Awareness' education using role-play to avoid online frauds.",
            "Redesigned the 'Internet Security & Email' curriculum with accessible hands-on activities.",
            "Mentored students one-on-one to build digital confidence.",
            "Participated in an IBM environmental sustainability Tree Plantation Drive."
        ],
        icon: "fa-hands-helping"
    },
    {
        title: "Community Volunteer",
        org: "Mallu Programmers",
        duration: "Jan 2023 - Jun 2025",
        category: "Education",
        description: "Mentoring students on career paths and supporting aspiring developers with resources and insights to transition into tech.",
        highlights: [],
        icon: "fa-users"
    },
    {
        title: "Innovator & Volunteer",
        org: "IEDC MAC & Novian Hub",
        duration: "Jul 2021 - May 2023",
        category: "Science and Technology",
        description: "Organized Android Development workshops and fostered a culture of problem-solving through hackathons.",
        highlights: [
            "Bridged the gap between students and industry opportunities.",
            "Supported software development initiatives within the IEDC community."
        ],
        icon: "fa-lightbulb"
    },
    {
        title: "AOSP Contributor",
        org: "XDA Developers",
        duration: "Apr 2017 - Sep 2020",
        category: "Science and Technology",
        description: "Actively contributed to Android device communities, collaborating with developers to enhance custom ROMs and troubleshoot issues.",
        highlights: [
            "Tested and reviewed custom AOSP/ported ROMs for stability and security.",
            "Patched and modified Android/PC games, optimizing features.",
            "Worked extensively with rooting, bootloader unlocking, and performance tuning."
        ],
        icon: "fa-android"
    },
    {
        title: "Student Volunteer",
        org: "National Service Scheme (NSS)",
        duration: "Dec 2020 - Mar 2023",
        category: "Social Services",
        description: "Completed 240 hours of community service, including special camping programs and organizing local Covid-19 vaccination surveys.",
        highlights: [],
        icon: "fa-seedling"
    },
    {
        title: "Volunteer & Lead",
        org: "Mujahid Students Movement / IRCS",
        duration: "Jan 2014 - Dec 2022",
        category: "Education & Social Services",
        description: "Led unit-level initiatives, organized fundraising programs, and coordinated student leadership camps focused on ethics and civic responsibility.",
        highlights: [],
        icon: "fa-heart"
    }
];

const Volunteering = () => {
    return (
        <section id="volunteering" className="py-24 relative overflow-hidden bg-white dark:bg-black">
            {/* Decals */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-roseTaupe/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title mb-4">🤝 Volunteering & Impact</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Giving back to the community through education, open-source, and social service.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {volunteerRoles.map((role, index) => (
                        <motion.div
                            key={index}
                            className="card group hover:border-mikadoYellow/30 flex flex-col relative z-10 bg-white/50 dark:bg-cardBgDark/50 backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-roseTaupe group-hover:text-mikadoYellow transition-colors shadow-sm">
                                    <i className={`fas ${role.icon} text-xl`}></i>
                                </div>
                                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700">
                                    {role.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-1 text-numberText dark:text-gray-100">
                                {role.title}
                            </h3>
                            <p className="font-medium text-mikadoYellow mb-3">{role.org}</p>

                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
                                <i className="far fa-clock"></i> {role.duration}
                            </p>

                            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
                                {role.description}
                            </p>

                            {role.highlights.length > 0 && (
                                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mt-auto border-t border-gray-100 dark:border-gray-800/60 pt-4">
                                    {role.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <i className="fas fa-check text-mikadoYellow/70 mt-1 shrink-0 text-xs"></i>
                                            <span className="leading-snug">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Volunteering;
