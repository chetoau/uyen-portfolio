import styles from '../css/Justworks.module.css';
import justworks from '../images/justworks.jpeg';
import { Helmet } from "react-helmet";
import Contact from './Contact';
import justworksAbout from '../images/justworksAbout.png';
import growingPains from '../images/growingPains.png';
import desktopVersion from '../images/desktopVersion.png';
import textPic from '../images/Text.png';
import listPage from '../images/listPage.png';
import profilePage from '../images/profilePage.png';
import userTesting from '../images/userTesting.png';
import listpageGif from '../images/listpageGif.gif';
import profilepageGif from '../images/profilepageGif.gif';
import mustHave from '../images/mustHave.png';
import onTheGo from '../images/onTheGo.png';
import searchbar from '../images/searchBar.png';
import replicatingDesktop from '../images/replicatingDesktop.png';
import freeingInformation from '../images/freeingInformation.png';
import spacingInformation from '../images/spacingInformation.png';
import expensePage from '../images/expensePage.png';
import expenseRequest from '../images/expenseRequest.png';
import expenseHome from '../images/expenseHoime.png';
import profileStates from '../images/profileStates.png';
import jw_hiddenInfo from '../images/jw_hiddenInfo.png';
import test from '../images/test.gif';
import copyInfo from '../images/jw_copyInfo.png';
import alphabetDept from '../images/alphabetDept.png';
import jw_searchFunc from '../images/jw_searchFunc.png';
import final_listPage from '../images/final_listPage.gif';
import final_profilePage from '../images/final_profilePage.gif';
import expHighlights from '../images/expHighlights.png';
import marchSuccess from '../images/marchSuccess.png';
import jw_reflections from '../images/jw_reflections.png';
import jw_thanks from '../images/jw_thanks.png';
import drawingBoard from '../images/drawingBoard.gif';
import jw_landing from '../images/jw_landingPage.gif';


export default function Justworks() {
    return (
        <div>
            <Helmet>
                <title>Uyen Phan - Justworks</title>
                <meta name="description" content="Developed a mobile directory, streamlining access to important information for over 1000 companies and their employees." />
            </Helmet>
            <div className={styles.coverbackground}>
                <div className="limitWidth">
                    <img className={styles.imageDown} src={justworks} alt="Justworks Cover" />
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.justworks}>
                    <div className={styles.intro}>
                        <div className={styles.introLeft}>
                            <div className={styles.leftChunk}>
                                <h3>ROLE</h3>
                                <p>Product Design Intern, Mobile Team</p>
                            </div>
                            <div className={styles.leftChunk}>
                                <h3>DURATION</h3>
                                <p>May - August 2023</p>
                            </div>
                            <div className={styles.leftChunk}>
                                <h3>DISCIPLINES</h3>
                                <p>Product Design, User Research, User Interface, Interaction Design, Mobile Design</p>
                            </div>
                        </div>
                        <div className={styles.introRight}>
                            <p>In the summer of 2023, I interned at Justworks, a financial tech company that aims to level the playing field for small businesses. I designed an end-to-end project, seamlessly integrating a mobile directory into their new platform, enhancing internal communication for employees. This feature was shipped in February 2024.</p>
                            <p>Additionally, I built design components for a smooth directory integration into the company's mobile product ecosystem.</p>
                        </div>
                    </div>
                    <img src={justworksAbout} alt=""/>
                    <hr className={styles.line}/>
                   
                    <h3 style={{marginBottom:"40px"}}>CONTEXT: GROWING PAINS OF A GROWING BUSINESS</h3>
                    <p className ={styles.lightGray}>As a growing company, Justworks offers a simple and friendly platform helping businesses <span className={styles.bold}>“manage, grow & run easily.”</span></p>
                    <p className ={styles.lightGray}>Justworks understand the growth pains of a growing company - onboarding new employees, streamlining communication, and ensuring all part of their company is well integrated and structured. This project focuses on streamlining communication between all employees.</p>
                    <img className={styles.spacing} src={growingPains} alt=""/>
                    <img className={styles.halfSpacing} src={desktopVersion} alt=""/>
                    <hr className={styles.line}/>
                    <div className={styles.infoSection}>
                        <div className={styles.infoSubsection}>
                            <h3>INFORMATION IS NOT ACCESSIBLE 🚫</h3>
                            <p>Having a mobile directory helps with....</p>
                            <ul>
                                <li><span className={styles.bold}>Efficient Communication:</span> streamlines communication within a company by providing quick access to contact details reducing time and effort.</li>
                                <li><span className={styles.bold}>Accessibility:</span> employees can access important contact information anytime, anywhere, making it easier to reach colleagues especially when working remotely or on the go.</li>
                                <li><span className={styles.bold}>Integration:</span> Mobile directories can integrate with other communication tools and systems.</li>
                            </ul>
                        </div>
                        <img src={textPic} className={styles.textPic} alt=""/>
                        
                    </div>
                    <br/>
                    <hr className={styles.line}/>
                    <h3>EXPLORING THE CURRENT DESKTOP DIRECTORY</h3>
                    <div className={styles.imageAndContent}>
                        <img src={listPage} alt=""/>
                        <img src={profilePage} alt=""/>
                    </div>
                    <div className={styles.question}>
                        <h3 style={{fontFamily:"Livvic", fontSize:"15px", color:"#919191"}}>ULTIMATELY ASKING THE QUESTION</h3>
                        <h3 style={{fontSize: "27px"}} className={styles.bold}>How might we make and design our directory feature to be <span className={styles.blueHighlight}>most relevant to mobile users?</span></h3>
                    </div>
                    <hr className={styles.line}/>
                    <h3>FOCUS: SMALL COMPANIES</h3>
                    <div className={styles.smallComp}>
                        <div className={styles.comp}>
                            <p>Conducted sessions of unmoderated research on employees at companies between the sizes of 10 to 50 total employees.</p>
                            <p>Split the test into four sections</p>
                            <ul>
                                <li>Preliminary questions </li>
                                <li>Overview of the current Justworks Web browser directory </li>
                                <li>Finding a specific person in the Directory </li>
                                <li>Post questions </li>
                            </ul>
                        </div>
                        <img className={styles.userTest} src={userTesting} alt=""/>
                    </div>
                    <div style={{marginTop:"50px"}} className={styles.prototypesSec}>
                        <div className={styles.protoSec}>
                            <img src={listpageGif} alt=""/>
                            <p style={{fontSize:"15px"}} className={styles.lightGray}>List page prototype</p>
                        </div>
                        <div className={styles.protoSec}>
                            <img src={profilepageGif} alt=""/>
                            <p style={{fontSize:"15px"}} className={styles.lightGray}>Profile page prototype</p>
                        </div>
                    </div>
                    <hr className={styles.line}/>
                    <h3>TOP THREE INSIGHTS</h3>
                    <div className={styles.findingsWrapper}>
                        <img src={mustHave} alt=""/>
                        <img src={onTheGo} alt=""/>
                        <img src={searchbar} alt=""/>
                    </div>
                    <hr style={{marginTop: "60px", marginBottom: "60px"}}/>
                    <h3>THUS, BEGAN THE MANY ITERATIONS (8 in fact!)</h3>
                    <p>For the starting point, I replicated the desktop version of the directory to observe how the layout and information would appear on a mobile screen. From there, I listed the pros and cons of the design, with each iteration addressing specific pain points. Below are the highlights from my eight iterations, which led to the final designs that address all requirements.
                    </p>
                    <img style={{marginTop:"40px"}} src={replicatingDesktop} alt=""/>
                    <div  className={styles.withBlueLine}>
                        <p>While replicating the desktop directory offers users a sense of consistency and familiarity, the designs were originally intended for larger screens and touchpoints, posing challenges on mobile devices regarding touch interactions and interactivity. Additionally, the visual appeal suffers due to the boxed layout, which constrains information within the space available.</p>
                    </div>
                    <br/>
                    <img style={{marginTop:"40px"}} src={freeingInformation} alt=""/>
                    <div className={styles.withBlueLine}>
                        <p>Removing the boxed design improved visual clarity for mobile users. Icons now replace traditional desktop hyperlinks to guide navigation to subsequent pages. This change was made possible by utilizing more screen space without boxed layouts, which enhanced efficiency and allowed for interactive icons. However, there’s now a lack of consistency between all the information on the page. .</p>
                    </div>
                    <br/>
                    <img style={{marginTop:"40px"}} src={spacingInformation} alt=""/>
                    <div className={styles.withBlueLine}>
                        <p>Now all types of information (personal information, contact information, manager & direct reports) are laid out more cohesively with a common architectural hierarchy. I initially believed this was a solid design. However, after discussing it with other designers on the team and externally, I realized one crucial aspect I had overlooked: Does this design align with the current mobile design system?</p>
                    </div>
                    <br/>
                    <hr style={{marginBottom:"70px", marginTop:"50px"}} />
                    <h3>❗A RAISING CONCERN: THIS WORKS AS A MOBILE DIRECTORY IN GENERAL, BUT WOULD IT FIT WITH THE CURRENT MOBILE DESIGN SYSTEM?</h3>
                    <p>Justworks’ mobile design system currently heavily relies on “cards” in order to separate information</p>
                    <div className={styles.expenses}>
                        <div className={styles.expenseContainer}>
                            <p>EXPENSE PAGE</p>
                            <img src={expensePage} alt=""/>
                        </div>
                        <div className={styles.expenseContainer}>
                            <p>EXPENSE REQUEST</p>
                            <img src={expenseRequest} alt=""/>
                        </div>
                        <div className={styles.expenseContainer}>
                            <p>HOME PAGE</p>
                            <img src={expenseHome} alt=""/>
                        </div>
                    </div>
                    <div className={styles.feedbackDrawing}>
                        <h3>AFTER GETTING FEEDBACK FROM THE TEAM....BACK TO THE DRAWING BOARD </h3>
                        <p>Maintaining <span className={styles.bold}>consistent architecture</span> hierarchy provides users with a sense of <span className={styles.bold}>cohesion and familiarity</span> as they navigate through the pages.</p>
                    </div>
                    <hr style={{marginBottom:"60px", marginTop:"80px"}} className={styles.line}/>

                    <h3 style={{marginBottom:"0px"}}>BACK TO THE DRAWING BOARD</h3>
                    <p className={styles.lightGray}>After getting feedback from the team to keep in mind the current mobile design system, back to the drawing board we go! (but we are close!) With these card iterations, I tested out three main options. </p>
                    <img style={{marginBottom:"60px", marginTop:"50px"}} src={drawingBoard} alt=""/>
                    <h3>LANDING ON OPTION 3: Everything in their own cohesive card with no separation. </h3>
                    <img style={{marginTop:"40px"}} src={jw_landing} alt=""/>
                    <hr style={{marginBottom:"70px", marginTop:"70px"}} className={styles.line}/>

                    <h3>TAKING INTO ACCOUNT THE VARIOUS STATES OF THE PROFILE PAGE. </h3>
                    <p style={{fontSize:"17px"}} className={styles.lightGray}>In the process of refining the user experience, various scenarios were taken into account, including cases where certain information, such as birthdays or pronouns, can be hidden, or situations where an employee lacks direct reports or both a manager and direct reports. To enhance the design of these unique states and promote efficiency, I developed a comprehensive design system. This system not only streamlines the design process for these scenarios but also provides a versatile set of design components that can be leveraged for future use.</p>
                    <img style={{marginTop:"40px", marginBottom:"60px"}} src={profileStates} alt="" />
                    <img style={{marginBottom:"60px"}} src={jw_hiddenInfo} alt="" />
                    <img style={{marginBottom:"60px"}} src={test} alt="" />
                    <img style={{marginBottom:"60px"}} src={copyInfo} alt="" />

                    <hr className={styles.line}/>
                    <h3>DESIGNING THE LIST PAGE </h3>
                    <p style={{fontSize:"17px"}} className={styles.lightGray}>With the profile page finalized, the designs for the list page became a lot easier</p>
                    <img style={{marginTop:"40px", marginBottom:"50px"}} src={alphabetDept} alt="" />
                    <img style={{marginBottom:"35px"}} src={jw_searchFunc} alt="" />
                    <h3>INFINITE SCROLLING</h3>
                    <p className={styles.lightGray}>While the endless possibilities exist, loading all employees simultaneously poses a threat to user experience, potentially causing sluggishness or lag within the app. To tackle this issue, I collaborated closely with our engineering team to pinpoint the optimal solution.</p>
                    <p className={styles.gray}>For the initial page load, we've strategically chosen to load the first set of 50 employees. As users navigate through the list, and they approach the last 25 names displayed, our system initiates the loading of an additional 50 names. This sweet spot ensures that users experience a smooth and uninterrupted browsing experience, maintaining a harmonious balance between usability and performance.</p>

                    <hr className={styles.line}/>
                    <h3>🪄 FINAL DESIGNS (TA-DA!)  </h3>
                    <p className={styles.gray}>After many iterations and feedback from everyone from the team, these are the final designs. </p>

                    <img style={{marginTop:"40px", marginBottom:"50px"}} src={final_listPage} alt="" />
                    <img style={{marginBottom:"50px"}} src={final_profilePage} alt="" />

                    <hr className={styles.line}/>
                    <h3>THE MOBILE DIRECTORY WAS SHIPPED! ⛵ </h3>
                    <p>My team sent me this slide from their launch meeting to let me know the designs were shipped!</p>
                    <img style={{marginTop:"40px", marginBottom:"50px"}} src={expHighlights} alt="" />
                    <h3>SUCCESS METRICS</h3>
                    <p>For March, I received metrics regarding the interactivity of the mobile directory, showing that users are not only accessing the directory but also actively exploring individual profiles and using the directory to connect with others.</p>
                    <img style={{marginTop:"40px", maxWidth:"450"}} src={marchSuccess} alt=""/>

                    <hr className={styles.line}/>
                    <h3>REFLECTIONS</h3>
                    <p>Oh, so many valuable lessons</p>
                    <img style={{marginTop:"40px", marginBottom:"20px"}} src={jw_reflections} alt=""/>

                    <hr className={styles.line}/>
                    <h3>A SPECIAL THANKS TO...</h3>
                    <p style={{fontSize:"17px"}} className={styles.gray}>The mobile team within Justworks as well as my mentor and the product design department for guiding me through the project step by step! And a big thank you to New York City for all the fun times I had over the summer!</p>
                    <img style={{marginTop:"40px"}} src={jw_thanks} alt="" />
                    
                </div>
            </div>
            <Contact />
        </div>
    )
}