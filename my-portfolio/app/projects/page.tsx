export default function Projects() {
    return (
        <main>
            <h1>My Projects</h1>

            <p>
                Here are some of the projects I have worked on while learning
                web design and development. Each project helped me practice
                different skills and improve my knowledge.
            </p>

            <section className="cardContainer">

                <div className="card">
                    <img
                        src="/css-style.png"
                        alt="CSS Style Stage Project"
                        className="projectImage"
                    />

                    <h2>CSS Style Stage Project</h2>

                    <p>
                       I designed the page according to my preferences. I used CSS in order to design the website from the colors, typography, space, layout, buttons and even the navigation of the website. This was useful to enhance my understanding about CSS design.
                    </p>

                    <p>
                        <strong>Technologies:</strong> HTML, CSS, CSS Grid
                    </p>
                </div>

                <div className="card">
                    <img
                        src="/lucky-dhaba.png"
                        alt="Lucky Dhaba Website"
                        className="projectImage"
                    />

                    <h2>Lucky Dhaba Website</h2>

                    <p>
                        I created a WordPress website using themes, pages,
                        categories, and posts. This project taught me how
                        website content can be created, organized, and
                        managed using WordPress.
                    </p>

                    <p>
                        <strong>Technologies:</strong> WordPress, Web Design
                    </p>
                </div>

                <div className="card">
                    <img
                        src="/ibm-project.png"
                        alt="IBM Selectric Website"
                        className="projectImage"
                    />

                    <h2>IBM Selectric Website</h2>

                    <p>
                       I created a promotional website for the IBM Selectric typewriter using HTML and CSS. I designed different sections with navigation, images, buttons, product information, and customer reviews. This project helped me improve my CSS styling, page layout, and overall web design skills.
                    </p>

                    <p>
                    <strong>Technologies:</strong> HTML, CSS, Responsive Design
                    </p>
                </div>

            </section>
        </main>
    );
}