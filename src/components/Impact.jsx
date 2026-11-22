import { motion } from 'framer-motion';

const metrics = [
    { value: "~98%", label: "Teradata-to-Snowflake parity" },
    { value: "137+", label: "Mainframe jobs validated" },
    { value: "10+", label: "Zentinel validation runs" },
    { value: "7/7", label: "Zentinel output parity" },
    { value: "2–15 sec", label: "Monitoring cycle time" }
];

const Impact = () => (
    <section id="impact" className="py-12 bg-gray-50/70 dark:bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xl font-bold text-numberText dark:text-white mb-6">Measured impact</h2>
            <motion.div
                className="grid grid-cols-2 md:grid-cols-5 gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {metrics.map((metric) => (
                    <div key={metric.label} className="card text-center p-5">
                        <p className="text-2xl md:text-3xl font-bold text-roseTaupe dark:text-mikadoYellow">{metric.value}</p>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{metric.label}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default Impact;
