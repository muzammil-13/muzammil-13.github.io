import { motion } from 'framer-motion';
import Journey from './Journey';
import FocusAndFit from './FocusAndFit';
import EngineeringPrinciples from './EngineeringPrinciples';

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

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="card space-y-5"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold text-numberText dark:text-white">Who I Am</h3>
                        <div className="space-y-4">
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
                    </motion.div>
                </div>

                <div className="mt-10">
                    <Journey />
                    <FocusAndFit />
                    <EngineeringPrinciples />
                </div>
            </div>
        </section>
    );
};

export default About;
