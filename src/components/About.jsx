import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="section-title text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    About
                </motion.h2>

                <div className="grid grid-cols-1 gap-12">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >

                        <div className="card space-y-5">
                            <p className="text-lg">
                                I’m a DataOps Analyst working in the IBM Healthcare Claims domain. I build and
                                support automation and validation workflows that help teams reconcile data,
                                monitor batch operations, and work across established enterprise systems.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                My work brings together Python, SQL, REST APIs, and mainframe operations on
                                z/OS. I approach change with a validation-first mindset: understand the business
                                rules, compare outputs, and make operational behavior easier to observe.
                            </p>
                        </div>

                        <div className="card">
                            <h3 className="text-xl font-bold mb-3 text-roseTaupe dark:text-gray-200">Career journey</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                After completing a Bachelor of Computer Applications, I gained hands-on
                                experience with business operations and IT in a family-run business. I then
                                moved into enterprise technology at IBM, where my work has centered on
                                healthcare claims data, production support, automation, and modernizing
                                mainframe workflows.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
