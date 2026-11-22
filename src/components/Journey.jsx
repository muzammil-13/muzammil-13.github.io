import { useState } from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
    {
        year: "2025–Present",
        title: "Enterprise DataOps & modernization",
        content: "At IBM, I work in healthcare claims data operations, with a focus on Python automation, data validation and reconciliation, production support, and z/OS mainframe modernization."
    },
    {
        year: "Sep 2025–Present",
        title: "IBM Impact Volunteer",
        content: "Contribute to digital literacy, internet safety, and technology education for neurodiverse students through accessible workshops, practical learning materials, and one-on-one mentoring."
    },
    {
        year: "2024–2025",
        title: "Business operations & IT",
        content: "Worked across business operations and IT in a family-run business, supporting ERP invoicing, inventory workflows, payment tracking, hardware, and local networking."
    },
    {
        year: "2025",
        title: "Project-based learning",
        content: "Continued structured web development study through The Odin Project and explored MVP development, product thinking, and iteration through a learning community."
    },
    {
        year: "2024",
        title: "IEEE Launchpad Kerala",
        content: "Participated in IEEE Launchpad Kerala, developing problem-solving, communication, and engineering fundamentals through technical activities."
    },
    {
        year: "2024",
        title: "Google Cloud learning",
        content: "Completed Google Cloud cohort learning and earned skill badges while building familiarity with cloud services."
    },
    {
        year: "2024",
        title: "EY GDS NextGen Employability Program",
        content: "Built teamwork and workplace communication skills while continuing to develop technical foundations."
    },
    {
        year: "2023",
        title: "Python full-stack internship",
        content: "Gained structured experience building frontend and backend applications during a Python full-stack internship."
    },
    {
        year: "2020–2023",
        title: "Education & technical foundation",
        content: "Completed a Bachelor of Computer Applications and developed a foundation in software, programming, and IT."
    },
    {
        year: "2015–2020",
        title: "Early technical exploration",
        content: "Learned through hands-on device troubleshooting and Android communities, developing an early interest in how software and systems work."
    }
];

const Journey = () => {
    const [showAll, setShowAll] = useState(false);

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
                    Career Journey
                </motion.h2>
                <motion.p
                    className="text-center text-gray-600 dark:text-gray-400 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    From business operations and IT to enterprise data operations and mainframe modernization.
                </motion.p>

                <div id="journey-timeline" className="relative max-w-4xl mx-auto py-10 timeline">
                    {timelineEvents.slice(0, showAll ? timelineEvents.length : 3).map((event, index) => {
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
                <div className="text-center">
                    <button
                        type="button"
                        className="btn-secondary"
                        aria-expanded={showAll}
                        aria-controls="journey-timeline"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? 'Show less' : 'Read more'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Journey;
