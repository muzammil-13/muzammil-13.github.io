import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
            <motion.div
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >

                <div className="mb-8 flex justify-center">
                    <div className="relative w-48 h-48 rounded-full border-4 border-mikadoYellow overflow-hidden shadow-xl">
                        <img
                            src="/profile.jpg"
                            alt="Muzammil Ibrahim"
                            className="object-cover w-full h-full"
                            loading="lazy"
                        />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    I modernize enterprise data and <span className="gradient-text">systems.</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-3">
                    DataOps &amp; Enterprise Automation Engineer
                </p>

                <div className="text-lg text-gray-500 dark:text-gray-400 mb-8 space-y-3">
                    <p className="text-numberText dark:text-white font-semibold">Muzammil Ibrahim</p>
                    <p className="font-medium text-base md:text-lg">
                        Python Automation <span aria-hidden="true">·</span> Mainframe Modernization <span aria-hidden="true">·</span> Enterprise Systems <span aria-hidden="true">·</span> Applied AI
                    </p>
                    <p className="text-base">
                        IBM experience building Python automation and DataOps workflows for enterprise healthcare claims and z/OS systems.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href="#impact" className="btn-primary w-full sm:w-auto">
                        See verified impact
                    </a>
                    <a href="#contact" className="btn-secondary w-full sm:w-auto">
                        Contact me
                    </a>
                </div>

            </motion.div>
        </section>
    );
};

export default Hero;
