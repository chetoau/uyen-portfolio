import React, {useState} from "react";
import styles from '../css/InnovativeDesign.module.css';
import innovativeDesign from '../images/innovative-design.png';
import { Helmet } from "react-helmet";
import Contact from './Contact';
import innod from '../images/innod-timeline.jpg';
import instagramPost1 from '../images/Instagram Post 1.jpg';
import instagramPost2 from '../images/Instagram Post 2.jpg';
import instagramPost3 from '../images/Instagram Post 3.jpg';
import instagramPost4 from '../images/Instagram Post 4.jpg';
import instagramPost5 from '../images/Instagram Post 5.jpg';
import instagramPost6 from '../images/Instagram Post 6.jpg';
import instagramPost7 from '../images/Instagram Post 7.jpg';
import instagramPost8 from '../images/Instagram Post 8.jpg';
import instagramPost9 from '../images/Instagram Post 9.jpg';
import hex1 from '../images/HEX Post Design 1.jpg';
import hex2 from '../images/HEX Post Design 2.jpg';
import hex3 from '../images/HEX Post Design 3.jpg';
import workshop1 from '../images/workshop 1.jpg';
import workshop2 from '../images/workshop 2.jpg';
import workshop3 from '../images/workshop 3.jpg';
import workshop4 from '../images/workshop 4.jpg';
import prizes1 from '../images/prizes 1.jpg';
import prizes2 from '../images/prizes 2.jpg';
import rgb1 from '../images/RGB Asset 1.jpg';
import rgb2 from '../images/RGB Asset 2.jpg';
import rgb3 from '../images/RGB Asset 3.jpg';
import instagramGrid1 from '../images/Instagram Grid 1.jpg';
import instagramGrid2 from '../images/Instagram Grid 2.jpg';
import instagramGrid3 from '../images/Instagram Grid 3.jpg';
import instagramGrid4 from '../images/Instagram Grid 4.jpg';
import instagramGrid5 from '../images/Instagram Grid 5.jpg';
import instagramGrid6 from '../images/Instagram Grid 6.jpg';
import flyers1 from '../images/flyers1.png';
import flyers2 from '../images/flyers2.png';
import ig1 from '../images/ig1.png';
import ig2 from '../images/ig2.png';
import ig3 from '../images/ig3.png';
import ig4 from '../images/ig4.png';
import ig5 from '../images/ig5.png';
import ig6 from '../images/ig6.png';
import ig7 from '../images/ig7.png';
import ig8 from '../images/ig8.png';
import ig9 from '../images/ig9.png';
import innodAssets1 from '../images/innodAssets.png';
import hex11 from '../images/hex1.png';
import hex21 from '../images/hex2.png';
import hex31 from '../images/hex3.png';
import hex41 from '../images/hex4.png';
import hex51 from '../images/hex5.png';
import packaging1 from '../images/packaging1.png';
import packaging2 from '../images/packaging2.png';
import innodAssets2 from '../images/innodAssets2.png';
import innodAssets3 from '../images/innodAssets3.png';
import cmyk1 from '../images/cmyk1.png';
import cmyk2 from '../images/cmyk2.png';
import cmyk3 from '../images/cmyk3.png';
import cmyk4 from '../images/cmyk4.png';
import cmyk5 from '../images/cmyk5.png';
import mlk from '../images/mlk.png';
import sponsor from '../images/sponsor.png';
import innodLogo from '../images/innodLogo.png';


export default function InnovativeDesign() {

    const [activeTab, setActiveTab] = useState("spring");
    const handleClick = (tab) => {setActiveTab(tab);};

    const renderContent = () => {
        if (activeTab === "spring") {
            return (
                <div>
                    <h1 className="bold">Recruitment</h1>
                    <p className={styles.gray}>TIMELINE</p>
                    <img src={innod} alt="Innovative Design Recruitment Timeline" />
                    <hr className={styles.line}/>
                    <p className={styles.gray}>INSTAGRAM POSTS</p>
                    <div className={styles.instagramPosts}>
                        <img src={instagramPost1} alt="Instagram Post 1" />
                        <img src={instagramPost2} alt="Instagram Post 2" />
                        <img src={instagramPost3} alt="Instagram Post 3" />
                        <img src={instagramPost4} alt="Instagram Post 4" />
                        <img src={instagramPost5} alt="Instagram Post 5" />
                        <img src={instagramPost6} alt="Instagram Post 6" />
                        <img src={instagramPost7} alt="Instagram Post 7" />
                        <img src={instagramPost8} alt="Instagram Post 8" />
                        <img src={instagramPost9} alt="Instagram Post 9" />
                    </div>
                    <hr className={styles.line}/>
                    <h1 className="bold">HEX (Hone And Explore)</h1>
                    <p className={styles.gray}>INTRODUCTION</p>
                    <div className={styles.hex}>
                        <img src={hex1} alt="HEX Post Design 1" />
                        <img src={hex2} alt="HEX Post Design 2" />
                        <img src={hex3} alt="HEX Post Design 3" />
                    </div>
                    <hr className={styles.line}/>
                    <p className={styles.gray}>WORKSHOP SCHEDULE</p>
                    <div className={styles.workshop}>
                        <img src={workshop1} alt="HEX Workshop Design 1" />
                        <img src={workshop2} alt="HEX Workshop Design 2" />
                        <img src={workshop3} alt="HEX Workshop Design 3" />
                        <img src={workshop4} alt="HEX Workshop Design 4" />
                    </div>
                    <hr className={styles.line}/>
                    <p className={styles.gray}>PRIZES</p>
                    <div className={styles.workshop}>
                        <img src={prizes1} alt="HEX Prizes Design 1" />
                        <img src={prizes2} alt="HEX Prizes Design 2" />
                    </div>
                    <hr className={styles.line}/>
                    <h1 className="bold">RGB (Reach Build Grow)</h1>
                    <p className={styles.gray}>ASSETS</p>
                    <div className={styles.rgb}>
                        <img src={rgb1} alt="RGB (Reach Build Grow) Asset Design 1" />
                        <img src={rgb2} alt="RGB (Reach Build Grow) Asset Design 2" />
                        <img src={rgb3} alt="RGB (Reach Build Grow) Asset Design 3" />
                    </div>
                    <hr className={styles.line}/>
                    <p className={styles.gray}>INSTAGRAM GRID</p>
                    <div className={styles.instagramPosts}>
                        <img src={instagramGrid1} alt="Instagram Grid Design 1" />
                        <img src={instagramGrid2} alt="Instagram Grid Design 2" />
                        <img src={instagramGrid3} alt="Instagram Grid Design 3" />
                        <img src={instagramGrid4} alt="Instagram Grid Design 4" />
                        <img src={instagramGrid5} alt="Instagram Grid Design 5" />
                        <img src={instagramGrid6} alt="Instagram Grid Design 6" />
                    </div>
                </div>
            );
        } else if (activeTab === "fall") {
            return (
                <div>
                    <h1 className="bold">Recruitment</h1>
                    <p className={styles.gray}>FLYERS</p>
                    <div className={styles.flyers}>
                        <img src={flyers1} alt="InnoD flyers 1"/>
                        <img src={flyers2} alt="InnoD flyers 2"/>
                    </div>
                    <hr className={styles.line}/>
                    <p className={styles.gray}>INSTAGRAM POSTS</p>
                    <div className={styles.instagramPosts}>
                        <img src={ig1} alt="Instagram Post 1" />
                        <img src={ig2} alt="Instagram Post 2" />
                        <img src={ig3} alt="Instagram Post 3" />
                        <img src={ig4} alt="Instagram Post 4" />
                        <img src={ig5} alt="Instagram Post 5" />
                        <img src={ig6} alt="Instagram Post 6" />
                        <img src={ig7} alt="Instagram Post 7" />
                        <img src={ig8} alt="Instagram Post 8" />
                        <img src={ig9} alt="Instagram Post 9" />
                    </div>
                    <hr className={styles.line}/>
                    <p className={styles.gray}>ASSETS</p>
                    <img src={innodAssets1} alt="Assets Set 1"/>
                    <hr className={styles.line}/>
                    <h1 className="bold">HEX (Hone And Explore)</h1>
                    <p className={styles.gray}>INTRODUCTION</p>
                    <div className={styles.hex}>
                        <img src={hex11} alt="HEX Post Design 1" />
                        <img src={hex21} alt="HEX Post Design 2" />
                        <img src={hex31} alt="HEX Post Design 3" />
                    </div>
                    <hr className={styles.line}/>
                    <p className={styles.gray}>FLYERS</p>
                    <div className={styles.flyers}>
                        <img src={hex41} alt="HEX Flyer 1"/>
                        <img src={hex51} alt="HEX Flyer 2"/>
                    </div>
                    <hr className={styles.line}/>
                    <p className={styles.gray}>PACKAGING</p>
                    <div className={styles.packaging}>
                        <img src={packaging1} alt="HEX Packaging 1"/>
                        <img src={packaging2} alt="HEX Packaging 2"/>
                    </div>
                    <hr className={styles.line}/>
                    <p className={styles.gray}>ASSETS</p>
                    <img src={innodAssets2} alt="Assets Set 2"/>
                    <hr className={styles.line}/>
                    <h1 className="bold">CMYK (Come Make Your Mark)</h1>
                    <p className={styles.gray}>FLYERS</p>
                    <div className={styles.flyers}>
                        <img src={cmyk1} alt="CMYK Flyer 1"/>
                        <img src={cmyk2} alt="CMYK Flyer 2"/>
                    </div>
                    <hr className={styles.line}/>
                    <p className={styles.gray}>INSTAGRAM POSTS</p>
                    <div className={styles.instagramPosts}>
                        <img src={cmyk3} alt="CMYK Post 1" />
                        <img src={cmyk4} alt="CMYK Post 2" />
                        <img src={cmyk5} alt="CMYK Post 3" />
                    </div>
                    <div className={styles.cymk}>
                        <img src={mlk} alt="CMYK Promotional IG Post"/>
                        <div className={styles.cymkChild}>
                            <img src={sponsor} alt="CMYK Promotional IG Post"/>
                            <img src={innodLogo} alt="CMYK Promotional IG Post"/>
                        </div>
                    </div>
                    <hr className={styles.line}/>
                    <p className={styles.gray}>ASSETS</p>
                    <img src={innodAssets3} alt="Assets Set 3"/>
                </div>
            );
        }
    }

    return (
        <div>
            <Helmet>
                <title>Uyen Phan - Innovative Design</title>
                <meta name="description" content="Innovative Design is a UC Berkeley's pro-bono creative agency. Marketing serves as the backbone of the club ensuring our events, club info, and mission spreads throughout campus!" />
            </Helmet>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img src={innovativeDesign} alt="Innovative Design Cover" />
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.innod}>
                    <div className={styles.intro}>
                        <div className={styles.introLeft}>
                            <div className={styles.leftChunk}>
                                <h3>Role</h3>
                                <p>Designer</p>
                            </div>
                            <div className={styles.leftChunk}>
                                <h3>Duration</h3>
                                <p>January - May 2023</p>
                                <p>August - December 2023</p>
                            </div>
                            <div className={styles.leftChunk}>
                                <h3>Disciplines</h3>
                                <p>Marketing, Visual Design, Graphic Design, Web Design, Marketing Strategy, Product/Merch Design </p>
                            </div>
                            <div className={styles.leftChunk}>
                                <h3>Team</h3>
                                <p>Bonwoo Kuh, Erin McCann, Shirley Xiao, Jirachaya Kiriruangchai, Akira Ono, Emma Petit</p>
                                <p>Halley Chang (Co-Lead) , Eileen Guo, Kyrene Tam, Alison Tam, Sofia Liashcheva, Lucy Yang</p>
                            </div>
                        </div>
                        <div className={styles.introRight}>
                            <p>Innovative Design, started in 2008, is a UC Berkeley's student run creative agency with three disciplines: Design, Photography, and Web. With our slogan “Make Berkeley Beautiful”, marketing is the backbone of the club making assets for our various campaigns throughout the semester through physical designs to instagram posts ( we have over 2000+ followers! )</p>
                            <p>I had so much fun being on the marketing team during Spring 2023 and decided to lead the team during Fall 2023! This semester we went outside the lines by introducing new design styles as well as merch products. </p>
                        </div>
                    </div>
                    <div className={styles.tabContainer}>
                        <div className={activeTab === "spring" ? styles.activeTab1 : styles.inactiveTab1}
                            onClick={() => handleClick("spring")}>
                            <p>Spring 2023</p>
                        </div>
                        <div className={activeTab === "fall" ? styles.activeTab2 : styles.inactiveTab2}
                            onClick={() => handleClick("fall")}>
                            <p>Fall 2023</p>
                        </div>
                    </div>
                    <hr className={styles.line} style={{marginTop:"30px"}}/>
                    <div>
                        {renderContent()}
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}