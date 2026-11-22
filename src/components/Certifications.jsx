import { motion } from 'framer-motion';

const certifications = [
    { title: "Claude Certified Developer – Foundations", issuer: "Anthropic", icon: "fa-certificate" },
    { title: "Generative & Agentic AI Foundation", issuer: "IBM", icon: "fa-brain" },
    { title: "z/OS Mainframe Practitioner", issuer: "IBM", icon: "fa-server" },
    { title: "Introduction to System Programming on IBM Z", issuer: "IBM", icon: "fa-terminal" },
    { title: "Introduction to z/OS Commands and Panels on IBM Z", issuer: "IBM", icon: "fa-window-maximize" }
];

const Certifications = () => (
    <div id="certifications" className="mt-20 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
            <motion.h3
                className="section-title text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Certifications
            </motion.h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-14">
                Credentials across applied AI and IBM Z systems.
            </p>
            <div className="relative max-w-5xl mx-auto">
                <div className="absolute left-5 top-6 bottom-6 w-px bg-mikadoYellow/40 sm:left-1/2" aria-hidden="true"></div>
                <div className="space-y-5">
                    {certifications.map((certification, index) => (
                        <motion.article
                            key={certification.title}
                            className={`relative flex pl-14 sm:w-1/2 sm:pl-0 ${index % 2 === 0 ? 'sm:pr-10' : 'sm:ml-auto sm:pl-10'}`}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.4 }}
                        >
                            <span
                                className={`absolute left-[13px] top-5 z-10 h-4 w-4 rounded-full border-4 border-white bg-mikadoYellow shadow-sm dark:border-black ${
                                    index % 2 === 0 ? 'sm:left-auto sm:right-[-8px]' : 'sm:left-[-8px]'
                                }`}
                                aria-hidden="true"
                            ></span>
                            <div className="card w-full flex items-start gap-4 p-5 hover:border-mikadoYellow/40">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-mikadoYellow/40 bg-mikadoYellow/10 text-mikadoYellow">
                                    <i className={`fas ${certification.icon}`} aria-hidden="true"></i>
                                </span>
                                <div>
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-mikadoYellow/15 px-2.5 py-1 text-xs font-semibold text-roseTaupe dark:text-mikadoYellow">
                                        <i className="fas fa-award" aria-hidden="true"></i> Certification
                                    </span>
                                    <h3 className="mt-2 font-bold text-numberText dark:text-white">{certification.title}</h3>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{certification.issuer}</p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Certifications;
