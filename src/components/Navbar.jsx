import { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`glass-nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container px-3 md:px-8">
                <div className="text-2xl font-bold text-mikadoYellow">MI.</div>

                <div className="nav-links flex min-w-0 flex-1 items-center justify-start overflow-x-auto whitespace-nowrap px-2 md:px-4">
                    <a className="shrink-0" href="#hero">Home</a>
                    <a className="shrink-0" href="#about">About</a>
                    <a className="shrink-0" href="#experience">Experience</a>
                    <a className="shrink-0" href="#projects">Projects</a>
                    <a className="shrink-0" href="#skills">Skills</a>
                    <a className="shrink-0" href="#impact">Impact</a>
                    <a className="shrink-0" href="#resume">Resume</a>
                    <a className="shrink-0" href="#contact">Contact</a>
                </div>

                <button
                    onClick={toggleTheme}
                    className="text-xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
