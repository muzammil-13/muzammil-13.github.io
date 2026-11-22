import { motion } from 'framer-motion';

const projects = [
    {
        id: "zentinel-agent",
        title: "Zentinel Agent",
        summary: "Mainframe job monitoring modernized from TN3270/GETRC interactions to z/OSMF REST APIs.",
        challenge: "The existing monitoring workflow relied on a TN3270/GETRC architecture and took 2–4 minutes per monitoring cycle. Modernization needed to make monitoring faster while preserving expected outputs.",
        architecture: "Replaced the TN3270/GETRC interaction path with z/OSMF REST APIs. The resulting workflow connects job monitoring with spool analysis, anomaly detection, and notifications.",
        implementation: "Built and validated monitoring, spool analysis, anomaly detection, and notification workflows. Supported z/OSMF capability implementation in Devin UEP.",
        technologies: ["z/OSMF REST APIs", "z/OS", "TN3270 / GETRC", "Mainframe batch operations"],
        results: [
            "Reduced monitoring cycle time from 2–4 minutes to 2–15 seconds.",
            "Achieved 7/7 output parity.",
            "Completed 10+ validation runs and validated 137+ mainframe jobs.",
            "Received leadership recognition."
        ],
        lessons: "Modernizing an established operations workflow requires more than replacing an interface: output parity and repeatable validation are essential to building confidence in the new path."
    },
    {
        id: "operational-data-validator",
        title: "Operational Data Validator",
        summary: "A productionized, YAML-driven validation framework for healthcare claims data.",
        challenge: "Healthcare claims validation requires applying business rules and comparing operational data consistently. The task was to turn those checks into reusable automation with clear outcomes.",
        architecture: "Validation rules are defined in YAML and evaluated by a Python framework. Results use explicit PASS, WARN, and FAIL states to communicate validation outcomes.",
        implementation: "Created automated healthcare claims validation and a Cals-versus-Python month-to-date data validator, using rule-driven checks to compare and assess operational data.",
        technologies: ["Python", "YAML", "Healthcare claims data", "Cals vs Python MTD validation"],
        results: [
            "Delivered a productionized, configuration-driven validation framework.",
            "Standardized validation outcomes as PASS, WARN, or FAIL.",
            "Automated healthcare claims checks, including Cals-versus-Python month-to-date validation."
        ],
        lessons: "Keeping validation rules explicit and outcomes readable helps make checks easier to review, operate, and adapt as business requirements change."
    },
    {
        id: "teradata-snowflake-validation",
        title: "Teradata → Snowflake Migration Validation",
        summary: "A validation-first case study in reconciling migrated data and verifying business rules.",
        challenge: "Establish confidence in migrated operational outputs while maintaining the business rules and reporting expectations that stakeholders rely on.",
        approach: "Compared Teradata and Snowflake outputs, combining reconciliation checks with business-rule verification and stakeholder review.",
        validationStrategy: "Use reconciliation testing to measure output parity, verify business rules, and review results with stakeholders before relying on migrated outputs.",
        technologies: ["Teradata", "Snowflake", "SQL", "Data Reconciliation"],
        results: [
            "Achieved 98% output parity.",
            "Verified business rules as part of migration validation.",
            "Applied reconciliation testing and stakeholder review."
        ],
        lessons: "A parity percentage is one signal, not the whole acceptance decision. Business-rule checks and stakeholder review help put reconciliation results in operational context.",
        kpis: [
            { value: "98%", label: "Output parity" },
            { value: "Rules", label: "Business-rule verification" },
            { value: "Reconciled", label: "Reconciliation testing" },
            { value: "Reviewed", label: "Stakeholder review" }
        ]
    }
];

const ProjectDetail = ({ label, children }) => (
    <div>
        <h4 className="font-semibold text-numberText dark:text-gray-200 mb-1">{label}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{children}</p>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-mikadoYellow/5 rounded-full blur-3xl -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="section-title text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Selected Enterprise Work
                </motion.h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
                    Case studies in mainframe modernization and validation-first data operations.
                </p>

                <div className="space-y-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.article
                            id={project.id}
                            key={project.id}
                            className="card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-2xl font-bold text-numberText dark:text-white mb-2">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">{project.summary}</p>

                            {project.kpis && (
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                                    {project.kpis.map((kpi) => (
                                        <div key={kpi.label} className="rounded-xl border border-mikadoYellow/20 bg-mikadoYellow/5 p-4 text-center dark:border-mikadoYellow/15 dark:bg-mikadoYellow/5">
                                            <p className="text-lg font-bold text-roseTaupe dark:text-mikadoYellow">{kpi.value}</p>
                                            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{kpi.label}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ProjectDetail label="Challenge">{project.challenge}</ProjectDetail>
                                <ProjectDetail label={project.approach ? "Approach" : "Architecture"}>
                                    {project.approach || project.architecture}
                                </ProjectDetail>
                                <ProjectDetail label={project.validationStrategy ? "Validation strategy" : "Implementation"}>
                                    {project.validationStrategy || project.implementation}
                                </ProjectDetail>
                                <div>
                                    <h4 className="font-semibold text-numberText dark:text-gray-200 mb-2">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <span key={technology} className="badge">{technology}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-numberText dark:text-gray-200 mb-2">Results</h4>
                                    <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                                        {project.results.map((result) => (
                                            <li key={result} className="flex items-start gap-2">
                                                <i className="fas fa-check text-mikadoYellow mt-1 shrink-0"></i>
                                                <span>{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <ProjectDetail label="Lessons learned">{project.lessons}</ProjectDetail>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/muzammil-13?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        <i className="fab fa-github mr-2"></i> View GitHub repositories
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
