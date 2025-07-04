import styles from '../css/Tinder.module.css';
import tinderCover from '../images/tinder-words.png'
import Contact from './Contact';
import { Helmet } from "react-helmet";
import celebration from '../images/tinder-celebration.png';
import wip from '../images/tinder-wip.png';

export default function Tinder() {
    return (
        <div>
            <Helmet>
                <title>Uyen Phan - Tinder</title>
                <meta name="description" content="Flower Podcast ignites passion, creativity, positivity, and growth through various audio options." />
            </Helmet>
            <div className={styles.coverbackground}>
                    <img className={styles.imageDown} src={tinderCover} alt="tinder cover" />
            </div>
            <div className="limitWidth">
                <div className={styles.intro}>
                    <div className={styles.introLeft}>
                        <h1>PROJECT OVERVIEW</h1>
                        <img src={celebration} />
                        <p>ART BY YU LU, VISUAL DESIGNER, TINDER</p>
                    </div>
                    <div className={styles.introRight}>
                        <div className={styles.infoCont}>
                        <div className={styles.info}>
                            <h3>ROLE</h3>
                            <p>PRODUCT DESIGN INTERN</p>
                        </div>
                        <div className={styles.info}>
                            <h3>TEAM</h3>
                            <p>STATE-UNEMPLOYMENT-INSURANCE (SUI)</p>
                        </div>
                        <div className={styles.info}>
                            <h3>TIMELINE</h3>
                            <p>MAY-AUGUST 2024</p>
                        </div>
                        </div>
                        <div>
                        <p>
                            I joined the ASL team to help design a new exploration into how Tinder can help users build more authentic profiles. By analyzing users' camera rolls, we developed coaching and recommendation tools that surface personal insights, helping people present who they truly are. Working closely with AI talent in Seoul, Korea, we jumpstarted the project during an international week-long sprint. 
                        </p>
                        <p>
                            In my role, I not only explored new approaches to profile building but also contributed to several other projects, including: 1) The Game’s Game, an April Fools' Easter drop created in partnership with OpenAI 2) Tailor, a newly launched feature that delivers a small set of intentionally curated profiles 3) early planning for Tinder’s upcoming redesign 4) Tinder U, a campus-focused experience tailored for college students.
                        </p>
                        <p>
                            Throughout my time on the team, I brought a Gen Z perspective to everything I touched and helped push for fresh, relevant, and user-first design ideas that reflect the future of dating.
                        </p>
                        </div>
                    </div>
                </div>
                <div className={styles.wipCont}>
                    <img src={wip} className={styles.wip}/>
                </div>
            </div>
            <Contact />
        </div>
    )
}
