import Link from "next/link";

export default function Home() {
    return (
        <main>

            <section className="homeIntro">
                <p className="welcomeText">WELCOME TO MY PORTFOLIO</p>

                <h1>Hi, I'm Harmanjeet Singh</h1>

                <h2>Student Developer</h2>

                <p>
                    I am a student who enjoys learning about technology and
                    web development. I like creating websites, learning new
                    programming skills, and improving through practice.
                </p>

                <Link href="/about" className="homeButton">
                    Learn More About Me
                </Link>
            </section>


            <section className="missionSection">
                <h2>My Mission</h2>

                <p>
                    My mission is to continue improving my development skills
                    and use technology to create useful projects. I want to
                    keep learning, gain more experience and become a skilled
                    developer.
                </p>
            </section>


            <section>
                <h2>Explore My Portfolio</h2>

                <div className="cardContainer">

                    <div className="card">
                        <h3>About Me</h3>

                        <p>
                            Learn more about my background, interests,
                            education and goals as a student developer.
                        </p>

                        <Link href="/about">
                            About Me
                        </Link>
                    </div>


                    <div className="card">
                        <h3>My Projects</h3>

                        <p>
                            View some of the websites and applications I
                            created while learning web development.
                        </p>

                        <Link href="/projects">
                            View Projects
                        </Link>
                    </div>


                    <div className="card">
                        <h3>My Skills</h3>

                        <p>
                            See the programming languages, tools and
                            technologies I am currently learning.
                        </p>

                        <Link href="/skills">
                            View Skills
                        </Link>
                    </div>

                </div>
            </section>


            <section className="contactSection">
                <h2>Let's Connect</h2>

                <p>
                    If you would like to know more about me or my work,
                    feel free to send me a message.
                </p>

                <Link href="/contact" className="homeButton">
                    Contact Me
                </Link>
            </section>

        </main>
    );
}