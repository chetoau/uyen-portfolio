import { useRef } from 'react';
import styles from '../css/CommunityGearbox.module.css';
import communityGearbox from '../images/community-gearbox.jpeg';
import { Helmet } from "react-helmet";
import Contact from './Contact';
import rockClimber from '../images/gearbox-rock-climber.png';
import collaboration from '../images/gearbox-collaboration.png';
import affinity from '../images/gearbox-affinity.png';
import icon1 from '../images/gearbox-icon-1.png';
import icon2 from '../images/gearbox-icon-2.png';
import icon3 from '../images/gearbox-icon-3.png';
import synthesis from '../images/gearbox-synthesis.png';
import conceptMapping from '../images/gearbox-concept-mapping.png';
import keyInsights from '../images/gearbox-key-insights.png';
import persona1 from '../images/gearbox-persona-1.jpg';
import persona2 from '../images/gearbox-persona-2.jpg';
import ideaBoard from '../images/idea-board.png' ;
import hypoImg from '../images/hypoImg.png';
import microSparkle from '../images/microSparkle.png';
import grayBox from '../images/gray-box.png';
import otherPlatforms from '../images/other-platforms.png';
import featuredFeats from '../images/featured-features.png';
import publicizing from '../images/publicizing.png';
import lendingBoard from '../images/lending-leaderboard.png';
import lofi from '../images/low-fidelity.png';
import homePage from '../images/home-page-gif.gif';
import groupPic from '../images/gearbox-group-pic.png';
import lending from '../images/lendingSurvey.png';
import borrowing from '../images/borrowSurvey.png';
import grayQuote from '../images/gray-textbox.png';
import ModalImage from 'react-modal-image';
import pointLine from '../images/point-line.png';
import leaderBoard from '../images/leaderboard-gif.gif';
import activityFeed from '../images/activity-feed.gif';
import profilePage from '../images/profile-page.gif'

export default function CommunityGearbox() {

    const finalDesignsRef = useRef(null);
    const scrollToFinalDesigns = () => {
        finalDesignsRef.current.scrollIntoView({ behavior: 'instant' });
    };

    return (
        <div>
            <Helmet>
                <title>Uyen Phan - Community Gearbox</title>
                <meta name="description" content="Creating mobile features to increase accountability and foster community engagement." />
            </Helmet>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img src={communityGearbox} alt="Community Gearbox Cover" />
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.gearbox}>
                    <div className={styles.intro}>
                        <div className={styles.introLeft}>
                            <div className={styles.leftChunk}>
                                <h3>Role</h3>
                                <p>Product Design Consultant (Contract)</p>
                            </div>
                            <div className={styles.leftChunk}>
                                <h3>Duration</h3>
                                <p>January - May 2023</p>
                            </div>
                            <div className={styles.leftChunk}>
                                <h3>Disciplines</h3>
                                <p>User Research, Mobile Design, Product Strategy, Prototyping</p>
                            </div>
                            <div className={styles.leftChunk}>
                                <h3>Team</h3>
                                <p>Isabel Zheng (Project Mentor), Michid Byambajav, Gily Yu, Geena Yin</p>
                            </div>
                        </div>
                        <div className={styles.introRight}>
                            <p>Community Gearbox, a San Francisco-based startup, aspires to foster a sustainable community and promote a circular economy by facilitating item borrowing and lending among its users.</p>
                            <p>The CEO approached us with the challenge of enhancing the collaborative aspects of this platform, with the aim of making the borrowing and lending experience more enjoyable and rewarding. The objective was to create an environment where individuals lending items not only feel valued but also encouraged to share more.</p>
                        </div>
                    </div>
                    <div className={styles.skipCont}>
                        <button className={styles.skip} onClick={scrollToFinalDesigns}>skip here to final designs</button>
                    </div>
                    
                    <h1>⚙️ WHAT IS COMMUNITY GEARBOX?</h1>
                    <div className={styles.gridWrapper}>
                        <div className={styles.whatIsCont}>
                            <p>Community Gearbox is a platform where people can <span className={`${styles.green} bold`}>lend and borrow items for free,</span> hence building deeper connections, decreasing individual consumption, and creating an abundance of shared resources.</p>
                            <h2 className={`${styles.green} bold`}>“Together we have so much”</h2>
                        </div>
                        <img src={rockClimber} alt="Rock Climber Design" />
                    </div>
                    <div className={styles.hypoContainer}>
                        <div className={styles.hypothesis}>
                            <h1>“A REAL SENSE OF ABUNDANCE”</h1>
                            <h4>HYPOTHESIS</h4>
                            <hr className={styles.shortLine} style={{color:"#889735"}} />
                            <p>the average group of millennial friends have a surprising amount of things to share with each other - somewhere between $20k to $40k worth between them</p>
                            <a href="https://communitygearbox.com/">https://communitygearbox.com/</a>
                        </div>
                        <img src={hypoImg} alt=""/>
                    </div>

                    <hr className="line" style={{marginTop:"30px", marginBottom: "70px"}}/>

                    <h1>PROBLEM SCOPE</h1>
                    <p className={styles.gray}>The CEO approached us with the challenge of enhancing the collaborative aspects of this platform, with the aim of making the borrowing and lending experience more enjoyable and rewarding. The objective was to create an environment where individuals lending items not only feel valued but also encouraged to share more.</p>
                    <div className={styles.tag} style={{marginTop:"40px"}}>
                        <div className={styles.leftSide}></div>
                        <div className={styles.rightSide}>
                            <p className={styles.rightSideContent}>HMW Design more <span className={styles.bold}>collaborative features</span> within Community Gearbox to make borrowing amongst a network of <span className={styles.bold}>trusting</span> people <span className={styles.bold}>delightful</span> and/or <span className={styles.bold}>rewarding</span>, so people lending items feel appreciated and compelled to share more and borrowers think of Community Gearbox before purchasing a new item?</p>
                            <img src={microSparkle} alt="" />
                        </div>
                    </div>
                    <hr className="line"  style={{marginTop:"70px", marginBottom: "70px"}}/>
                    <h1>BREAKING DOWN THE PROBLEM</h1>
                    <p className={styles.gray}>Wow, that was a mouthful! Let's break down the problem scope into bite-sized pieces.</p>
                    <div className={styles.hmw}>
                        <div className={styles.bulletPoint}>
                            <h3 className={styles.number} style={{padding: "7px 18px"}}>1</h3>
                            <div className={styles.semiPoint}>
                                <h4 className={styles.pointTitle}>Enhancing Collaborative Features</h4>
                                <p className={styles.pointDescription}>How can we design and implement more collaborative features within Community Gearbox to promote enjoyable interactions and foster trust among users who borrow and lend items?</p>
                            </div>
                        </div>
                        <div className={styles.bulletPoint}>
                            <h3 className={styles.number}>2</h3>
                            <div className={styles.semiPoint}>
                                <h4 className={styles.pointTitle}>Promoting Appreciation and Sharing</h4>
                                <p className={styles.pointDescription}>How can we create a system that makes lenders feel valued and appreciated for their contributions while also compelling them to share more frequently within the Community Gearbox network?</p>
                            </div>
                        </div>
                        <div className={styles.bulletPoint}>
                            <h3 className={styles.number}>3</h3>
                            <div className={styles.semiPoint}>
                                <h4 className={styles.pointTitle}>Influencing Consumer Behavior</h4>
                                <p className={styles.pointDescription}>How can we influence borrowers' decision-making processes, encouraging them to consider Community Gearbox as their first choice before making new purchases of items they may only need temporarily?</p>
                            </div>
                        </div>
                        <img src={collaboration} alt="GearBox Collaboration Design" />
                    </div>
                    <hr className="line"/>
                    <h1>DIVING INTO RESEARCH</h1>
                    <p className={styles.gray}>Research before designing is crucial because it involves understanding various human behaviors crucial to this project, such as collaboration, trust, and appreciation, which are similar but distinct in their own way. By uncovering these insights, research identifies opportunities for innovation and validates assumptions about user preferences, reducing the risks of developing features that may not resonate with users. This approach minimizes costly redesigns and ensures that design decisions are grounded in evidence, thereby enhancing user engagement, satisfaction, and the overall success of the platform.</p>
                    <img src={affinity} alt="Research Approach and Method Design Flow" style={{marginTop:"40px", marginBottom:"40px"}}/>
                    <hr className="line"/>
                    <h1> USER SURVEYS</h1>
                    <p className={styles.gray}>In our product design process, we initiate our user research with surveys. Given the diverse age range of our user base, spanning from young to older individuals, we have strategically chosen surveys as an effective means to gather insights from various age demographics.</p>
                    <h4 className={styles.boldGreen}>100+ responses</h4>
                    <h4 className={styles.gray} style={{marginBottom:"5px", marginTop:"0px"}} >GOALS OF USER SURVEYS</h4>
                    <hr className={styles.shorterLine} style={{width:"185px", marginLeft:"0px"}} />
                    <ul className={styles.responses}>
                        <li>Identify a variety of potential interviewees that demonstrate unique borrowing/ lending habits </li>
                        <li>Understand borrowing behavior</li>
                        <li>Understand how demographics and hobbies influence behavior</li>
                        <li>Understand the basis of building trust</li>
                    </ul>
                    <div className={styles.surveys}>
                        <img src={lending} alt="Lending Survey" />
                        <img src={borrowing} alt="Borrowing Survey" />
                    </div>
                    <h4 className={styles.gray} style={{marginBottom:"5px"}}>SURVEY INSIGHTS</h4>
                    <hr className={styles.shorterLine} style={{width:"185px", marginLeft:"0px"}}/>

                    <div className={styles.groupTags}>
                        <div className={styles.tag}>
                            <div className={styles.leftGreen}></div>
                            <div className={styles.rightGray}>
                                <h4 className="bold">Helping Feels Good 👍</h4>
                                <p>Satisfaction gained from doing good is a huge personal motivation for people to lend.</p>
                            </div>
                        </div>
                        <div className={styles.tag}>
                            <div className={styles.leftGreen}></div>
                            <div className={styles.rightGray}>
                                <h4 className="bold">Relationships Matter! ❤️</h4>
                                <p>The level of intimacy of relationships dictate the desire to borrow/ lend as mutual trust provides safety & security.</p>
                            </div>
                        </div>
                        <div className={styles.tag}>
                            <div className={styles.leftGreen}></div>
                            <div className={styles.rightGray}>
                                <h4 className="bold">Sustainability ≠ lending/ borrowing 🌿</h4>
                                <p>There is no strong correlation between sustainable habits and the frequency of lending/ borrowing.</p>
                            </div>
                        </div>
                    </div>

                    <hr className="line"/>
                    <h1>USER INTERVIEWS</h1>
                    <p className={styles.gray}>We interviewed 11 interviewers who key characteristics are: niche hobbies, adventurous, sharing, trusting, community oriented, socially-conscious, on a budget. This diverse group, spanning in age from 18 to 60, is geographically dispersed across Berkeley, Seattle, and Virginia.</p>
                    <div className={styles.hmw1} style={{marginTop:"70px"}}>
                        <div className={styles.withIcon}>
                            <img src={icon1} alt="" />
                            <h4 className="bold">Borrowing and Lending Behavior</h4>
                            <p>Documenting detailed accounts of positive and negative past borrowing/lending experiences</p>
                        </div>
                        <div className={styles.withIcon}>
                            <img src={icon2} alt="" style={{maxWidth:"50px"}} />
                            <h4 className="bold">Rewarding Experiences</h4>
                            <p>Looking into what makes people feel appreciated and feel a sense of achievement</p>
                        </div>
                        <div className={styles.withIcon}>
                            <img src={icon3} alt="" />
                            <h4 className="bold">Digital Communities and Environments</h4>
                            <p>Uncovering favorable digital features that form connections and build strong communities</p>
                        </div>
                        <img className={styles.grayQuote} src={grayQuote} alt="User Interview Quote" />
                    </div>
                    <hr className="line"/>
                    <h1>PUTTING ALL THE RESEARCH TOGETHER</h1>
                    <p className={styles.gray} style={{marginBottom:"0px", marginTop:"30px"}} >AFFINITY DIAGRAM</p>
                    <hr className={styles.shorterLine} style={{width:"185px", marginLeft:"0px"}}/>
                    <div className={styles.synthesis}>
                        <div className={styles.listingPoints}>
                            <div>
                                <h4 className={styles.greenText}>Lending Habits</h4>
                                <p>Considerations that factor into lending</p>
                            </div>
                            <div>
                                <h4 className={styles.greenText}>Borrowing Habits</h4>
                                <p>Typical behaviors and desires of borrowers</p>
                            </div>
                            <div>
                                <h4 className={styles.greenText}>Gratuity</h4>
                                <p>How individuals express appreciation to others</p>
                            </div>
                            <div>
                                <h4 className={styles.greenText}>Digital Features</h4>
                                <p>Aspects of digital experiences that people enjoy</p>
                            </div>
                        </div>
                        <div className={styles.modal}>
                            <ModalImage small={synthesis} large={synthesis}/>
                            <p className={styles.gray}>click image to enlarge</p>
                        </div>
                    </div>
                    <p className={styles.gray} style={{marginBottom:"0px", marginTop:"70px"}} >CONCEPT MAPPING</p>
                    <hr className={styles.shorterLine} style={{width:"185px", marginLeft:"0px"}}/>
                    <p className={styles.containText}>Connecting reoccuring patterns to the values, motivations, and priorities of potential users</p>
                    <div className={styles.synthesis}>
                        <div className={styles.listingPoints}>
                            <div>
                                <h4 className={styles.greenText}>Community</h4>
                                <p>Accountability, Reciprocal Relationships, Connection</p>
                            </div>
                            <div>
                                <h4 className={styles.greenText}>Digital Features</h4>
                                <p>Openness, Goal Oriented, Visual Features</p>
                            </div>
                            <div>
                                <h4 className={styles.greenText}>Borrowing & Lending</h4>
                                <p>Familiarity, Saving Money, Exploration, Altruism + Acknowledgement</p>
                            </div>
                        </div>
                        <div className={styles.modal}>
                            <ModalImage small={conceptMapping} large={conceptMapping}/>
                            <p className={styles.gray}>click image to enlarge</p>
                        </div>
                    </div>
                    <hr className="line"/>
                    <h1 style={{marginTop:"70px", marginBottom:"40px"}}>KEY INSIGHTS MOVING FORWARD</h1>
                    <img src={keyInsights} alt="Key insights" style={{marginBottom:"30px"}}/>
                    <hr className="line"/>
                    <h1>PUTTING ALL THE RESEARCH TOGETHER</h1>
                    <p className={styles.gray} style={{marginBottom:"0px", marginTop:"40px"}}>USER PERSONA</p>
                    <hr className={styles.shorterLine} style={{width:"185px", marginLeft:"0px"}}/>
                    <p className={styles.gray} style={{marginTop:"10px", fontSize:"16px", marginBottom:"50px"}}>Found out that we want to focus on the lender aspects.</p>
                    <img className={styles.persona} src={persona2} alt="Gearbox Persona Journey" />
                    <p className={styles.gray} style={{marginBottom:"0px", marginTop:"40px"}}>USER JOURNEY</p>
                    <hr className={styles.shorterLine} style={{width:"185px", marginLeft:"0px"}}/>
                    <p className={styles.gray} style={{marginTop:"10px", fontSize:"16px", marginBottom:"50px"}}>Experience online and offline of a lender. </p>
                    <img className={styles.persona} src={persona1} alt="Gearbox Persona Journey" />
                    <p>The pain points for The Loyal Lender emerge towards the end of their journey. They feel good about sharing their items with people in need. However, because the interaction is online, they might be unsure about the communication and boundaries they need to set for the items exchanged. This uncertainty can lead to potential damages and confusion about how to handle such situations. Consequently, their trust is compromised, which may discourage them from using the app further</p>
                    <hr className="line" style={{marginTop:"70px", marginBottom:"65px"}}/>
                    <h1>RESEARCH TO DESIGN DECISIONS</h1>
                    <p>That’s a lot of research methods, but what does it all mean when making design descisions? </p>
                    <div className={styles.researchCont}>
                        <div className={styles.research1}>
                            <p>1. UNDERSTAND WHAT THESE FEATURES SHOULD BE SOLVING</p>
                            <img src={grayBox} alt="" />
                        </div>
                        <div className={styles.research2}>
                            <p>2. IDEATING IDEAS AND RATIONALIZING THEM</p>
                            <img src={ideaBoard} alt="" />
                        </div>
                        <div className={styles.research3}>
                            <p>3. QUICK RESEARCH OF WHAT OTHER PLATFORMS ARE DOING TO SPARK TRUST</p>
                            <img src={otherPlatforms} alt="" />
                        </div>
                    </div>
                    <p style={{color:"#797979", fontSize:"15px", marginBottom:"30px"}}>4. FINALIZE WITH DESIGN DECISIONS</p>
                    <img style={{marginBottom:"70px"}} src={featuredFeats} alt="" />
                    <img style={{marginBottom:"70px"}} src={publicizing} alt="" />
                    <img style={{marginBottom:"40px"}} src={lendingBoard} alt="" />

                    <hr style={{marginBottom:"60px"}} className="line"/>

                    <h1>STARTING THE DESIGN PROCESS</h1>
                    <p className={styles.gray} style={{marginBottom:"40px"}}>Our team created low-fidelity and mid-fidelity designs to help us vision out the designs a lot better. These are some of the many screens we designed to explore our ideas further. </p>
                    <img src={lofi} alt="" style={{marginBottom:"30px"}}/>

                    <hr className="line" ref={finalDesignsRef} style={{marginBottom:"60px"}}/>
                    <h1 style={{marginBottom:"40px"}}>🪄 FINAL DESIGNS (TA-DA!)</h1>
                    
                    <div className={styles.finalCont}>
                        <div className={styles.darkGreen}>
                            <h2>HOME PAGE</h2>
                        </div>
                        <div className={styles.halfGreen}>
                            <div className={styles.left}>
                                <h3>💬  Community Building</h3>
                            </div>
                            <div className={styles.middle}>
                                <img src={homePage} alt="" />
                            </div>
                            <div className={styles.right}>
                                <div style={{marginTop:"60px"}} className={styles.subPoint}>
                                    <div className={styles.finalHeading}>
                                        <img src={pointLine}/>
                                        <h3>PRIVATE GROUPS</h3>
                                    </div>
                                    <div className={styles.finalText}>
                                        <p>Horizontal scroll for private groups catering to niche interests and communities.</p>
                                    </div>
                                </div>
                                <div style={{marginTop:"60px"}} className={styles.subPoint}>
                                    <div className={styles.finalHeading}>
                                        <img src={pointLine}/>
                                        <h3>COMMUNITY</h3>
                                    </div>
                                    <div className={styles.finalText}>
                                        <p>Reflecting the horizontal scroll above, friends with the most interactions appear here, with the option to view more. Requests and suggestions are also located in this section.</p>
                                    </div>
                                </div>
                                <div className={styles.subPoint}>
                                    <div className={styles.finalHeading}> 
                                        <img src={pointLine}/>
                                        <h3>LEADERBOARD</h3>
                                    </div>
                                    <div className={styles.finalText}>
                                        <p>Overview of your achievements (exchanges) and your rankings among friends.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.finalCont}>
                        <div className={styles.darkGreen}>
                            <h2>LEADERBOARD</h2>
                        </div>
                        <div className={styles.halfGreen}>
                            <div className={styles.left}>
                                <h3>💬  Community Building</h3>
                                <h3>💚  Building Trust  </h3>
                            </div>
                            <div className={styles.middle}>
                                <img src={leaderBoard} alt="" />
                            </div>
                            <div className={styles.right} style={{paddingTop:"80px"}}>
                                <div className={styles.subPoint}>
                                    <div className={styles.finalHeading}>
                                        <img src={pointLine}/>
                                        <h3>PUBLICIZING EXCHANGES </h3>
                                    </div>
                                    <div className={styles.finalText}>
                                        <p>Displaying exchange counts under each user highlights achievements, measures activity, and fosters app-wide competition.</p>
                                    </div>
                                </div>
                                <div className={styles.subPoint} style={{paddingTop:"80px"}}>
                                    <div className={styles.finalHeading}>
                                        <img src={pointLine}/>
                                        <h3>YOUR RANKING</h3>
                                    </div>
                                    <div className={styles.finalText}>
                                        <p>Highlighting your rank among friends on a mobile app leaderboard encourages competition while  motivates engagement within app.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.finalCont}>
                        <div className={styles.darkGreen}>
                            <h2>ACTIVITY FEED</h2>
                        </div>
                        <div className={styles.halfGreen}>
                            <div className={styles.left}>
                                <h3>⚠️  Accountability</h3>
                                <h3>💚  Building Trust</h3>
                                <h3>💬  Community Building</h3>
                            </div>
                            <div className={styles.middle}>
                                <img src={activityFeed} alt="" />
                            </div>
                            <div className={styles.right} style={{paddingTop:"80px"}}>
                                <div className={styles.subPoint}>
                                    <div className={styles.finalHeading}>
                                        <img src={pointLine}/>
                                        <h3>PUBLICIZING EXCHANGES</h3>
                                    </div>
                                    <div className={styles.finalText}>
                                        <p>Inspired by Venmo's social aspect of lending and borrowing, publicizing this encourages users to feel more accountable.</p>
                                    </div>
                                </div>
                                <div className={styles.subPoint}>
                                    <div className={styles.finalHeading}>
                                        <img src={pointLine}/>
                                        <h3>IMAGES, REACTS, COMMENTS</h3>
                                    </div>
                                    <div className={styles.finalText}>
                                        <p>Users can upload images, react to posts, and comment, inspiring others to engage in borrowing and lending as participation grows.</p>
                                    </div>
                                </div>
                                <div className={styles.subPoint}>
                                    <div className={styles.finalHeading}> 
                                        <img src={pointLine}/>
                                        <h3>ENTRY POINT TO PROFILES & ITEMS</h3>
                                    </div>
                                    <div className={styles.finalText}>
                                        <p>Users can click on items and profiles within this feed for easy access (requesting use) or to view someone's inventory.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.finalCont}>
                        <div className={styles.darkGreen}>
                            <h2>PROFILE PAGE</h2>
                        </div>
                        <div className={styles.halfGreen}>
                            <div className={styles.left}>
                                <h3>⚠️  Accountability</h3>
                                <h3>💚  Building Trust</h3>
                            </div>
                            <div className={styles.middle}>
                                <img src={profilePage} alt="" />
                            </div>
                            <div className={styles.right} style={{paddingTop:"80px"}}>
                                <div className={styles.subPoint}>
                                    <div className={styles.finalHeading}>
                                        <img src={pointLine}/>
                                        <h3>SLIDE UP PROFILE</h3>
                                    </div>
                                    <div className={styles.finalText}>
                                        <p>Access someone's profile directly from the borrowing feed.</p>
                                    </div>
                                </div>
                                <div className={styles.subPoint}>
                                    <div className={styles.finalHeading}>
                                        <img src={pointLine}/>
                                        <h3>REQUEST FORM</h3>
                                    </div>
                                    <div className={styles.finalText}>
                                        <p>Send a request for an item by filling out necessary information such as the pickup time, pickup person, and return process.</p>
                                    </div>
                                </div>
                                <div className={styles.subPoint}>
                                    <div className={styles.finalHeading}> 
                                        <img src={pointLine}/>
                                        <h3>CARD VIEW OF ALL ITEMS</h3>
                                    </div>
                                    <div className={styles.finalText}>
                                        <p>All items are displayed on separate cards for easier organization and distinction between them.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="line"/>

                    <h1>A SPECIAL THANKS TO...</h1>
                    <p>My lovely team and Dante, the founder of Community Gearbox, met with us every week to discuss his future vision for his startup and provide feedback on our designs. Working with a startup founder has deepened my passion for creating products that will not only support the company's mission but also deliver value to its users.</p>

                    <img src={groupPic} alt="" />

                </div>
            </div>
            <Contact />
        </div>
    )
}