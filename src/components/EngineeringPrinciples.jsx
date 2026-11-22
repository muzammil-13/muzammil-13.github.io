import { motion } from 'framer-motion';

const principles = [
    {
        title: "Validation First",
        description: "Changes must prove parity before replacing existing operational workflows.",
        icon: "fa-circle-check"
    },
    {
        title: "Automate with Accountability",
        description: "Automate repetitive work while preserving traceability and auditability.",
        icon: "fa-clipboard-check"
    },
    {
        title: "Modernize Incrementally",
        description: "Reduce risk through iterative modernization instead of large rewrites.",
        icon: "fa-layer-group"
    },
    {
        title: "Human-Led AI-Assisted SDLC",
        description: "Use AI to accelerate implementation, testing, and documentation while retaining human architectural ownership.",
        icon: "fa-user-shield"
    }
];

const EngineeringPrinciples = () => (
    <div id="engineering-principles" className="py-14 bg-gray-50/70 dark:bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h3
                className="section-title text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Engineering Principles
            </motion.h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Practical engineering principles for dependable enterprise change.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {principles.map((principle, index) => (
                    <motion.article
                        key={principle.title}
                        className="card group hover:-translate-y-1 hover:border-mikadoYellow/40"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                        <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-mikadoYellow/15 text-mikadoYellow text-lg">
                            <i className={`fas ${principle.icon}`} aria-hidden="true"></i>
                        </span>
                        <h3 className="text-lg font-bold text-numberText dark:text-white mb-3">{principle.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{principle.description}</p>
                    </motion.article>
                ))}
            </div>
        </div>
    </div>
);

export default EngineeringPrinciples;
