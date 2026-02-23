const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
            <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">

                <div className="mb-8 flex justify-center">
                    <div className="relative w-48 h-48 rounded-full border-4 border-mikadoYellow overflow-hidden shadow-xl">
                        <img
                            src="dist/assets/profile.jpg"
                            alt="Muzammil Ibrahim"
                            className="object-cover w-full h-full"
                            loading="lazy"
                        />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    👋 Hey there, I'm <span className="gradient-text">Muzammil Ibrahim</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4">
                    🚀 Tech Explorer | 🧠 Self-Taught Coder | 🛠️ Aspiring SaaS Builder
                </p>

                <div className="text-lg text-gray-500 dark:text-gray-400 mb-8">
                    <p>From BCA Graduate to Future Tech Founder</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href="#projects" className="btn-primary w-full sm:w-auto">
                        View Projects
                    </a>
                    <a href="#contact" className="btn-secondary w-full sm:w-auto">
                        Get in Touch
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;
