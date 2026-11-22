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
            <div className="nav-container">
                <div className="text-2xl font-bold text-mikadoYellow">MI.</div>

                <div className="nav-links hidden min-w-0 flex-1 items-center justify-start overflow-x-auto whitespace-nowrap px-4 md:flex">
                    <a className="shrink-0" href="#hero">Home</a>
                    <a className="shrink-0" href="#about">About</a>
                    <a className="shrink-0" href="#experience">Experience</a>
                    <a className="shrink-0" href="#skills">Skills</a>
                    <a className="shrink-0" href="#certifications">Certifications</a>
                    <a className="shrink-0" href="#engineering-principles">Principles</a>
                    <a className="shrink-0" href="#projects">Projects</a>
                    <a className="shrink-0" href="#architecture">Architecture</a>
                    <a className="shrink-0" href="#journey">Journey</a>
                    <a className="shrink-0" href="#volunteering">Volunteering</a>
                    <a className="shrink-0" href="#current-focus">Focus</a>
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
