const Resume = () => (
    <section id="resume" className="py-16 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-numberText px-6 py-10 text-center text-white dark:bg-cardBgDark sm:px-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Resume &amp; profiles</h2>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                    <a
                        href="/docs/Muzammil_FDE_Resume_2026-ATS.pdf"
                        download="Muzammil_FDE_Resume_2026-ATS.pdf"
                        className="btn-primary inline-flex items-center justify-center gap-2"
                    >
                        <i className="fas fa-file-download" aria-hidden="true"></i> Download Resume
                    </a>
                    <a href="https://www.linkedin.com/in/muzammilipm" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2 border-white/70 text-white hover:bg-white/10">
                        <i className="fab fa-linkedin" aria-hidden="true"></i> View LinkedIn
                    </a>
                    <a href="https://github.com/muzammil-13" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2 border-white/70 text-white hover:bg-white/10">
                        <i className="fab fa-github" aria-hidden="true"></i> View GitHub
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Resume;
