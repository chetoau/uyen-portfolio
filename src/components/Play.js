import Contact from './Contact';
import styles from '../css/Play.module.css';
import SFMoma from '../images/sfmoma-cover.jpg';
import SniffSniff from '../images/sniffsniff-cover.jpg';
import { Helmet } from "react-helmet";
import PlayProject from './PlayProject';
import flower from '../images/flower-cover.jpg';
import Soler from '../images/soler-cover.jpg';
import InnovativeDesign from '../images/innovative-design-cover.jpg';
import peets from '../images/peets-cover.jpg';
import flowerPerson from '../images/flowerPerson.png'
import underline from '../images/underline.png'


export default function Play() {
    return (
        <>
            <Helmet>
                <title>Uyen Phan - Play</title>
                <meta name="description" content="Designing is my gateway to boundless creativity and joy. Explore some of my exciting side projects!" />
            </Helmet>
            <div className={styles.upper}>
                <div className="limitWidth">
                    <div className={styles.upperPage}>
                        <div className={styles.upperLeft}>
                            <p className={styles.title}>COME IN ONTO UYEN'S WORLD</p>
                            <img src={underline} className={styles.underLined}/>
                            <p className={styles.subtitle}>My design journey actually started with branding and graphic design! Whenever I encounter a mental block, designing has always been my escape, allowing me to retreat into my own bubble. Design is more than just a career to me; it's a space where I feel most authentic and true to myself! </p>
                        </div>
                        <img className={styles.flowerPerson} src={flowerPerson} alt=""/>
                    </div>
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.play}>
                    <div className={styles.playprojects}>
                        <PlayProject img={flower} name="Flower" subtitle="Motivating Podcast" keywords="BRAND IDENTITY / ILLUSTRATIONS" description="Flower Podcast ignites passion, creativity, positivity, and growth through various audio options." url="/flower" />

                        <PlayProject img={Soler} name="Soler" subtitle="AI Generated Brand" keywords="BRANDING / HACKATHON / AI" description="Soler, a Playbook Hackathon creation, is an innovative AI generated shoe brand that earned us first place and a cash prize of $1000!" url="/soler" />

                        <PlayProject img={InnovativeDesign} name="Innovative Design" subtitle="VP of Marketing" keywords="MARKETING / VISUAL DESIGN" description="Innovative Design is a UC Berkeley's pro-bono creative agency. Marketing serves as the backbone of the club ensuring our events, club info, and mission spreads throughout campus!" url="/innovative-design" />

                        <PlayProject img={peets} name="Peet's Coffee" subtitle="Fall Campaign" keywords="MARKETING / VISUAL DESIGN" description="Marketing Peet's annual Fall campaign through various mediums: prints, poster designs, packaging, employee's merch, website design and ads." url="/peets" />

                        <PlayProject img={SFMoma} name="SF MoMA" subtitle="Halloween Poster" keywords="POSTER DESIGN / DESIGNATHON" description="A poster for SF MoMA Halloween Block Party, celebrating the resilient community post-pandemic." url="/sf-moma" />

                        <PlayProject img={SniffSniff} name="Sniff Sniff" subtitle="Hackathon Prize" keywords="HACKATHON / WEBSITE DESIGN" description="Sniff Sniff locates your class Discord/link effortlessly, and Sniffodoo, a bot, provides key channel insights like homework tips, exam dates, and critical updates." url="/sniff-sniff" />
                    </div>
                </div>
            </div>
            <Contact />
        </>
    )
}