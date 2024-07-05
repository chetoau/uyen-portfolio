import styles from '../css/Pinterest.module.css';
import pinterest from '../images/pinterest-comp.png';
import { Helmet } from "react-helmet";
import Contact from './Contact';
import quickPromoteSteps from '../images/quickPromoteSteps.png';
import gif1 from '../images/gif1.gif';
import gif2 from '../images/gif2.gif';
import gif3 from '../images/gif3.gif';
import thumbDown from '../images/thumb-down.png';
import heartNotif from '../images/heart-notif.png';
import textBoxes from '../images/textBoxes.png';
import boyIcon from '../images/boyiCon.png';
import pin from '../images/pin.png';
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
import folder from '../images/folder.png';
import pin_context from '../images/pin_context.png';
import smbChallenges from '../images/smbChallenges.png';
import avgMarket from '../images/avgMarket.png';
import smbQuote from '../images/smbQuote.png';
import pin_unique from '../images/pin_unique.png';
import upload_current from '../images/upload_current.png';
import upload_new from '../images/upload_new.png';
import thumbUp from '../images/thumb-up.png';
import target_current from '../images/target_current.png';
import gif4 from '../images/gif4.gif';
import gif4_5 from '../images/gif4_5.gif';
import giftBox from '../images/giftBox.png';
import noPopup from '../images/noPopup.png';
import delights_new from '../images/delights_new.png';
import location from '../images/location.png';
import guidance_current from '../images/guidance_current.png';
import guidance_gif from '../images/guidance_gif.gif';
import pinterest_logo from '../images/pinterest_logo.png';
import pinterest_medal from '../images/pinterest_medal.png';
import arrow_right from '../images/arrow_right.png';
import green_tick from '../images/green_tick.png';
import brown_clock from '../images/brown_clock.png';
import pushingSMBs from '../images/pushingSMBs.png';




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
                                <h3 style={{fontSize:"18px"}}>Role</h3>
                                <p style={{fontFamily:"Livvic"}}>Product Design Consultant (Contract)</p>
                            </div>
                            <div className={styles.leftChunk}>
                                <h3 style={{fontSize:"18px"}}>Duration</h3>
                                <p style={{fontFamily:"Livvic"}}>September - December 2023</p>
                            </div>
                            <div className={styles.leftChunk}>
                                <h3 style={{fontSize:"18px"}}>Disciplines</h3>
                                <p style={{fontFamily:"Livvic"}}>User Research, Mobile Design, Product Strategy, Prototyping</p>
                            </div>
                            <div className={styles.leftChunk}>
                                <h3 style={{fontSize:"18px"}}>Team</h3>
                                <p style={{fontFamily:"Livvic"}}>Sarah Suen, Michid Byambajav, Angie Nguyen, Heli Balsara </p>
                            </div>
                        </div>
                        <div className={styles.introRight}>
                            <p style={{fontFamily:"Livvic"}}>Pinterest’s mission is to “bring everyone the inspiration to create a life they love”, a platform loved not only by designers (like myself) but for over 482 million users monthly worldwide. <span className={styles.bold}>However, not many see Pinterest as a business hub.</span> </p>
                            <p style={{fontFamily:"Livvic"}}>With that, the Product Team at Pinterest asked us, Berkeley Innovation, to increase awareness to their business side. This sounds pretty daunting and big in scope, so the team tasked us with honing in on a not fully developed <span className={styles.bold}>“Quick Promote” feature that aims for SMBs (small-medium business) to effectively promote their business.</span> </p>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#F7F5F5"}}>
                        <img src={pin_context} alt=""/>
                    </div>
                    <br/>
                    <hr className={styles.line}/>

                    <div className={styles.endResult}>
                        <div className={styles.redSection}>
                            <h2 style={{marginBottom:"10px"}}>[END DESIGNS] CORE CHANGES TO THE 3-STEP AD CREATION PROCESS</h2>
                            <p className={styles.lightGray} style={{fontSize:"17px"}}>To enhance the user flow and usability of the current three-step process, we refined each stage to specifically address users' pain points and frustrations at every step of the process.</p>
                        </div>

                        <div className={styles.redSection1}>
                            <div className={styles.redSectionText}>
                                <h2 style={{fontSize:"18px"}}>#1 EASY NAVIGATION TO PRE-EXISTING PINS</h2>
                                <p style={{fontSize:"15px"}}>Selecting a pin to promote is the first step in promoting a pin. The existing user flow for promoting a pin is unclear and confusing, resulting in user frustration and a diminished overall experience. To establish a more intuitive user flow for pin selection, we introduced a side pop-up organized by boards and most recent.</p>
                                <p style={{fontSize:"15px"}}>This design eliminates endless scrolling by consolidating everything into one space, enabling users to easily promote their most recently uploaded pin creating a more efficient and smoother process. </p>
                            </div>
                            <img src={gif1} alt="pinterest gif 1"/>
                        </div>

                        <div className={styles.redSection1}>
                            <div className={styles.redSectionText}>
                                <h2 style={{fontSize:"18px"}}>#2  SPECIFIED TARGETED AUDIENCE </h2>
                                <p style={{fontSize:"15px"}}>Understanding the target audience for the promoted pin is a key factor in a successful ad. The current method for selecting an audience on Pinterest involves embedded lists of interests that delve into specific details (e.g., beauty -> makeup -> lipstick). This results in users mindlessly selecting what appears to be an endless array of options, making it challenging to keep track. </p>
                                <p style={{fontSize:"15px"}}>To address this, we introduced a box above to monitor all selected items enabling users to be more intentional in their choices.</p>
                            </div>
                            <img src={gif2} alt="pinterest gif 1"/>
                        </div>

                        <div className={styles.redSection1} style={{paddingBottom: "68px"}}>
                            <div className={styles.redSectionText}>
                                <h2 style={{fontSize:"18px"}}>#3  UI IMPROVEMENT + DELIGHTFUL DESIGNS </h2>
                                <p style={{fontSize:"15px"}}>"It takes 1/10th of a second to form a first impression of a website." Pinterest's ad creation process is still in its early stages, implying that many users utilizing the three-step ad creation are first-timers or new to the advertising space. By enhancing the UI of the ad creation to be more vibrant, we aim not only to enhance first impressions but also to alleviate the intimidation associated with creating an ad for the first time.</p>
                            </div>
                            <img src={gif3} alt="pinterest gif 1"/>
                        </div>
                    </div>

                    <div className={styles.grayBackground}>
                        <h2>HOLD UP, HOW DID WE GET HERE? LET’S BEGIN HERE ⬇️ </h2>
                    </div>

                    <hr style={{marginTop:"70px", marginBottom:"30px"}} />

                    <div className={styles.whySMB}>
                        <h3>WHY ARE WE FOCUSING ON <span className={styles.red}> SMALL-MEDIUM BUSINESSES? (SMBs) </span> </h3>
                        <p className={styles.lightGray} style={{fontSize:"18px"}}>Small and medium businesses (SMBs) often juggle multiple responsibilities. It can be overwhelming creating a campaign for the first time. </p>
                        <img src={smbChallenges} alt="" />
                        <img src={avgMarket} alt="" />
                        <img src={smbQuote} alt="" />
                    </div>
                    <br/>

                    <hr className={styles.line}/>

                    <h3 style={{marginBottom:"10px"}}>SO, WHAT IS THE <span className={styles.red}>CURRENT AD CREATION</span> PROCESS ON PINTEREST?</h3>
                    <p className={styles.lightGray}>Just like the name, “Quick Promote” are broken down to three simple steps. </p>
                    <img style={{marginTop:"50px", marginBottom:"25px"}} src={quickPromoteSteps} alt=""/>

                    <hr className={styles.line}/>

                    <div>
                        <h2 style={{fontFamily:"Karla Regular", fontSize:"30px", marginBottom:"0px"}}>DIVING DEEPER TO THE STRUGGLES OF SMBs</h2>
                        <p className={styles.lightGray}>The biggest challenge we faced during this research stage was finding the specific audience (funnily enough, in a smaller scale,  this is a similar process SMBs have to go through to find their specific audience to promote their business). Although the number of respondents were not as much as we would’ve wanted, we still gained valuable information such as why Pinterest were not there first choice in promoting their products/businesses. </p>
                    </div>

                    <div>
                        <div className={styles.darkgrayBG}>
                            <h2 style={{fontSize:"23px"}} className={styles.whiteText}>USER SURVEYS</h2>
                        </div>
                        <p className={styles.lightGray}>User surveys serve as our starting point! After secondary research, we know that providing SMBs with an easy-to-use ad platform is a huge opportunity to be discover. With that we asked questions to help us understand SMBs....</p>
                        <br/>
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
                    </div>
                    <div>
                        <div className={styles.darkgrayBG}>
                            <h2 style={{fontSize:"23px"}} className={styles.whiteText}>CONTEXTUAL INQUIRES + USER INTERVIEWS</h2>
                        </div>
                        <p className={styles.lightGray}>With a better understanding of SMBs' challenges and goals in the ad creation world, we interviewed six individuals who participated in our survey to navigate through Pinterest's current three-step ad creation process, starting from uploading a pin to completing the promotion of the pin. We requested them to articulate their thoughts and experiences aloud as they progressed through each step. Finally, we concluded with some closing questions.</p>
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
                                <div className={styles.inquireChunk2}>
                                    <h3 className={styles.bold}>Confusing UI</h3>
                                    <p style={{marginBottom: "20px"}}>New users of Pinterest find it hard to navigate to the “Promote Pin” feature as well as how to upload a pin to promote leading many feeling frustrated/confused. </p>
                                    <img src={textBoxes} alt=""/>
                                </div>
                            </div>
                    </div>
                    <hr className={styles.line}/>
                    <h2 style={{fontFamily:"Karla Regular", fontSize:"30px"}}>KEY INSIGHTS GAINED....</h2>
                    <p className={styles.lightGray}>We then gathered up all the research, and affinity diagram in order to find the most common clusters to base our insights around. </p>
                    <div className={styles.insightBoxes}>
                        <div className={styles.chunk}>
                            <div className={styles.insightbox1}>
                                <img src={boyIcon} alt="icon"/>
                                <p>SMBs often face challenges due to their <span className={styles.bold}>limited experience regarding marketing.</span></p>
                            </div>
                            <div className={styles.insightbox2}>
                                <img src={pin} alt="pin"/>
                                <p>Users experience <span className={styles.bold}>confusion distinguishing between creating and promoting a pin.</span></p>
                            </div>
                        </div>
                        <div className={styles.chunk}>
                            <div className={styles.insightbox}>
                                <img src={target} alt="target"/>
                                <p>SMBs highly value <span className={styles.bold}>specific targeting </span>options to <span className={styles.bold}>personalize their advertising.</span> </p>
                            </div>
                            <div className={styles.insightbox2}>
                                <img src={thumbDownSmall} alt="small thumb down"/>
                                <p>Certain features aren’t highlighted leading to <span className={styles.bold}>difficulty and confusion</span> while making an ad.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.analysis} style={{display: "flex", flexDirection:"column", gap:"25px", marginBottom:"54px"}}>
                        <div style={{marginBottom: "0px"}} className={styles.darkgrayBG}>
                            <h2 style={{fontSize:"23px", margin:"10px"}} className={styles.whiteText}>COMPETITIVE ANALYSIS</h2>
                        </div>
                        
                        
                        <p className={styles.lightGray}>Our research reveals that 50% of users prefer Instagram as their primary ad creation platform, followed by 25% on Facebook and 20% on Google. Thus we ask: "What specific aspects of these platforms contribute to enhancing the ad creation process for SMBs and how?". We navigated through each platform from initiating an ad to filling in details and finally publishing it. Our focus centered on key features crucial to addressing the specific needs of SMBs.</p>
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
                    
                    <hr className={styles.line} />
                        <div style={{marginTop:"40px", marginBottom:"40px"}}>
                            <h2 style={{fontFamily:"Karla Regular", fontSize:"30px", marginBottom:"0px"}}
                            >PINTEREST VS OTHER PLATFORMS </h2>
                            <p className={styles.lightGray}>Findings from competitive analysis suggest that...</p>
                            <div className={styles.versus}>
                                <div className={styles.versusBox1}>
                                    <p style={{marginTop:"0px", marginBottom:"2px"}}>Ad creation platforms such as Facebook and Google Ads, which emphasize careful attention to budgeting and audience selection, <span className={styles.bold}>they cater to more marketing veterans with a deeper understanding of marketing techniques.</span>  Because of this, these platforms incorporate multiple pages without <span className={styles.bold}>various steps</span>, making the process of ad creation more optimal, but <span className={styles.bold}>time-consuming.</span> </p>
                                </div>
                                <div className={styles.versusBox2}>
                                    <p style={{marginTop:"0px", marginBottom:"7px"}}>Pinterest is unique in the way it <span className={styles.boldRed} style={{fontSize:"21px"}}>prioritizes ease of use and efficiency</span>, enabling users to promote one pin at a time. Due to this, the 3-step ad creation process stands out by being <span className={styles.bold}>condensed onto a single page, reducing overwhelmness for first-time users.</span> We can leverage its simplicity as a means for SMBs to get their foot in the door when entering the ad creation world.</p>
                                </div>
                            </div>
                        </div>
                    <img style={{marginBottom:"35px"}} src={pin_unique} alt=""/>
                    <hr className={styles.line} />

                    <div>
                        <h3 className={styles.red}>CORE CHANGES TO THE 3-STEP AD CREATION PROCESS</h3>
                        <p className={styles.lightGray}>To enhance the user flow and usability of the current three-step process, we refined each stage to specifically address users' pain points and frustrations at every step of the process, <span className={styles.bold}>without diminishing the uniqueness of Pinterest ad creation process.</span> </p>
                    </div>

                    <hr className={styles.line} />
                    
                    <div className={styles.adContainer}>
                        <div className={styles.adText}>
                            <h3 className={styles.red}>STEP 1: SELECT A PIN</h3>
                            <p>Establish <span className={styles.bold}>a clear flow</span> for selecting a pin to upload, ensuring it is intuitive and familiar to users. This approach aims to <span className={styles.bold}>reduce frustration, enhancing overall ease of use and efficiency.</span></p>
                        </div>
                        <div className={styles.adContent}>
                            <div className={styles.darkgray}>
                                <img src={folder} alt=""/>
                                <h3>PIN UPLOAD FLOW</h3>
                            </div>
                            <div className={styles.grayBG}>
                                <div className={styles.subContent}>
                                    <div className={styles.subLeft}>
                                        <p>currently</p>
                                        <img src={upload_current} alt=""/>
                                        <p style={{fontFamily:"Karla Medium"}}>Users are lead to another page in order to upload a pin, convoluting the process.</p>
                                    </div>
                                    <div className={styles.subRight}>
                                        <img src={thumbDown} alt="" />
                                        <p style={{marginTop:"5px"}}>Selecting a pin to promote is the first step in promoting a pin. </p>
                                        <p>The existing user flow for promoting a pin is <span className={styles.bold}>unclear and confusing</span>, resulting in user frustration and a <span className={styles.bold}>diminished overall experience.</span> </p>
                                    </div>
                                </div>

                                <div className={styles.subContent}>
                                    <div className={styles.subLeft}>
                                        <p>new designs</p>
                                        <img src={upload_new} alt=""/>
                                    </div>
                                    <div className={styles.subRight}>
                                        <p style={{marginTop:"5px"}}>Introducing a side pop-up organized by boards and most recent eliminating endless scrolling. </p>
                                    </div>
                                </div>

                                <div className={styles.halfredBG}>
                                    <div className={styles.redLeft}>
                                        <h3>EASY NAVIGATION TO PRE-EXISTING PINS </h3>
                                        <img src={thumbUp} alt="" />
                                        <h4>EASE OF USE</h4>
                                        <p><span className={styles.bold}>To establish a more intuitive user flow for pin selection</span>, we introduced a side pop-up organized by boards and most recent. </p>
                                        <h4 style={{marginTop: "40px"}}>EFFICIENCY </h4>
                                        <p><span className={styles.bold}>Eliminates endless scrolling</span> by consolidating all content into one space, allowing users to easily promote their most recent pin.</p>
                                    </div>
                                    <div className={styles.redRight}>
                                        <img src={gif1} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={styles.adContainer}>
                        <div className={styles.adText}>
                            <h3 className={styles.red}>STEP 2: FILL OUT AD DETAILS</h3>
                            <p>Provide interface that assists users in <span className={styles.bold}>selecting their target audience more intentionally</span>. Additionally, provide inspiration and guidance through suggestions from similar ads."</p>
                        </div>
                        <div className={styles.adContent}>
                            <div className={styles.darkgray}>
                                <img src={pin} alt=""/>
                                <h3>TARGETING</h3>
                            </div>
                            <div className={styles.grayBG}>
                                <div className={styles.subContent}>
                                    <div className={styles.subLeft}>
                                        <p>currently</p>
                                        <img src={target_current} alt=""/>
                                        <p style={{fontFamily:"Karla Medium"}}>Users scroll through an endless list of embedded lists without knowing what they are choosing.</p>
                                    </div>
                                    <div className={styles.subRight}>
                                        <img src={thumbDown} alt="" />
                                        <p style={{marginTop:"5px"}}>The current method for selecting an audience on Pinterest involves <span className={styles.bold}>embedded lists of interests.</span> </p>
                                        <p>This results in users mindlessly selecting what appears to be an endless array of options, making it <span className={styles.bold}>challenging to keep track.</span></p>
                                    </div>
                                </div>

                                <div className={styles.subContent}>
                                    <div className={styles.subLeft}>
                                        <p>new designs</p>
                                        <img src={gif4} alt=""/>
                                    </div>
                                    <div className={styles.subRight}>
                                        <p style={{marginTop:"5px"}}>Integrating a “selected-box” for users to keep track of the interests they are picking - allowing users to be intentional in the audience they are choosing in order to optimize the promoted ad. </p>
                                    </div>
                                </div>

                                <div style={{backgroundPosition:"top"}} className={styles.halfredBG}>
                                    <div className={styles.redLeft}>
                                        <h3>SPECIFIED TARGETED AUDIENCE  </h3>
                                        <img src={thumbUp} alt="" />
                                        <h4>EASE OF USE + EFFICIENCY </h4>
                                        <p>Introduced a box above to monitor all selected items enabling users to be more <span className={styles.bold}>intentional in their choices.</span></p>
                                    </div>
                                    <div className={styles.redRight}>
                                        <img src={gif4_5} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className={styles.adContainer}>
                        <div className={styles.adText}>
                            <h3 className={styles.red}>STEP 3: PUBLISH PIN </h3>
                            <p>Enhance the overall feel of the interface to reduce the intimidation associated with starting an ad for the first time. Include inspiring words of encouragement to provide an extra boost of encouragement. through <span className={styles.bold}>adding delights & providing guidance.</span></p>
                        </div>
                        <div className={styles.adContent}>
                            <div className={styles.darkgray}>
                                <img src={giftBox} alt=""/>
                                <h3>ADDING DELIGHTS</h3>
                            </div>
                            <div className={styles.grayBG}>
                                <div className={styles.subContent}>
                                    <div className={styles.subLeft}>
                                        <p>currently</p>
                                        <img style={{borderRadius:"0px"}} src={noPopup} alt=""/>
                                    
                                    </div>
                                    <div className={styles.subRight}>
                                        <img src={thumbDown} alt="" />
                                        <p style={{marginTop:"5px"}}><span className={styles.bold}>No reassurance</span> if their ad published, leaving users confused and anxious.</p>
                                        <p>As an inexperienced ad creator, there are <span className={styles.bold}>no indicators of next steps,</span> leaving users to figure it out themselves.</p>
                                    </div>
                                </div>

                                <div className={styles.subContent}>
                                    <div className={styles.subLeft}>
                                        <p>new designs</p>
                                        <img src={delights_new} alt=""/>
                                    </div>
                                    <div className={styles.subRight}>
                                        <p style={{marginTop:"5px"}}>A confirmation page pops up after a user promotes their pin for the first time. This adds a touch of delight, <span className={styles.bold}>providing additional resources</span> to guide new users on the next steps.</p>
                                        <p><span className={styles.bold}>Promoting another pin</span> is also a choice if users want to do another one! </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.adContainerConnected}>
                        <div className={styles.adContent}>
                            <div className={styles.darkgray}>
                                <img src={location} alt=""/>
                                <h3>PROVIDING GUIDANCE</h3>
                            </div>
                            <div className={styles.grayBG}>
                                <div className={styles.subContent}>
                                    <div className={styles.subLeft}>
                                        <p>currently</p>
                                        <img style={{borderRadius:"0px"}} src={guidance_current} alt=""/>
                                    
                                    </div>
                                    <div className={styles.subRight}>
                                        <img src={thumbDown} alt="" />
                                        <p style={{marginTop:"5px"}}><span className={styles.bold}>"It takes 1/10th of a second to form a first impression of a website." </span></p>
                                        <p>The current designs are dull with no designs of delight and encouragement. </p>
                                    </div>
                                </div>

                                <div style={{backgroundPosition:"top"}} className={styles.halfredBG}>
                                    <div className={styles.redLeft}>
                                        <h3>UI IMPROVEMENT + DELIGHTFUL DESIGNS </h3>
                                        <img src={thumbUp} alt="" />
                                        <h4>APPROACHABILITY </h4>
                                        <p>By enhancing the UI of the ad creation to be more vibrant and encouraging, we aim not only to enhance first impressions but also to <span className={styles.bold}>alleviate the intimidation associated with creating an ad for the first time. </span></p>
                                    </div>
                                    <div className={styles.redRight}>
                                        <img src={guidance_gif} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.line} />
                    <div style={{marginBottom:"100px"}}>
                        <h3>SETTING UP THE STAGE FOR FUTURE</h3>
                        <div className={styles.futureDiv}>
                            <div className={styles.futureChild}>
                                <p style={{fontFamily:"Karla Medium Italic"}}>currently </p>
                                <img src={pinterest_logo} alt="" />
                                <p>Focusing on enterprising merchants instead of SMBs, haven’t had time to understand SMBs needs. </p>
                            </div>
                            <img style={{width:"10%", height: "auto", objectFit:"contain"}} src={arrow_right} alt="" />
                            <div className={styles.futureChild}>
                                <p style={{fontFamily:"Karla Medium Italic"}}>Center the stage</p>
                                <img src={pinterest_medal} alt="" />
                                <p>Address neglected areas of the product, larger business needs, pushing for SMBs</p>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.line} />

                    <div>
                        <h3>HOW WOULD THESE <span className={styles.red}>METRICS</span> BE MEASURED?</h3>
                        <div className={styles.metricsDiv}>
                            <div className={styles.metricsChild}>
                                <img src={green_tick} alt="" />
                                <h3>1. COMPLETION RATE</h3>
                                <p>Measure the percentage of users who successfully complete the entire ad creation process.</p>
                            </div>
                            <div className={styles.metricsChild}>
                                <img src={brown_clock} alt="" />
                                <h3>2. TIME TO COMPLETION</h3>
                                <p>A decrease in time to completion would indicate a more efficient process.</p>
                            </div>
                            <div className={styles.metricsChild}>
                                <img src={thumbDown} alt="" />
                                <h3>3. DROP OFF RATE</h3>
                                <p>Measure the percentage of users who abandon the ad creation process at each step</p>
                            </div>
                        </div>
                    </div>

                    <br/>
                    
                    <img src={pushingSMBs} alt="" />

                    <hr style={{marginBottom:"50px", marginTop:"75px"}} className={styles.line} />

                    <h3>REFLECTIONS</h3>
                    <p>My parents, who are business owners of their small nail salon shop, became the center stage of this project. Weaving in their struggles as SMBs along with others allowed me to constantly question “why?” behind my every move – enabling me to learn storytelling and design with people, rather than for them. Working with product designers at Pinterest has given me the chance to learn what bigger companies are doing to support users that are often overlooked. Being able to advocate for small businesses and be at the forefront of Pinterest’s mission to support them has made me realize the importance of designing for a diverse group of users. After all, regardless of a company’s size or the product, one common thread unites them all: humanity.</p>

                </div>
            </div>
           
            <Contact />
        </div>
    )
}