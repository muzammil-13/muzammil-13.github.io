import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Programming & Data",
        icon: "fa-code",
        skills: ["Python", "SQL", "Bash", "Pandas"]
    },
    {
        title: "Validation & Application",
        icon: "fa-check-double",
        skills: ["FastAPI", "Pydantic", "PyYAML", "pytest", "openpyxl"]
    },
    {
        title: "Data Platforms",
        icon: "fa-database",
        skills: ["Snowflake", "Teradata", "PostgreSQL", "SQLite", "Supabase"]
    },
    {
        title: "Mainframe & Operations",
        icon: "fa-server",
        skills: ["z/OS", "JCL", "ABEND Analysis", "JES", "TN3270", "SDSF", "Batch Monitoring"]
    },
    {
        title: "APIs & Integration",
        icon: "fa-plug",
        skills: ["z/OSMF REST APIs", "Microsoft Graph API", "REST APIs", "JSON", "API Automation"]
    },
    {
        title: "Applied AI & Engineering",
        icon: "fa-brain",
        skills: ["Microsoft 365 Copilot", "Claude Code", "Devin", "LLM-Assisted Root Cause Analysis", "RAG Fundamentals"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-gray-50/50 dark:bg-black/80 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-mikadoYellow/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-roseTaupe/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="section-title text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Skills & Technologies
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className="card group hover:border-mikadoYellow/30 relative overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-numberText dark:text-gray-200">
                                <span className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-mikadoYellow">
                                    <i className={`fas ${category.icon}`}></i>
                                </span>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="badge bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
