import { motion } from 'framer-motion';

const focusAreas = [
    "Enterprise Automation",
    "Mainframe Modernization",
    "Applied AI",
    "MCP concepts and implementation patterns",
    "Agentic workflows"
];

const strengths = [
    "Production support exposure in healthcare claims operations",
    "Experience across mainframe systems and modern APIs and data platforms",
    "A DataOps mindset grounded in reliable, supportable workflows",
    "Validation-first engineering, reconciliation, and business-rule checks",
    "Human-led, AI-assisted engineering with review and verification"
];

const FocusAndFit = () => (
    <section id="current-focus" className="py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
                className="section-title text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Current Focus & Working Approach
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <motion.div
                    className="card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-xl font-bold mb-5 text-numberText dark:text-white">What I’m focusing on</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                        {focusAreas.map((area) => (
                            <li key={area} className="flex items-start gap-3">
                                <i className="fas fa-arrow-right text-mikadoYellow mt-1"></i>
                                <span>{area}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-5 text-sm text-gray-500 dark:text-gray-500">
                        MCP and agentic workflows are active learning areas; I’m building familiarity rather than presenting them as production expertise.
                    </p>
                </motion.div>

                <motion.div
                    id="why-work-with-me"
                    className="card"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-xl font-bold mb-5 text-numberText dark:text-white">Why work with me</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                        {strengths.map((strength) => (
                            <li key={strength} className="flex items-start gap-3">
                                <i className="fas fa-check text-mikadoYellow mt-1"></i>
                                <span>{strength}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            <div id="resume" className="card max-w-5xl mx-auto mt-8 text-center">
                <h3 className="text-xl font-bold mb-2 text-numberText dark:text-white">Resume</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5">
                    Review my experience in DataOps, enterprise automation, mainframe operations, and data validation.
                </p>
                <a
                    href="/docs/Muzammil_FDE_Resume_2026-ATS.pdf"
                    download="Muzammil_FDE_Resume_2026-ATS.pdf"
                    className="btn-primary inline-flex items-center gap-2"
                >
                    <i className="fas fa-file-download"></i> Download my resume
                </a>
            </div>
        </div>
    </section>
);

export default FocusAndFit;
