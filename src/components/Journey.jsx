import { motion } from 'framer-motion';

const timelineEvents = [
    {
        year: "2023",
        title: "BCA",
        content: "Completed a Bachelor of Computer Applications and established a foundation in software and IT."
    },
    {
        year: "2024–2025",
        title: "Family Business Operations & IT",
        content: "Supported ERP invoicing, inventory workflows, digital payment tracking, hardware, and local networking."
    },
    {
        year: "2025",
        title: "IBM India CIC",
        content: "Joined IBM India CIC as a Technical Representative Intern and began contributing to enterprise healthcare claims operations and technology."
    },
    {
        year: "2026",
        title: "DataOps Analyst",
        content: "Build and support data validation, reconciliation, automation, and production workflows in healthcare claims."
    }
];

const Journey = () => (
    <div id="career-journey" className="py-14 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h3
                className="section-title text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Career Journey
            </motion.h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                From foundational study and family business operations to enterprise technology and DataOps.
            </p>

            <div className="relative max-w-5xl mx-auto py-4 timeline">
                {timelineEvents.map((event, index) => {
                    const isRight = index % 2 === 1;
                    return (
                        <motion.article
                            key={`${event.year}-${event.title}`}
                            className={`relative mb-7 w-full box-border pl-[70px] pr-2 md:w-1/2 md:pl-10 md:pr-10 ${
                                isRight ? 'md:left-1/2' : 'md:left-0 md:text-right'
                            }`}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.4, delay: (index % 2) * 0.06 }}
                        >
                            <span
                                className={`absolute left-[30px] top-5 z-10 h-5 w-5 rounded-full border-4 border-white bg-mikadoYellow shadow-sm dark:border-black md:left-auto ${
                                    isRight ? 'md:left-[-10px]' : 'md:right-[-10px]'
                                }`}
                                aria-hidden="true"
                            ></span>
                            <div className="card text-left hover:border-mikadoYellow/40">
                                <span className="inline-flex rounded-full bg-mikadoYellow/15 px-3 py-1 text-sm font-bold text-roseTaupe dark:text-mikadoYellow">
                                    {event.year}
                                </span>
                                <h3 className="mt-3 text-lg font-bold text-numberText dark:text-white">{event.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{event.content}</p>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </div>
    </div>
);

export default Journey;
