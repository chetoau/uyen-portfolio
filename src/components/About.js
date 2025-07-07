import { Helmet } from "react-helmet";
import styles from '../css/About.module.css';
import aboutdoodles from '../images/aboutdoodles.png';
import aboutpic from '../images/aboutpic.png';
import aboutstar from '../images/aboutstar.png';
import Contact from './Contact';
import aboutsun from '../images/aboutsun.png';

export default function About() {
    return (
        <>
            <Helmet>
                <title>Uyen Phan - About</title>
                <meta name="description" content="I am a senior studying at the University of California, Berkeley and majoring in Cognitive Science & minoring in Data Science with a certificate in Design Innovation." />
            </Helmet>
            <div className="limitWidth">
                <div className={styles.about}>
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <div style={{width: "fit-content", position: "relative"}}>
                                <img src={aboutpic} className={styles.images} width="100%" alt="Uyen Phan"/>
                                <img src={aboutsun} className={`${styles.sun} spinning`} width="100%" alt=""/>
                                <img src={aboutstar} className={`${styles.star} twinkle`} width="100%" alt=""/>
                            </div>
                        </div>
                        <div className={styles.aboutme}>
                            <div className={styles.nameSec}>
                                <p className={styles.name}>I'm Uyen!</p>
                                <p className={styles.pronouns}>she/her</p>
                            </div>
                            <p className={styles.details}>Hey! My name is Uyen (as in “win”-ning 💪🏻🏆).  A UC Berkeley’s alum with degrees in Cognitive Science & Data Science. </p>
                            <p className={styles.details}>Coming from an underrepresented background and being a first-generation student, I’ve navigated the complexities of growing up where, for much of my life, I felt like I was standing at the edge of a cliff. Discovering my passion for design has not only given me clarity but also the confidence to leap across to the other side.  </p>
                            <p className={styles.details}>Design is invisible to the users, but behind the scenes, it taps into the complexity of the human mind. Being able to dig into a wide spectrum of individuals has allowed me to learn more about the diverse perspectives around me. </p>
                            <p className={styles.details}>In my free time, I’m always experimenting with new matcha latte recipes, and I’ll never say no to a concert. I’m also an aspiring vlogger with an endless backlog of footage I haven’t edited yet—but I definitely will soon! :D (this is a lie). </p>
                            
                        </div>
                    </div>
                    <img src={aboutdoodles} width="100%" alt=""/>
                    <div className={styles.previouslySection}>
                        <h1>Work Experience</h1>
                        <h4><span className={styles.orange}>Match Group, Tinder,</span> Associate Product Designer, 2025 </h4>
                        <p>Spearheaded the design and integration of a profile builder in collaboration with Tinder’s AI team, leveraging photo analysis to recommend images that authentically represent users. Iterated on designs to seamlessly integrate the feature into Tinder’s existing design system. Contributed to the future re-architecture of Tinder’s ecosystem. </p>
                        <h4><span className={styles.orange}>Justworks,</span> Product Design Intern (Payments & Taxes Team), 2024 </h4>
                        <p>Designed two distinct editing features and workflows for the off-boarding process, aimed at improving accuracy, credibility, and efficiency for both internal and external users when submitting termination claims.</p>
                        <h4><span className={styles.orange}>Justworks,</span> Product Design Intern (Mobile Team), 2023</h4>
                        <p>Design a mobile directory from 0 to 1 for the Justworks mobile app integrating  into their new platform, enhancing internal communication for employees. </p>
                        <h4><span className={styles.orange}>Pinterest,</span> Product Designer (Contract), 2023</h4>
                        <p>Led research to identify SMB pain points and designed high-fidelity features to improve new and returning user experiences on the Ad Creation process. </p>
                        <h4><span className={styles.orange}>Unilever,</span> Design Project Manager (Contract), 2024</h4>
                        <p>Mentored a team of four consultants to design sustainable packaging for Unilever's Dove Men products - initiating discussions on sustainable change across Dove’s packaging ecosystem.</p>
                        <h4><span className={styles.orange}>Community Gearbox,</span> UX Designer (Contract), 2023</h4>
                        <p>Shipped 3 high-fidelity features to boost accountability and community engagement, validated trust-building methods through user research to identify patterns in users' values and priorities related to lending and borrowing.</p>
                        <h4><span className={styles.orange}>Peet’s Coffee,</span> Design Intern, 2022</h4>
                        <p>Enhanced Peet’s website by improving weak user flows and screen layouts, while collaborating with creative, marketing, product, and content teams to design and ship 50+ assets for the holidays.</p>
                    </div>
                    
                </div>
            </div>
            <Contact />
        </>
    )
}