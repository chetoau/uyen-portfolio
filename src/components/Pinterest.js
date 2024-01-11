import styles from '../css/Pinterest.module.css';
import pinterest from '../images/pinterest-comp.png';
import { Helmet } from "react-helmet";
import Contact from './Contact';
import quickPromoteSteps from '../images/quickPromoteSteps.png';
import smbGraph1 from '../images/smbGraph1.png';
import smbGraph2 from '../images/smbGraph2.png';
import smbStats from '../images/smbStats.png';
import gif1 from '../images/pinterest-gif1.gif';
import gif2 from '../images/pinterest-gif2.gif';
import gif3 from '../images/pinterest-gif3.gif';
import thumbDown from '../images/thumb-down.png';
import heartNotif from '../images/heart-notif.png';
import redTextBox from '../images/redTextBox.png';
import textBoxes from '../images/textBoxes.png';
import boyIcon from '../images/boyiCon.png';
import pin from '../images/redPin.png';
import target from '../images/target.png';
import thumbDownSmall from '../images/thumb-down-small.png';
import categories from '../images/categories.png';
import adCreation from '../images/adCreation.png';
import keyFeature from '../images/keyFeature.png';
import pricing from '../images/pricing.png';
import customerSupport from '../images/customerSupport.png';
import usability from '../images/usability.png';
import demographics from '../images/demographics.png';
import rankings from '../images/rankings.png';
import medal from '../images/medal.png';
import newbie from '../images/newbie.png';
import veteran from '../images/veteran.png';
import journeyMap from '../images/journeyMap.png';
import tags from '../images/tags.png';
import pin2 from '../images/pin2.png';
import pointer from '../images/pointer.png';
import folder from '../images/folder.png';
import star from '../images/star.png';
import pinUploadFlow from '../images/pinUploadFlow.png';
import targeting from '../images/targeting.png';
import guidance from '../images/guidance.png';
import uiImprovements from '../images/uiImprovements.png';
import current1 from '../images/current1.png';
import new1 from '../images/new1.png';
import current2 from '../images/current2.png';
import new2 from '../images/new2.png';
import current3 from '../images/current3.png';
import new3 from '../images/new3.png';
import current4 from '../images/current4.png';
import new4 from '../images/new4.png';
import current5 from '../images/current5.png';
import new5 from '../images/new5.png';

export default function Pinterest() {
    return (
        <div>
            <Helmet>
                <title>Uyen Phan - Pinterest</title>
                <meta name="description" content="Developed a mobile directory, streamlining access to important information for over 1000 companies and their employees." />
            </Helmet>
            <div className={styles.coverbackground}>
                <img className={styles.imageDown} src={pinterest} alt="Pinterest Cover" />              
            </div>
            <div className="limitWidth">
                <div className={styles.pinterest}>
                    <div className={styles.intro}>
                        <div className={styles.introLeft}>
                            <div className={styles.leftChunk}>
                                <h3>Role</h3>
                                <p>Product Design Consultant</p>
                            </div>
                            <div className={styles.leftChunk}>
                                <h3>Duration</h3>
                                <p>September - December 2023</p>
                            </div>
                            <div className={styles.leftChunk}>
                                <h3>Disciplines</h3>
                                <p>Product Design, User Research, User Interface, Interaction Design, Mobile Design</p>
                            </div>
                            <div className={styles.leftChunk}>
                                <h3>Team</h3>
                                <p>Sarah Suen, Michid Byambajav, Angie Nguyen, Heli Balsara </p>
                            </div>
                        </div>
                        <div className={styles.introRight}>
                            <p>Pinterest’s mission is to “bring everyone the inspiration to create a life they love”, a platform loved not only by designers (like myself) but for over 482 million users monthly worldwide. <span className={styles.bold}>However, not many see Pinterest as a business hub.</span> </p>
                            <p>With that, the Product Team at Pinterest asked us, Berkeley Innovation, to increase awareness to their business side. This sounds pretty daunting and big in scope, so the team tasked us with honing in on a not fully developed <span className={styles.bold}>“Quick Promote” feature that aims for SMBs (small-medium business) to effectively promote their business.</span> </p>
                        </div>
                    </div>
                    <br/>
                    <hr/>

                    <div style={{display:"flex", flexDirection:"column", paddingBottom: "30px", gap: "10px"}}>
                        <h3 style={{fontSize:"30px", fontFamily:"Karla Regular"}}>JUST LIKE THE NAME, “<span className={styles.red}>QUICK PROMOTE</span>” ARE BROKEN DOWN TO THREE SIMPLE STEPS</h3>
                        <img src={quickPromoteSteps} alt=""/>
                    </div>
                    
                    <hr/>

                    <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                        <h3 style={{fontSize:"30px", fontFamily:"Karla Regular"}}>WHY ARE WE FOCUSING ON SMALL-MEDIUM BUSINESSES? (SMBs) </h3>
                        <p style={{fontSize:"15px"}}>To identify overarching trends regarding the challenges faced by small and medium-sized businesses, we conducted <span className={styles.bold}>preliminary research</span>. This research aimed to provide insights into why it is crucial for SMBs to utilize easy-to-use features such as the "Quick Promote" feature. </p>
                        <div className={styles.mobileResponse}>
                            <div className={styles.mobileBox1}>
                                <p style={{fontSize:"17px"}}>BUSINESS TYPE</p>
                                <img src={smbGraph1} alt=""/>
                            </div>
                            <div className={styles.mobileBox2}>
                                <p style={{fontSize:"17px"}}>WHO’S RUNNING SMALL-MEDIUM BUSINESS MARKETING?</p>
                                <img src={smbGraph2} alt=""/>
                            </div>
                        </div>
                        <img src={smbStats} className={styles.statsImg} alt=""/>
                        <br/>
                        <p>To power the inspiration found on Pinterest, merchants large and small come to build their presence, uploading their catalog and promoting their products.  Small and medium businesses (SMBs) often <span className={styles.bold}>juggle multiple responsibilities</span>. It can be <span className={styles.bold}>overwhelming creating a campaign</span> for the first time. </p>
                    </div>
                    <br/>

                    <hr/>

                    <h3 className={styles.gray} style={{fontSize:"20px", marginBottom: "0px", marginTop:"40px"}}>SO ULTIMATELY, WE WANT TO ASK THE QUESTION OF....</h3>
                </div>
            </div>
            <div style={{backgroundColor:"#FFE6E6"}}>
                <div className="limitWidth">
                    <div className={styles.pinterest} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <div>
                        <h3 style={{fontSize: "30px", fontFamily:"SF Pro Bold",  marginBottom:"0px", marginTop:"10px"}}>How Might We...</h3>
                        <p style={{fontSize:"18px"}}>Design an approachable  and dedicated ad creation flow to support new merchants <span className={styles.boldRed}>promoting their products on Pinterest for the first time?</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.redGradientBG}>
                <div className="limitWidth">
                    <div className={styles.redSection}>
                        <p style={{fontSize:"18px"}}>#ExclusiveReveal #Recommendations</p>
                        <h2 style={{fontFamily:"Karla Regular", fontSize:"30px"}}>CORE CHANGES TO THE 3-STEP AD CREATION PROCESS</h2>
                        <p style={{fontSize:"17px"}}>To enhance the user flow and usability of the current three-step process, we refined each stage to specifically address users' pain points and frustrations at every step of the process.</p>
                    </div>

                    <div className={styles.redSection1}>
                        <div className={styles.redSectionText}>
                            <h2 style={{fontSize:"18px"}}>#1 EASY NAVIGATION TO PRE-EXISTING PINS</h2>
                            <p style={{fontSize:"15px"}}>Selecting a pin to promote is the first step in promoting a pin. The existing user flow for promoting a pin is unclear and confusing, resulting in user frustration and a diminished overall experience. <span className={styles.bold}>To establish a more intuitive user flow for pin selection</span>, we introduced a side pop-up organized by boards and most recent. </p>
                            <p style={{fontSize:"15px"}}><span className={styles.bold}>This design eliminates endless scrolling</span> by consolidating everything into one space, enabling users to easily promote their most recently uploaded pin creating a more efficient and smoother process. </p>
                        </div>
                        <img src={gif1} alt="pinterest gif 1"/>
                    </div>

                    <div className={styles.redSection1}>
                        <div className={styles.redSectionText}>
                            <h2 style={{fontSize:"18px"}}>#2  SPECIFIED TARGETED AUDIENCE </h2>
                            <p style={{fontSize:"15px"}}>Understanding the target audience for the promoted pin is a key factor in a successful ad. The current method for selecting an audience on Pinterest involves <span className={styles.bold}>embedded lists of interests</span> that delve into specific details (e.g., beauty -> makeup -> lipstick). This results in <span className={styles.bold}>users mindlessly selecting</span> what appears to be an endless array of options, making it challenging to keep track. </p>
                            <p style={{fontSize:"15px"}}>To address this, we introduced a box above to monitor all selected items enabling users to be <span className={styles.bold}>more intentional in their choices.</span></p>
                        </div>
                        <img src={gif2} alt="pinterest gif 1"/>
                    </div>

                    <div className={styles.redSection1} style={{paddingBottom: "68px"}}>
                        <div className={styles.redSectionText}>
                            <h2 style={{fontSize:"18px"}}>#3  UI IMPROVEMENT + DELIGHTFUL DESIGNS </h2>
                            <p style={{fontSize:"15px"}}><span className={styles.boldItalic}>"It takes 1/10th of a second to form a first impression of a website."</span> Pinterest's ad creation process is still in its early stages, implying that many users utilizing the three-step ad creation are first-timers or new to the advertising space. By enhancing the UI of the ad creation to be more vibrant, we aim not only to enhance first impressions but also to alleviate the intimidation associated with creating an ad for the first time.</p>
                        </div>
                        <img src={gif3} alt="pinterest gif 1"/>
                    </div>
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.pinterest}>
                    <div>
                        <p className={styles.gray}>How did we get here? Let’s revisit all the steps! </p>
                        <h2 style={{fontFamily:"Karla Regular", fontSize:"30px"}}>DIVING DEEPER TO THE STRUGGLES OF SMBs</h2>
                        <p style={{fontSize: "16px"}}><span className={styles.bold}>The biggest challenge we faced during this research stage was finding the specific audience</span> (funnily enough, in a smaller scale,  this is a similar process SMBs have to go through to find their specific audience to promote their business). Although the number of respondents were not as much as we would’ve wanted, we still gained valuable information such as why Pinterest were not there first choice in promoting their products/businesses. </p>
                    </div>
                    <div style={{marginBottom:"15px", marginTop: "50px"}}>
                        <h2 className={styles.bold} style={{fontSize:"18px"}}>USER SURVEYS</h2>
                        <p style={{fontSize: "16px"}}>User surveys serve as our starting point! After secondary research, we know that providing SMBs with an easy-to-use ad platform is a huge opportunity to be discover. With that we asked questions to help us understand SMBs....</p>
                        <br/>
                        <div className={styles.adWrapper}>
                            <div className={styles.adPointsWrapper}>
                                <div className={styles.adPoints}>
                                    <img src={thumbDown} alt=""/>
                                    <div>
                                        <h3>Ad Creation Challenges</h3>
                                        <ul>
                                            <li>Lack of knowledge, budgeting, advertising</li>
                                            <li>Time spent</li>
                                            <li>Creative knowledge</li>
                                            <li>Determining effectiveness</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.adPoints}>
                                    <img src={heartNotif} alt=""/>
                                    <div>
                                        <h3>Goals in Ad Creation</h3>
                                        <ul>
                                            <li>Increase in sales, revenue, and engagement are the top goals in ad creation</li>
                                            <li>Cost effectiveness & targeted audience are the top two factors influencing users preferred platform</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <img src={redTextBox} alt=""/>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <div style={{marginTop: "40px"}}>
                        <h2 className={styles.bold} style={{fontSize:"18px"}}>CONTEXTUAL INQUIRIES + USER INTERVIEWS</h2>
                        <p style={{fontSize: "16px"}}>With a better understanding of SMBs' challenges and goals in the ad creation world, we interviewed six individuals who participated in our survey <span className={styles.bold}>to navigate through Pinterest's current three-step ad creation process</span>, starting from uploading a pin to completing the promotion of the pin. We requested them to articulate their thoughts and experiences aloud as they progressed through each step. Finally, we concluded with some closing questions.</p>
                        <p style={{fontSize: "16px"}}>These individuals range from small to medium business owners from various fields (i.e food, fashion, services) with diverse experience from beginner to advance. These were both conducted in person and on zoom. </p>
                        <div className={styles.inquiries}>
                            <div className={styles.inquiries1}>
                                <div className={styles.inquireChunk}>
                                    <h3 className={styles.bold}>Guidance & Experience</h3>
                                    <p>Users have limited knowledge in using Pinterest in an ad creation setting and prefer a guided experience. </p>
                                </div>
                                <div className={styles.inquireChunk}>
                                    <h3 className={styles.bold}>Targeting Users</h3>
                                    <p>Having a specific and personalized targeting allow users to benefit with their resources. 4/6 expressed confusion in choosing the specific audience.  </p>
                                </div>
                            </div>
                            <div className={styles.inquireChunk}>
                                <h3 className={styles.bold}>Confusing UI</h3>
                                <p style={{marginBottom: "20px"}}>New users of Pinterest find it hard to navigate to the “Promote Pin” feature as well as how to upload a pin to promote leading many feeling frustrated/confused. </p>
                                <img src={textBoxes} alt=""/>
                            </div>
                            </div>
                        </div>
                        <hr/>
                        <div style={{marginBottom: "60px", marginTop: "30px"}}>
                            <p>We then gathered up all the research, and affinity diagram in order to find the most common clusters to base our insights around. </p>
                            <h2 style={{fontFamily:"Karla Regular", fontSize:"30px"}}>KEY INSIGHTS GAINED....</h2>
                            <div className={styles.insightBoxes}>
                                <div className={styles.chunk}>
                                    <div className={styles.insightbox} style={{gap:"25px"}}>
                                        <img src={boyIcon} alt="icon"/>
                                        <p>SMBs often face challenges due to their <span className={styles.bold}>limited experience regarding marketing.</span></p>
                                    </div>
                                    <div className={styles.insightbox}>
                                        <img src={pin} alt="pin"/>
                                        <p>Users experience <span className={styles.bold}>confusion distinguishing between creating and promoting a pin.</span></p>
                                    </div>
                                </div>
                                <div className={styles.chunk}>
                                    <div className={styles.insightbox2}>
                                        <img src={target} alt="target"/>
                                        <p>SMBs highly value <span className={styles.bold}>specific targeting </span>options to <span className={styles.bold}>personalize their advertising.</span> </p>
                                    </div>
                                    <div className={styles.insightbox}>
                                        <img src={thumbDownSmall} alt="small thumb down"/>
                                        <p>Certain features aren’t highlighted leading to <span className={styles.bold}>difficulty and confusion</span> while making an ad.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className={styles.analysis} style={{display: "flex", flexDirection:"column", gap:"25px", marginTop:"30px", marginBottom:"54px"}}>
                            <h3 className={styles.gray} style={{fontSize:"18px"}}>Competitor Analysis</h3>
                            <h2 style={{fontFamily:"Karla Regular", fontSize:"30px"}}>WHAT ARE SOME FEATURES OTHER AD CREATION PLATFORMS ARE DOING WELL? </h2>
                            <p>Our research reveals that 50% of users prefer Instagram as their primary ad creation platform, followed by 25% on Facebook and 20% on Google. <span className={styles.bold}>Thus we ask: "What specific aspects of these platforms contribute to enhancing the ad creation process for SMBs and how?"</span>. We navigated through each platform from initiating an ad to filling in details and finally publishing it. Our focus centered on key features crucial to addressing the specific needs of SMBs.</p>
                            <img src={categories} alt="competitor analysis categories"/>
                            <div className={styles.analysisSection}>
                                <div className={styles.analysis1}>
                                    <p style={{fontSize:"17px"}}>We then score each category and ranked which platform is best for each needs. </p>
                                    <div className={styles.findingsWrapper}>
                                        <div className={styles.findings1}>
                                            <div className={styles.box}>
                                                <img src={adCreation} alt="ad creation process"/>
                                                <p>Instagram overall is the most intuitive to use without much knowledge in the ad creation world. </p>
                                            </div>
                                            <div className={styles.box}>
                                                <img id={styles["box1"]} src={keyFeature} alt="key features"/>
                                                <p>Facebook and Google Ads offer advanced features that differ from those on other existing platforms. For example, Google Ads provides a 'Bid Strategy,' allowing you to choose between manual or automated bidding based on your campaign objectives. </p>
                                            </div>
                                            <div className={styles.box}>
                                                <img id={styles["box2"]} src={pricing} alt="pricing"/>
                                                <p>All pricing across all platforms is subject to personal budgets. A special mention goes to Google Ads for offering an 800% profit in the ad creation process, where every $1 spent results in users gaining $8 in profit.</p>
                                            </div>
                                        </div>
                                        <div className={styles.findings1}>
                                            <div className={styles.box}>
                                                <img id={styles["box5"]} src={customerSupport} alt="customer support"/>
                                                <p>TikTok is the only platform among the six that offers 1-1 consulting with an ad creation specialist. This personal and unique experience is provided to users. </p>
                                            </div>
                                            <div className={styles.box}>
                                                <img id={styles["box3"]} src={usability} alt="usability"/>
                                                <p>In terms of ease of use, Instagram and Pinterest have the most straightforward processes, avoiding overwhelming users with lengthy procedures or business jargon.</p>
                                            </div>
                                            <div className={styles.box}>
                                                <img id={styles["box4"]} src={demographics} alt="demographics"/>
                                                <p>Facebook targets the largest demographic, ensuring the highest success in the ad creation process for small to medium-sized businesses. This is attributed to its long-term credibility not only as a platform but also as a company</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.analysis2}>
                                    <h2 className={styles.gray} style={{fontSize:"25px", fontFamily:"Livvic Bold"}}>FINAL RANKINGS</h2>
                                    <div className={styles.mobileMedal}>
                                        <img src={rankings} alt="rankings"/>
                                        <div className={styles.medal}>
                                            <img src={medal} alt="medal"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div style={{marginTop:"40px", marginBottom:"40px"}}>
                            <p>Findings from competitive analysis suggest that...</p>
                            <h2 style={{fontFamily:"Karla Regular", fontSize:"30px"}}>PINTEREST VS OTHER PLATFORMS </h2>
                            <div className={styles.versus}>
                                <div className={styles.versusBox1}>
                                    <p style={{marginTop:"0px", marginBottom:"2px"}}>Ad creation platforms such as Facebook and Google Ads, which emphasize careful attention to budgeting and audience selection, <span className={styles.bold}>they cater to more marketing veterans with a deeper understanding of marketing techniques.</span>  Because of this, these platforms incorporate multiple pages without <span className={styles.bold}>various steps</span>, making the process of ad creation more optimal, but <span className={styles.bold}>time-consuming.</span> </p>
                                </div>
                                <div className={styles.versusBox2}>
                                    <p style={{marginTop:"0px", marginBottom:"7px"}}>Pinterest is unique in the way it <span className={styles.boldRed} style={{fontSize:"21px"}}>prioritizes ease of use and efficiency</span>, enabling users to promote one pin at a time. Due to this, the 3-step ad creation process stands out by being <span className={styles.bold}>condensed onto a single page, reducing overwhelmness for first-time users.</span> We can leverage its simplicity as a means for SMBs to get their foot in the door when entering the ad creation world.</p>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div style={{marginBottom:"70px"}}>
                            <h2 style={{fontFamily:"Karla Regular", fontSize:"30px"}}>PERSONAS</h2>
                            <p style={{marginBottom:"35px", marginTop:"0px"}}>Concluding all our research, we have developed two personas representing creators who would utilize the 3-step creation process. The difference between the two are their advertising experience but they share the similarity of using Pinterst for the first time. </p>
                            <div style={{display:"flex", flexDirection:"column", gap:"40px"}}>
                                <img src={newbie} alt=""/>
                                <img src={veteran} alt=""/>
                            </div>
                        </div>
                        <hr/>
                        <div style={{marginBottom:"50px"}}>
                            <h2 style={{fontFamily:"Karla Regular", fontSize:"30px"}}>JOURNEY MAP - COMPARE & CONTRAST</h2>
                            <p style={{marginBottom:"30px"}}>We then crafted a journey map to compare and contrast the experiences of a newcomer and a veteran when using Pinterest's 3-step ad creation for the first time. This enables us to identify gaps between the two in the process of creating an ad. </p>
                            <img src={journeyMap} alt="journey map" style={{marginBottom:"30px"}}/>
                            <p>The initial steps, from opening a Pinterest account to navigating to the 3-step ad creation process, are similar for both personas. However, the <span className={styles.bold}>quality of experience begins to diverge when it comes to filling out the logistics</span> of the ad, such as budgets, targeted audience, and understanding the significance of these numbers. We then synthesized these gaps and overall struggles faced by SMBs in promoting an ad, resulting in the identification of main themes/clusters to focus on as we move on to ideation.</p>
                        </div>
                        <hr/>
                        <div>
                            <h2 style={{fontFamily:"Karla Regular", fontSize:"30px", marginTop: "30px"}}>CORE EXPERIENCE GOALS/MUST-HAVES</h2>
                            <img style={{minWidth: "490px", maxWidth:"600px"}} src={tags} alt="tags"/>
                            <div className={styles.goals}>
                                <div className={styles.goalContainer}>
                                    <div className={styles.goalBox}>
                                        <img src={pin2} alt=""/>
                                        <h3>TARGETING</h3>
                                    </div>
                                    <div className={styles.goalBox}>
                                        <p>Provide interface that assists users in <span className={styles.bold}>selecting their target audience more intentionally</span>. Additionally, provide inspiration and guidance through suggestions from similar ads."</p>
                                    </div>
                                </div>
                                <div className={styles.goalContainer}>
                                    <div className={styles.goalBox}>
                                        <img src={pointer} alt=""/>
                                        <h3>GUIDANCE</h3>
                                    </div>
                                    <div className={styles.goalBox}>
                                        <p><span className={styles.bold}>Highlight key resources</span> for businesses, offering insights into how ads work. Also, provide clear steps after promoting an ad to boost business knowledge for future success.</p>
                                    </div>
                                </div>
                                <div className={styles.goalContainer}>
                                    <div className={styles.goalBox}>
                                        <img src={folder} alt=""/>
                                        <h3>PIN UPLOAD FLOW</h3>
                                    </div>
                                    <div className={styles.goalBox}>
                                        <p>Establish <span className={styles.bold}>a clear flow</span> for selecting a pin to upload, ensuring it is intuitive and familiar to users. This approach aims to <span className={styles.bold}>reduce frustration, enhancing overall ease of use and efficiency.</span></p>
                                    </div>
                                </div>
                                <div className={styles.goalContainer}>
                                    <div className={styles.goalBox}>
                                        <img src={star} alt=""/>
                                        <h3>UI IMPROVEMENTS</h3>
                                    </div>
                                    <div className={styles.goalBox}>
                                        <p>Enhance the overall feel of the interface to <span className={styles.bold}>reduce the intimidation</span> associated with starting an ad for the first time. Include inspiring words of encouragement to provide an <span className={styles.bold}>extra boost of courage.</span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className={styles.redGradientBG}>
                <div className="limitWidth">
                    <div className={styles.pinterest}>
                        <div className={styles.redSection2}>
                            <h3 style={{fontFamily:"Karla Bold", marginBottom:"0px", fontSize:"25px"}}>FINAL DESIGNS</h3>
                            <h1 style={{fontFamily:"Karla Bold", fontSize:"40px", marginTop:"0px"}}>Quick Promote (2.0)</h1>
                            <p>To enhance the user flow and usability of the current three-step process, we refined each stage to specifically address users' pain points and frustrations at every step of the process hitting the goals of each core experiences stated above (targeting, guidance, pin uploading flow, and overall UI improvements) </p>
                            <div>
                                <p style={{fontFamily:"Karla Bold", marginTop: "55px"}}>Let’s check out the before and after of each design! </p>
                                <img src={pinUploadFlow} alt="pin upload flow" />
                                <div className={styles.newContainer}>
                                    <div className={styles.newBox}>
                                        <p><span className={styles.karlaItalic}>currently</span></p>  
                                        <img src={current1} alt="current design 1"/>
                                        <p>Users are lead to another page in order to upload a pin, convoluting the process.  </p>
                                    </div>
                                    <div className={styles.newBox2}>
                                        <p><span className={styles.karlaItalic}>new designs</span></p>
                                        <div className={styles.new}>
                                            <img src={new1} alt="new design 1"/>
                                            <p>Introducing a side pop-up organized by boards and most recent eliminating endless scrolling. </p>
                                        </div>
                                    </div>
                                </div>
                                <img src={targeting} alt="targeting" />
                                <div className={styles.newContainer}>
                                    <div className={styles.newBox}>
                                        <p> <span className={styles.karlaItalic}>currently</span></p>  
                                        <img src={current2} alt="current design 2"/>
                                        <p>Users scroll through an endless lists of embedded lists without knowing what they are choosing.</p>
                                    </div>
                                    <div className={styles.newBox2}>
                                        <p><span className={styles.karlaItalic}>new designs</span></p>
                                        <div className={styles.new}>
                                            <img src={new2} alt="new design 2"/>
                                            <p>Integrating a “selected-box” for users to keep track of the interests they are picking - allowing users to be intentional in the audience they are choosing in order to optimize the promoted ad. </p>
                                        </div>
                                    </div>
                                </div>
                                <img src={guidance} alt="guidance" />
                                <div className={styles.newContainer}>
                                    <div className={styles.newBox}>
                                        <p><span className={styles.karlaItalic}>currently</span></p>  
                                        <img src={current3} alt="current design 3"/>
                                        <p>The only way to get guidance on the quick promote page is through the icons on the left with vague explainations. </p>
                                    </div>
                                    <div className={styles.newBox2}>
                                        <p><span className={styles.karlaItalic}>new designs</span></p>
                                        <div className={styles.new}>
                                            <img src={new3} alt="new design 3"/>
                                            <p>Upon analyzing the uploaded pin, popular and similar promoted pins will appear at the bottom, offering guidance on how to complete ad details based on the success metrics of others."</p>
                                        </div>
                                    </div>
                                </div>
                                <img src={uiImprovements} alt="ui improvements" />
                                <div className={styles.newContainer}>
                                    <div className={styles.newBox}>
                                        <p><span className={styles.karlaItalic}>currently</span></p>  
                                        <img src={current4} alt="current design 4"/>
                                        <p>The current 3-step ad creation is dull, giving users a dull experience and furthermore decrease their motivation. </p>
                                        <img id={styles["newDiff"]} src={current5} alt="current design 5"/>
                                    </div>
                                    <div className={styles.newBox2}>
                                        <p><span className={styles.karlaItalic}>new designs</span></p>
                                        <div className={styles.new}>
                                            <img src={new4} alt="new design 4"/>
                                            <p>Combine steps into distinct cards, highlighting each when selected. Ensure prominent CTAs like 'Promote' and 'Switch to advanced ad creation' stand out with brighter colors."</p>
                                            <img src={new5} alt="new design 5"/>
                                            <p>A confirmation page pops up after a user promotes their pin for the first time. This adds a touch of delight, providing additional resources to guide new users on the next steps.</p>
                                            <p>Promoting another pin is also a choice if users want to do another one! </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="limitWidth">
                <div className={styles.pinterest}>
                    <h2 style={{fontFamily:"Karla Regular", fontSize:"30px"}}>BRINGING THE FEASIBILITY AND JOY TO PROMOTING </h2>
                    <p>To enhance the user flow and usability of the current three-step process, we refined each stage to specifically address users' pain points and frustrations at every step of the process while keeping the two main themes: ease of use and delightful designs. After all, many of these SMBs are already juggling many hats, the last thing we want to do is add stress to their advertisement on Pinterest. It should be easy, quick, while providing additional resources for future growth . </p>
                    <div className={styles.endWrapper}>
                    <div className={styles.wrapper}>
                        <div className={styles.end1}>
                            <h3><span className={styles.bold}>#1 EASY NAVIGATION TO PRE-EXISTING PINS</span> </h3>
                            <p>CURRENT EXPERIENCE</p>
                        </div>
                        <div className={styles.end}>
                            <img src={gif1} alt=""/>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.end1}>
                            <h3><span className={styles.bold}>#2  SPECIFIED TARGETED AUDIENCE</span> </h3>
                        </div>
                        <div className={styles.end}>
                            <img src={gif2} alt=""/>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.end1}>
                            <h3><span className={styles.bold}>#3  UI IMPROVEMENT + DELIGHTFUL DESIGNS</span> </h3>
                        </div>
                        <div className={styles.endDifferent}>
                            <img src={gif3} alt="" style={{width:"100%"}}/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}