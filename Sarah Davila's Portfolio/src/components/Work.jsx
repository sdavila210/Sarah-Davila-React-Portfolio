import blockBusterBeats from '../assets/blockbuster-beat-logo.png'
import expenseexplorer from '../assets/expenseexplorerpic.png'
import javascriptquiz from '../assets/javascriptquiz.png'
import weatherdash from '../assets/weatherdash.png'
import passwordgen from '../assets/passwordgen.png'
import workdayschedule from '../assets/workdayschedule.png'

function Work() {
    const projects = [
        { title: 'BlockBuster Beats', imageUrl: blockBusterBeats, liveLink: 'https://sdavila210.github.io/blockbuster-beats/', repoLink: 'https://github.com/sdavila210/blockbuster-beats' },
        { title: 'ExpenseExplorer', imageUrl: expenseexplorer, liveLink: 'https://express-explorer-ef6c4c2d378e.herokuapp.com/', repoLink: 'https://github.com/sdavila210/expense-explorer' },
        { title: 'Javascript Quiz', imageUrl: javascriptquiz, liveLink: 'https://sdavila210.github.io/javascript-quiz/', repoLink: 'https://github.com/sdavila210/javascript-quiz' },
        { title: 'Weather Dashboard', imageUrl: weatherdash, liveLink: 'https://sdavila210.github.io/weather-dashboard/', repoLink: 'https://github.com/sdavila210/weather-dashboard' },
        { title: 'Password Generator', imageUrl: passwordgen, liveLink: 'https://sdavila210.github.io/password-generator/', repoLink: 'https://github.com/sdavila210/password-generator' },
        { title: 'Work Day Scheduler', imageUrl: workdayschedule, liveLink: 'https://sdavila210.github.io/work-day-scheduler/', repoLink: 'https://github.com/sdavila210/work-day-scheduler' },
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