import Contact from './Contact';
import styles from '../css/Play.module.css';
import SFMoma from '../images/sfmoma-cover.jpg';
import SniffSniff from '../images/sniffsniff-cover.jpg';
import { Helmet } from "react-helmet";
import Project from './Project';
import flower from '../images/flower-cover.jpg';
import Soler from '../images/soler-cover.jpg';
import InnovativeDesign from '../images/innovative-design-cover.jpg';
import peets from '../images/peets-cover.jpg';


export default function Play() {
    return (
        <>
            <Helmet>
                <title>Uyen Phan - Play</title>
                <meta name="description" content="Designing is my gateway to boundless creativity and joy. Explore some of my exciting side projects!" />
            </Helmet>
            <div className="limitWidth">
                <div className={styles.play}>
                    <p className={styles.title}>LET'S HAVE FUN!</p>
                    <p className={styles.subtitle}>Designing is my gateway to boundless creativity and joy.<br/>Explore some of my exciting side projects!</p>
                    <div className={styles.playprojects}>
                        <Project img={flower} name="Flower" subtitle="Motivating Podcast" keywords="BRAND IDENTITY / ILLUSTRATIONS" description="Flower Podcast ignites passion, creativity, positivity, and growth through various audio options." url="/flower" />
                        <Project img={peets} name="Peet's Coffee" subtitle="Fall Campaign" keywords="MARKETING / VISUAL DESIGN" description="Marketing Peet's annual Fall campaign through various mediums: prints, poster designs, packaging, employee's merch, website design and ads." url="/peets" />
                        <Project img={Soler} name="Soler" subtitle="AI Generated Brand" keywords="BRANDING / HACKATHON / AI" description="Soler, a Playbook Hackathon creation, is an innovative AI generated shoe brand that earned us first place and a cash prize of $1000!" url="/soler" />
                        <Project img={InnovativeDesign} name="Innovative Design" subtitle="VP of Marketing" keywords="MARKETING / VISUAL DESIGN" description="Innovative Design is a UC Berkeley's pro-bono creative agency. Marketing serves as the backbone of the club ensuring our events, club info, and mission spreads throughout campus!" url="/innovative-design" />
                        <Project img={SFMoma} name="San Francisco Museum of Modern Art" subtitle="Halloween Poster" keywords="POSTER DESIGN / DESIGNATHON" description="A poster for SF MoMA Halloween Block Party, celebrating the resilient community post-pandemic." url="/sf-moma" />
                        <Project img={SniffSniff} name="Sniff Sniff" subtitle="Hackathon Prize" keywords="HACKATHON / WEBSITE DESIGN" description="Sniff Sniff locates your class Discord/link effortlessly, and Sniffodoo, a bot, provides key channel insights like homework tips, exam dates, and critical updates." url="/sniff-sniff" />
                    </div>
                </div>
            </div>
            <Contact />
        </>
    )
}