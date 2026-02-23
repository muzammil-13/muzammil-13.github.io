import React from 'react';

const Community = () => {
    return (
        <section id="community" className="py-20 bg-gray-50/50 dark:bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title text-center mb-4" data-aos="fade-up">🌐 Community & Collaboration</h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-16" data-aos="fade-up">
                    I'm an active member of tech communities and always open to meaningful collaborations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="card group hover:border-mikadoYellow/30" data-aos="fade-up">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-roseTaupe dark:text-gray-200">
                            <i className="fas fa-users text-mikadoYellow"></i> Communities
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">I'm an active member of:</p>
                        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 pl-2">
                            <li className="flex items-start gap-2">
                                <span>🧑‍🚀</span> <strong>TinkerHub</strong> - A community of tinkerers, makers, and problem solvers
                            </li>
                            <li className="flex items-start gap-2">
                                <span>🧠</span> <strong>muLearn</strong> - Peer learning community focused on tech skills
                            </li>
                            <li className="flex items-start gap-2">
                                <span>⛎</span> <strong>PyGrammers</strong> - Python enthusiasts building and learning together
                            </li>
                        </ul>
                    </div>

                    <div className="card group hover:border-mikadoYellow/30" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-roseTaupe dark:text-gray-200">
                            <i className="fas fa-handshake text-mikadoYellow"></i> Collaboration
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">I'm open to collaborations on:</p>
                        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 pl-5 list-disc">
                            <li>Early-stage SaaS ideas</li>
                            <li>Community projects with social impact</li>
                            <li>Hackathons and coding challenges</li>
                            <li>Open source contributions</li>
                        </ul>
                    </div>

                    <div className="card group hover:border-mikadoYellow/30" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-roseTaupe dark:text-gray-200">
                            <i className="fas fa-lightbulb text-mikadoYellow"></i> Mentorship
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">I believe in the power of knowledge sharing:</p>
                        <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                            <li>
                                <a href="https://whatsapp.com/channel/0029VbAITar11ulTzPe3aX1u" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-mikadoYellow transition-colors">
                                    <i className="fab fa-whatsapp text-lg text-green-500"></i>
                                    Curated knowledge-sharing channel on WhatsApp
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/MalluCodingAspirants" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-mikadoYellow transition-colors">
                                    <i className="fab fa-telegram text-lg text-blue-500"></i>
                                    Mallu Coding Aspirants on Telegram
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-hands-helping text-lg mt-0.5 text-roseTaupe"></i>
                                Helping newcomers navigate the tech landscape
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-book-open text-lg mt-0.5 text-roseTaupe"></i>
                                Learning in public and documenting my journey
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Community;
