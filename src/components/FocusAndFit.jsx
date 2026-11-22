import { motion } from 'framer-motion';

const focusAreas = [
    { name: "Enterprise Automation", status: "Production" },
    { name: "Mainframe Modernization", status: "Production" },
    { name: "Applied AI", status: "Learning" },
    { name: "Data Quality Engineering", status: "Production" },
    { name: "MCP & Agentic Workflows", status: "Exploring" },
    { name: "Observability & Operational Intelligence", status: "Active" }
];

const opportunityAreas = [
    "Enterprise Automation",
    "Platform Engineering",
    "DataOps",
    "Mainframe Modernization",
    "Applied AI",
    "Solutions Engineering"
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
                className="section-title text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Current Focus
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <motion.div
                    className="card lg:col-span-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-xl font-bold mb-5 text-numberText dark:text-white">Areas of focus</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {focusAreas.map((area) => (
                            <div key={area.name} className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 py-3 dark:bg-gray-900/70">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{area.name}</span>
                                <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                                    area.status === 'Production'
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300'
                                        : area.status === 'Active'
                                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'
                                            : area.status === 'Learning'
                                                ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'
                                                : 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300'
                                }`}>
                                    {area.status}
                                </span>
                            </div>
                        ))}
                    </div>
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

                <motion.aside
                    className="card border-mikadoYellow/30 bg-mikadoYellow/5"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-xl font-bold mb-5 text-numberText dark:text-white">Looking For Opportunities In</h3>
                    <ul className="space-y-3">
                        {opportunityAreas.map((area) => (
                            <li key={area} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                <i className="fas fa-check text-mikadoYellow mt-1" aria-hidden="true"></i>
                                <span>{area}</span>
                            </li>
                        ))}
                    </ul>
                </motion.aside>
            </div>

            <div id="resume" className="relative overflow-hidden rounded-3xl bg-numberText px-6 py-12 text-center text-white dark:bg-cardBgDark sm:px-10 mt-10">
                <div className="absolute -right-12 -top-20 h-56 w-56 rounded-full bg-mikadoYellow/10 blur-3xl" aria-hidden="true"></div>
                <h3 className="relative text-2xl md:text-3xl font-bold mb-3">
                    Interested in Enterprise Automation, Mainframe Modernization, DataOps, or Applied AI?
                </h3>
                <p className="relative text-gray-200 mb-7">
                    Let’s connect about evidence-driven engineering and enterprise platforms.
                </p>
                <div className="relative flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                    <a
                        href="/docs/Muzammil_FDE_Resume_2026-ATS.pdf"
                        download="Muzammil_FDE_Resume_2026-ATS.pdf"
                        className="btn-primary inline-flex items-center justify-center gap-2"
                    >
                        <i className="fas fa-file-download" aria-hidden="true"></i> Download Resume
                    </a>
                    <a href="https://github.com/muzammil-13" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2 border-white/70 text-white hover:bg-white/10">
                        <i className="fab fa-github" aria-hidden="true"></i> View GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/muzammilipm" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2 border-white/70 text-white hover:bg-white/10">
                        <i className="fab fa-linkedin" aria-hidden="true"></i> Connect on LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default FocusAndFit;
