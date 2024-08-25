import Project from './Project';
import Sticker from './Sticker';
import Contact from './Contact';
import styles from '../css/Projects.module.css';
import justworks from '../images/justworks-cover.png';
import communitygearbox from '../images/communitygearbox-cover.png';
import re from '../images/RE_cover.png';
import brave from '../images/brave-sticker.png';
import bloom from '../images/bloom-sticker.png';
import kind from '../images/kind-sticker.png';
import breathe from '../images/breathe-sticker.png';
import { Helmet } from "react-helmet";
import pinterest from '../images/pinterest-cover.png'
import flowerSticky from '../images/orange-flower.png'
import starSticky from '../images/orange-star.png'
import underline from '../images/underline.png';
import justworksEditing from '../images/justworks-2024-cover.png';

export default function Projects() {
    return (
        <>
            <Helmet>
                <title>Uyen Phan</title>
                <meta name="description" content="Uyen is a product designer aiming to weave together simplicity, joy, and connection through human-centric thinking and storytelling." />
            </Helmet>
            <div className="limitWidth">
                <div className={styles.frontline}>
                    <div className={styles.left}>
                        <div className={styles.relativeWrapper}>
                            <p className={styles.bigFont}>I'm Uyen ᵕ̈</p>
                            <p className={styles.helloSticky}>xin ch&agrave;o</p>
                            <h1>CURIOUS</h1>
                            <img src={flowerSticky} className={styles.flowerSticky}/>
                            <h1>IMPACTFUL</h1>
                            <img src={underline} className={styles.underLined}/>
                            <h1>EMPATHETIC</h1>
                            <div className={styles.starSubsection}>
                                <img src={starSticky} className={styles.starSticky}/>
                                <p className={styles.bigFont}>Product Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <p>Uyen is a <span className={styles.orangeBold}>product designer</span> who aims to weave together simplicity, joy, and connection through human-centric thinking and storytelling.</p>
                        <ul>
                            <li>Studied Cognitive Science & Data Science <span className={styles.bold}>@ UC Berkeley</span></li>
                            <li>Currently a product design intern at <span className={styles.bold}> @ Justworks</span></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.projects}>
                    <Project img={justworksEditing} name="Justworks" subtitle="Editing Permissions" keywords="CROSS-PLATFORMS / UX / INTERNSHIP" description="Integrated editing feature for both internal and external use, built around specific use cases and editing permissions." url="/justworks-editing" />
                    <Project img={justworks} name="Justworks" subtitle="Mobile Directory" keywords="INTERNSHIP / MOBILE DESIGN / UX" description="Developed a mobile directory, streamlining access to important  information for over 1000 companies and their employees." url="/justworks-mobile" />
                    <Project img={pinterest} name="Pinterest" subtitle="Ad Creation Flow" keywords="COMPETITIVE ANALYSIS / UX / UI" description="Improving Pinterest's quick promote feature; dedicating an ad creation flow for small-medium businesses (SMBs) to promote their products effectively." url="/pinterest" />
                    <Project img={communitygearbox} name="Community Gearbox" subtitle="Community Building" keywords="PRODUCT DESIGN /  PROTOTYPING" description="Creating mobile features to increase accountability and foster community engagement." url="/community-gearbox" />
                    <Project img={re} name="RE:" subtitle="Bridging LDRs" keywords="DESIGN METHODOLOGY / UX / UI" description="RE: is a prompts + recording app designed to foster connection between two individuals, transcending physical barriers." url="/re" />

                </div>
                <div className={styles.stickers}>
                    <p className={styles.surprise}>A SURPRISE?</p>
                    <p className={styles.stickerInfo}>If you scrolled this far, thank you!</p>
                    <p className={styles.stickerInfo}>You deserve some happy reminders. Pick one out & really take it to heart.</p>
                </div>
                <div className={styles.moveableStickers}>
                    <Sticker image={brave} tag="brave"/>
                    <Sticker image={bloom} tag="bloom"/>
                    <Sticker image={kind} tag="kind"/>
                    <Sticker image={breathe} tag="breathe"/>
                </div>
            </div>
            <Contact />
        </>
    )
}