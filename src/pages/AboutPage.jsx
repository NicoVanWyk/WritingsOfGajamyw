import React from 'react';
import styles from './css/AboutPage.module.css';

function AboutPage() {
    return (
        <div className={styles.aboutContainer}>
            <h1>About Writings Of Gajamyw</h1>

            <section>
                <h2>Introduction</h2>
                <p>
                    Introduction to the website
                </p>
            </section>

            <section>
                <h2>Project Origin</h2>
                <p>
                    How did Gajamyw as a project begin?
                </p>
            </section>

            <section>
                <h2>Features</h2>
                <ul>
                    <li><strong>Home</strong>: Stay updated with the latest and featured content.</li>
                    <li><strong>Characters</strong>: Detailed profiles of important characters.</li>
                    <li><strong>World</strong>: Explore the diverse regions, cultures, and histories of the world.</li>
                    <li><strong>Important Events</strong>: Learn about significant events that shaped the world.</li>
                    <li><strong>Timeline</strong>: Follow the chronological order of key events.</li>
                    <li><strong>Maps</strong>: Visualize the world with detailed maps.</li>
                    <li><strong>Magic</strong>: Understand the magic systems and abilities.</li>
                    <li><strong>Bestiary</strong>: Meet the creatures that inhabit the world.</li>
                </ul>
            </section>

            <section>
                <h2>Target Audience</h2>
                <p>
                    Who is this for?
                </p>
            </section>

            <section>
                <h2>Technology Stack</h2>
                <p>
                    The website is built using modern technologies:
                </p>
                <ul>
                    <li><strong>React</strong>: For a dynamic and responsive user interface.</li>
                    <li><strong>Firebase</strong>: To handle backend services including authentication and database management.</li>
                    <li><strong>GitHub Pages</strong>: For hosting the site.</li>
                </ul>
            </section>

            <section>
                <h2>Team</h2>
                <p>Meet the creator(s) behind LoreKeeper:</p>
                <ul>
                    <li><strong>Sam</strong>: Writer and Designer.</li>
                    <li><strong>Robyn</strong>: Writer and Developer.</li>
                </ul>
            </section>

            <section>
                <h2>Future Plans</h2>
                <p>
                    We're excited about the future of Gajamyw! Look forward to:
                </p>
                <ul>
                    <li>Expanded content and new regions to explore.</li>
                    <li>Enhanced features for better user interaction.</li>
                    <li>Regular updates to keep the world fresh and exciting.</li>
                </ul>
            </section>
        </div>
    );
}

export default AboutPage;