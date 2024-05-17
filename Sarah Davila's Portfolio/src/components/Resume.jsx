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

export default Resume;