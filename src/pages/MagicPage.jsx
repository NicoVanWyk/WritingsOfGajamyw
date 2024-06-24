// src/pages/MagicPage.js
import React from 'react';
import styles from './css/MagicPage.module.css';
import { useNavigate } from 'react-router-dom';

// TODO: Write actual content for each item

function MagicPage() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <h1>What Is Magic?</h1>
                <p>
                    Description of what magic is
                </p>
            </div>

            <div className={styles.section}>
                <h2>The History Of Magic</h2>
                <p>
                    History of magic
                </p>
            </div>

            <div className={styles.section}>
                <h1>Schools Of Magic</h1>
                <button onClick={() => handleNavigate('/magic/schools')} className='btnPrimary'>View Schools</button>
            </div>

            <div className={styles.section}>
                <h1>Magic Users</h1>
                <button onClick={() => handleNavigate('/magic/classes')} className='btnPrimary'>View Classes</button>
            </div>

            {/* <div className={styles.section}>
                <h2>Famous Magic Users</h2> */}
            {/* TODO: Write content for famous magic users */}
            {/* </div> */}

            {/* <div className={styles.section}>
                <h2>Organizations</h2> */}
            {/* TODO: Write content for guilds, schools, societies, etc of magic users */}
            {/* </div> */}

            <div className={styles.section}>
                <h1>Learning Or Casting Magic</h1>
                <h2>Training</h2>
                <p>
                    How do people train to use magic?
                </p>

                <h2>Casting</h2>
                <p>
                    How do people cast magic?
                </p>

                <h2>Spellcasting Aids</h2>
                <p>
                    Can spellcasting aids be used?
                </p>
            </div>

            <div className={styles.section}>
                <h1>Magic and Society</h1>
                <h2>Social Stigmas and Regulations</h2>
                <p>
                    Stigmas and regulations
                </p>

                <h2>Laws and Regulations</h2>
                <p>
                    Laws and regulations
                </p>

                <h2>Economic Impact</h2>
                <p>
                    Economic impact
                </p>
            </div>

            <div className={styles.section}>
                <h1>Magical Creatures and Entities</h1>
                <h2>Mythical Beasts</h2>
                <p>
                    Content
                </p>

                <h2>Spirits and Elementals</h2>
                <p>
                    Content
                </p>

                <h2>Demons and Angels</h2>
                <p>
                    Content
                </p>
            </div>

            {/* <div className={styles.section}>
                <h1>Artifacts and Enchantments</h1>
                <h2>Artifacts</h2>
                <p>Legendary items of great power and historical significance, artifacts are often sought after for their extraordinary capabilities.</p>

                <h2>Enchantments</h2>
                <p>Common and powerful enchantments are used to imbue objects with magical properties, enhancing their functionality and value.</p>
            </div> */}

            {/* <div className={styles.section}>
                <h1>Magic and Technology</h1>
                <h2>Magitech</h2>
                <p>Magitech represents the integration of magic with technology, leading to advanced innovations that blend the best of both worlds.</p>

                <h2>Innovations</h2>
                <p>Magical advancements have far-reaching impacts on society, from everyday conveniences to groundbreaking discoveries.</p>
            </div> */}

            {/* <div className={styles.section}>
                <h1>Mysteries and Unexplained Phenomena</h1>
                <h2>Ancient Ruins</h2>
                <p>Ancient ruins are places of forgotten magic and lost civilizations, holding secrets waiting to be uncovered.</p>

                <h2>Unsolved Mysteries</h2>
                <p>Events or phenomena that defy magical understanding continue to intrigue and challenge scholars and adventurers alike.</p>
            </div> */}

            <div className={styles.section}>
                <h1>Dangers and Risks of Magic</h1>
                <h2>Overuse and Addiction</h2>
                <p>
                    Content
                </p>

                <h2>Corruption and Backlash</h2>
                <p>
                    Content
                </p>

                {/* <h2>Magical Diseases and Curses</h2>
                <p>
                    Illnesses and afflictions caused by magic can be devastating, often requiring powerful remedies or cures.
                </p> */}
            </div>
        </div>
    );
}

export default MagicPage;