import Link from "next/link";

export default function About() {
    return (
        <main>
            <h1>About Me</h1>

            <section className="aboutPage">
                <div className="aboutLayout">

                    <div className="aboutImage">
                        <img
                            src="/IMG_2629.jpg"
                            alt="Harmanjeet Singh"
                            className="profileImage"
                        />
                    </div>

                    <div className="aboutText">
                        <h2>Hi, I'm Harmanjeet Singh.</h2>

                        <p>
                            I am a person who believes in learning by trying, making mistakes, figuring things out and repeating the process.
                        </p>

                        <p>
                           Currently, I am developing myself in the areas of web development, programming, React, Next.js and TypeScript. Learning by doing gives me great pleasure, and I continuously improve my skills with each project I work on.

                        </p>

                        <p>
                            My ultimate goal is to develop myself as a developer and build projects that can help people, I always like to challenge myself.
                        </p>

                        <Link href="/projects">
                            View My Projects
                        </Link>

                        <br />

                        <Link href="/contact">
                            Contact Me
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
}