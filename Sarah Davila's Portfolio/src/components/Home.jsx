import { useState, useEffect } from 'react';
//import Work from './Work';
import sarahImage from '../assets/sarah-davila.jpg';
import blockBusterBeats from '../assets/blockbuster-beat-logo.png'

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
                <About />
                <Work />
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

function About() {
    return (
        <section id="about" className="about">
            <div className="article">
                <h2>About Me</h2>
                <img src={sarahImage} alt="picture of Sarah Davila" className="photo" />
                <p id="paragraph">
                    My name is Sarah Davila, and I am a front-end web developer based in Las Vegas, NV. I became interested in web
                    development during the pandemic, and I am currently taking a bootcamp to develop and sharpen my skills in
                    different languages such as HTML, CSS, and JavaScript.
                </p>
            </div>
        </section>
    );
}

function Work() {
    const projects = [
        { title: 'BlockBuster Beats', imageUrl: blockBusterBeats, liveLink: 'https://sdavila210.github.io/blockbuster-beats/', repoLink: 'https://github.com/sdavila210/blockbuster-beats' },
    ];

    return (
        <section id="work" className="work">
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3>{project.title}</h3>
                        <img src={project.imageUrl} alt={`Screenshot of ${project.title}`} />
                        <div className="links">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
                            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        if (name === 'email' && value) {
            const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            setErrors({ ...errors, email: emailValid ? '' : 'Invalid email address' });
        } else {
            setErrors({ ...errors, [name]: value ? '' : `${name} is required` });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!form.name) newErrors.name = 'Name is required';
        if (!form.email) newErrors.email = 'Email is required';
        if (!form.message) newErrors.message = 'Message is required';
        setErrors(newErrors);
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleChange}
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

function Resume() {
    const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MySQL'];

    return (
        <section id="resume" className="resume">
            <h2>Resume</h2>
            <a href="/" download>Download Resume</a>
            <h3>Proficiencies</h3>
            <ul>
                {proficiencies.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

export default Portfolio;