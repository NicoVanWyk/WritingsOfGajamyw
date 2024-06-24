import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './css/HomePage.module.css';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className={styles.homeContainer}>
            <header className={styles.homeHeader}>
                <h1>Welcome to Gajamyw</h1>
                <p>Explore the lore of the continent of Gajamyw, and find the knowledge which you seek.</p>
            </header>

            <section className={styles.staticContent}>
                <h2>About the Authors</h2>
                <p>Authored by both Sam & Robyn, co-DM's</p>
            </section>

            <section className={styles.quotesSection}>
                <h2>Quotes from Gajamyw</h2>
                <blockquote>
                    "I am the Mountain, and I will not break." - Aimen Sesay.
                </blockquote>

                <blockquote>
                    "I'm have to hunt down that bastard who killed by friend." - Emily Oxford.
                </blockquote>

                <blockquote>
                    "Erm." - Jabril Safavid.
                </blockquote>
            </section>

            <footer className={styles.homeFooter}>
                <button className="btnPrimary" onClick={() => navigate('/timeline')}>Explore More</button>
            </footer>
        </div>
    );
}

export default HomePage;