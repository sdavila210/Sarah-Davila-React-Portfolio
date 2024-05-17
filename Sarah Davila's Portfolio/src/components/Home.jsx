import { useState, useEffect } from 'react';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Resume from './Resume';
import sarahImage from '../assets/sarah-davila.jpg';
import blockBusterBeats from '../assets/blockbuster-beat-logo.png';

function Portfolio() {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        document.getElementById(activeSection)?.scrollIntoView({ behavior: 'smooth' });
    }, [activeSection]);

    const scrollToSection = (id) => {
        setActiveSection(id);
    };

    return (
        <div className="portfolio">
            <header className="header">
                <div id="header">
                    <h1>Hello, I'm Sarah Davila.</h1>
                </div>
                <nav id="nav">
                    <ul>
                        <li className={activeSection === 'about' ? 'active' : ''}>
                            <button onClick={() => scrollToSection('about')}>About Me</button>
                        </li>
                        <li className={activeSection === 'work' ? 'active' : ''}>
                            <button onClick={() => scrollToSection('work')}>Portfolio</button>
                        </li>
                        <li className={activeSection === 'contact' ? 'active' : ''}>
                            <button onClick={() => scrollToSection('contact')}>Contact Me</button>
                        </li>
                        <li className={activeSection === 'resume' ? 'active' : ''}>
                            <button onClick={() => scrollToSection('resume')}>Resume</button>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <About sarahImage={sarahImage} />
                <Work blockBusterBeats={blockBusterBeats} />
                <Contact />
                <Resume />
            </main>

            <footer className="footer">
                <h4>Contact Me</h4>
                <nav>
                    <ul>
                        <li>
                            <a href="mailto:sarahjdavila210@gmail.com">sarahjdavila210@gmail.com</a>
                        </li>
                        <li>
                            <a href="https://github.com/sdavila210">GitHub</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com">LinkedIn</a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}

export default Portfolio;