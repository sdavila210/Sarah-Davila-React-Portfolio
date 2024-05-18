import sarahImage from '../assets/sarah-davila.jpg';

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

export default About;