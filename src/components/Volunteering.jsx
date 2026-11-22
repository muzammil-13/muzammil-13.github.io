import { useState } from 'react';
import { motion } from 'framer-motion';

const volunteerRoles = [
    {
        title: "IBM Impact Volunteer",
        org: "IBM",
        duration: "Sep 2025 – Present",
        category: "Digital Literacy & Education",
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
        title: "GCP Member",
        org: "Google Cloud Skills Boost",
        duration: "Jan 2023 - Present",
        category: "Science & Technology",
        description: "Active member continuously upskilling and participating in Google Cloud initiatives.",
        highlights: [],
        icon: "fa-cloud"
    },
    {
        title: "GDG Member",
        org: "Google Developers Group",
        duration: "Jul 2021 - Present",
        category: "Science & Technology",
        description: "Long-standing member of the Google Developers Group, participating in various community tech events.",
        highlights: [],
        icon: "fa-code"
    },
    {
        title: "H2S Innovator",
        org: "Hack2skill",
        duration: "2024",
        category: "Science & Technology",
        description: "Participated in the AI for Impact 2024 APAC Hackathon, focusing on building socially impactful AI solutions.",
        highlights: [],
        icon: "fa-robot"
    },
    {
        title: "muLearner",
        org: "MuLearn Foundation",
        duration: "Apr 2023 - Jun 2025",
        category: "Science & Technology",
        description: "Active participant in the MuLearn community, contributing to various interest groups and hackathons.",
        highlights: [
            "Certified RAG LLM Bot Developer (Pathway x GTech).",
            "Top #19 in Launchpad 2024 (IEEE x KDISC x GTech).",
            "Active in Web Dev, Cloud & DevOps, and Product Management groups."
        ],
        icon: "fa-brain"
    },
    {
        title: "Community Volunteer",
        org: "Mallu Programmers",
        duration: "Jan 2023 - Jun 2025",
        category: "Education",
        description: "Mentoring students on career paths and supporting aspiring developers with resources and insights to transition into tech.",
        highlights: [
            "Mentoring 10+ students on career paths and upskilling."
        ],
        icon: "fa-users"
    },
    {
        title: "Innovator",
        org: "IEDC MAC",
        duration: "Jan 2022 - May 2023",
        category: "Science & Technology",
        description: "Fostered a culture of innovation and bridged the gap between students and industry within the college community.",
        highlights: [
            "Encouraged participation in industry summits and hackathons.",
            "Supported software development initiatives within the IEDC community."
        ],
        icon: "fa-lightbulb"
    },
    {
        title: "Community Development Volunteer",
        org: "Novian Hub",
        duration: "Jul 2021 - May 2023",
        category: "Education",
        description: "Assisted in organizing tech bootcamps and mentoring students in app development.",
        highlights: [
            "Mentored Android Development Workshops.",
            "Actively contributed to hackathons and innovation drives."
        ],
        icon: "fa-laptop-code"
    },
    {
        title: "AOSP Contributor",
        org: "XDA Developers",
        duration: "Apr 2017 - Sep 2020",
        category: "Science & Technology",
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
        highlights: [
            "Planted a tree each day during the Special Camping Programme."
        ],
        icon: "fa-seedling"
    },
    {
        title: "Student Lead",
        org: "Indian Red Cross Society (IRCS)",
        duration: "Jun 2014 - Mar 2015",
        category: "Social Services",
        description: "Led Junior Red Cross initiatives, fostering social responsibility among students.",
        highlights: [
            "Organized fundraising programs for charitable causes.",
            "Coordinated donation drives for a nearby old age home."
        ],
        icon: "fa-medkit"
    },
    {
        title: "Volunteer & Lead",
        org: "Mujahid Students Movement (MSM)",
        duration: "Jan 2014 - Dec 2022",
        category: "Education",
        description: "Led unit-level initiatives (Unit Secretary & District Executive Member), coordinated student engagement, and managed event execution.",
        highlights: [
            "Organized camps, student leadership programs, and ethics workshops.",
            "Engaged in interfaith discussions and social awareness initiatives."
        ],
        icon: "fa-heart"
    }
];

const impactActivities = [
    { title: "Online Scam Awareness Workshop", detail: "Interactive scam awareness education using guided scenarios." },
    { title: "Internet Security & Email Fundamentals", detail: "Accessible, hands-on guidance for safe internet and email use." },
    { title: "Excel Basics Training", detail: "Practical spreadsheet exercises, formulas, and charts." },
    { title: "One-on-One Student Mentoring", detail: "Individual support to build confidence with digital tools." },
    { title: "Digital Literacy Programs", detail: "Inclusive technology education with Spastics Society of Karnataka." }
];

const excelTopics = [
    "What is Excel",
    "Rows, columns, and cells",
    "Cell references",
    "Formatting",
    "SUM",
    "AVERAGE",
    "MAX",
    "MIN",
    "Charts",
    "Practice exercises"
];

const Volunteering = () => {
    const [showAll, setShowAll] = useState(false);
    const featuredRole = volunteerRoles[0];
    const otherRoles = volunteerRoles.slice(1);
    const visibleRoles = showAll ? otherRoles : otherRoles.slice(0, 2);

    return (
        <div id="community-impact" className="py-14 relative overflow-hidden bg-white dark:bg-black scroll-mt-20">
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
                    <h3 className="section-title mb-4">Community Impact</h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Beyond engineering, I contribute to technology accessibility and digital literacy initiatives through IBM Impact volunteering programs. I enjoy simplifying complex technical concepts and creating inclusive learning experiences that help individuals build confidence with technology.
                    </p>
                </motion.div>

                <article className="card max-w-5xl mx-auto mb-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                        <div>
                            <p className="text-sm font-semibold text-roseTaupe dark:text-mikadoYellow">{featuredRole.org} · {featuredRole.duration}</p>
                            <h3 className="text-2xl font-bold text-numberText dark:text-white mt-1">{featuredRole.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">Organization: Spastics Society of Karnataka</p>
                        </div>
                        <span className="badge self-start">{featuredRole.category}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        Participate in IBM Impact initiatives focused on digital literacy, internet safety, and technology education for neurodiverse students.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-numberText dark:text-gray-200 mb-3">Learning experiences designed and delivered</h4>
                            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                                <li className="flex items-start gap-2">
                                    <i className="fas fa-check text-mikadoYellow mt-1"></i>
                                    <span>Designed and delivered a gamified Online Scam Awareness workshop using role-play to help students identify and avoid common digital fraud scenarios.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <i className="fas fa-check text-mikadoYellow mt-1"></i>
                                    <span>Redesigned Internet Security &amp; Email Fundamentals materials with accessibility-focused, hands-on teaching methods.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <i className="fas fa-check text-mikadoYellow mt-1"></i>
                                    <span>Developed and delivered an Excel Basics training session with guided practice, interactive spreadsheet exercises, and simple charting activities to improve engagement and practical learning outcomes.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <i className="fas fa-check text-mikadoYellow mt-1"></i>
                                    <span>Provided one-on-one mentoring to help students build confidence using digital tools and technology.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <i className="fas fa-check text-mikadoYellow mt-1"></i>
                                    <span>Participated in IBM community service and environmental volunteering initiatives.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-numberText dark:text-gray-200 mb-3">Excel Basics topics</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                                {excelTopics.map((topic) => (
                                    <li key={topic} className="rounded-lg bg-gray-50 dark:bg-gray-800/70 px-3 py-2">{topic}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-5">
                                {["Leadership", "Technical communication", "Accessibility-focused design", "Technical education", "Mentorship", "Community impact"].map((skill) => (
                                    <span key={skill} className="badge">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>

                <section aria-labelledby="impact-timeline-title" className="max-w-5xl mx-auto mb-12">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
                        <div>
                            <h3 id="impact-timeline-title" className="text-xl font-bold text-numberText dark:text-white">IBM Impact Volunteer timeline</h3>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Spastics Society of Karnataka · Sep 2025 – Present</p>
                        </div>
                        <span className="badge self-start sm:self-auto">Digital literacy &amp; education</span>
                    </div>

                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {impactActivities.map((activity, index) => (
                            <motion.li
                                key={activity.title}
                                className="card relative overflow-hidden p-5"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.35, delay: index * 0.05 }}
                            >
                                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-mikadoYellow/15 text-sm font-bold text-roseTaupe dark:text-mikadoYellow">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h4 className="font-bold text-numberText dark:text-white">{activity.title}</h4>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{activity.detail}</p>
                            </motion.li>
                        ))}
                    </ol>
                </section>

                <section aria-labelledby="volunteer-gallery-title" className="max-w-5xl mx-auto mb-12">
                    <h3 id="volunteer-gallery-title" className="text-xl font-bold text-numberText dark:text-white mb-5">Workshop gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {["Digital literacy workshop", "Guided Excel practice", "Student mentoring"].map((label) => (
                            <div
                                key={label}
                                role="img"
                                aria-label={`${label} photo placeholder`}
                                className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gray-300 bg-gray-50/70 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-400"
                            >
                                <i className="fas fa-image text-2xl text-roseTaupe/70 dark:text-gray-500" aria-hidden="true"></i>
                                <span>{label}</span>
                                <span className="text-xs">Photo placeholder</span>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="max-w-5xl mx-auto mb-12">
                    <h3 className="text-xl font-bold text-numberText dark:text-white mb-5">Volunteer achievements</h3>
                    <div className="flex flex-wrap gap-3">
                        {["Digital Literacy", "Online Safety", "Excel Basics", "Student Mentoring", "Accessible Learning"].map((achievement) => (
                            <span key={achievement} className="badge">
                                <i className="fas fa-award" aria-hidden="true"></i> {achievement}
                            </span>
                        ))}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-center text-numberText dark:text-white mb-6">Other community involvement</h3>
                <div id="volunteering-activities" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleRoles.map((role, index) => (
                        <motion.div
                            key={`${role.org}-${role.title}`}
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
                <div className="text-center mt-8">
                    <button
                        type="button"
                        className="btn-secondary"
                        aria-expanded={showAll}
                        aria-controls="volunteering-activities"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? 'Show less' : 'Read more'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Volunteering;
