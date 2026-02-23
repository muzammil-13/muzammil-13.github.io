import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Initialize AOS
        if (window.AOS) {
            window.AOS.init({
                duration: 800,
                once: true,
                offset: 100,
                easing: 'ease-in-out'
            });
        }

        // Initialize Theme
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        } else if (prefersDark) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className="min-h-screen">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Journey />
                <Community />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
