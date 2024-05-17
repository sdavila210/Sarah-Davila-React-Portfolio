import blockBusterBeats from '../assets/blockbuster-beat-logo.png'

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

export default Work;