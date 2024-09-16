import styles from '../css/JustworksEditing.module.css';
import justworks from '../images/justworks-editing-cover.jpeg';
import { Helmet } from "react-helmet";
import { useRef } from 'react';
import Contact from './Contact';
import customerFacing from '../images/justworks-customer-facing.png';
import internalFacing from '../images/justworks-internal-facing.png';
import designFlow from '../images/justworks-design-flow.png';
import futureLayoff from '../images/justworks-future-layoff.png';
import pastLayoff from '../images/justworks-past-layoff.png';
import pendingTermination from '../images/justworks-pending-termination.png';
import flowChart from '../images/justworks-editing-flow-chart.png';
import stepperComplexity from '../images/justworks-stepper-complexity.png';
import editDetails from '../images/justworks-edit-details.png';
import entryPoint from '../images/justworks-entry-point-pending.png';
import editBackgroundInfo from '../images/justworks-edit-background-info.png';
import inlineEditing from '../images/justworks-inline-editing.png';
import bigEditBackground from '../images/justworks-edit-background-infoBig.png';
import editPayments from '../images/justworks-edit-payments.png';
import confirmationBanner from '../images/justworks-confirmation-banner.png';
import csEditingFlow from '../images/justworks-cs-editing-flow.png';
import csNeeds from '../images/justworks-asking-cs-needs.png';
import csInfo from '../images/justworks-cs-information.png';
import auditLog from '../images/justworks-audit-log.png';
import versionHistory from '../images/justworks-version-history.png';
import combineBoth from '../images/justworks-combine-both.png';
import dropDown from '../images/justworks-dropdown.png';
import editEntryPoint from '../images/justworks-edit-entry-point.png';
import separationForm from '../images/justworks-edit-separation-form.png';
import singleSelect from '../images/justworks-single-select.png';
import uploadFiles from '../images/justworks-upload-files.png';
import textEditing from '../images/justworks-text-editing.png';
import multiSelect from '../images/justworks-multi-select.png';
import datePickers from '../images/justworks-date-pickers.png';
import finalEntryPoint from '../images/justworks-final-entry-point.gif';
import pointLine from '../images/justworks-point-line.png';
import finalViewpoint from '../images/justworks-final-viewpoint.gif';
import finalDetails from '../images/justworks-final-edit-details.gif';
import people1 from '../images/justworks-people-1.png';
import people2 from '../images/justworks-people-2.png';
import finalBackgroundInfo from '../images/finalBackgroundInfo.gif';
import finalPayment from '../images/justworks-final-edit-payments.gif';
import finalVersion from '../images/justworks-final-version-history.gif';
import finalInlineEditing from '../images/justworks-final-inline-editing.gif';
import bannerOnTop from '../images/justworks-banner-on-top.png';
import terminationStatus from '../images/justworks-termination-status.png';
import mainActions from '../images/justworks-main-actions.png';
import actionNotice from '../images/justworks-actions-and-notice.png';
import subtitles from '../images/justworks-subtitles.png';
import fullStepper from '../images/justworks-stepper-full.png';
import linePoint from '../images/justworks-linepoint.png';

export default function JustworksEditing() {

  const finalDesignsRef = useRef(null);
  const scrollToFinalDesigns = () => {
    finalDesignsRef.current.scrollIntoView({ behavior: 'instant' });
  };

  return (
    <div>
      <Helmet>
        <title>Uyen Phan - Justworks</title>
        <meta
          name="description"
          content="Developed a mobile directory, streamlining access to important information for over 1000 companies and their employees."
        />
      </Helmet>
      <div className={styles.coverbackground}>
        <div className="limitWidth">
          <img
            className={styles.imageDown}
            src={justworks}
            alt="Justworks Cover"
          />
        </div>
      </div>
      <div className="limitWidth">
        <div className={styles.intro}>
          <div className={styles.introLeft}>
            <h1>PROJECT OVERVIEW</h1>
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
                In the summer of 2024, I returned to Justworks for my second
                product design internship on the Payments & Taxes Team,
                specifically under the{" "}
                <span className={styles.bold}>
                  State Unemployment Insurance (SUI) team.
                </span>
              </p>
              <p>
                Justworks helps businesses onboard employees, but we also
                assist with the less pleasant task of{" "}
                <span className={styles.bold}>off-boarding.</span> Previously,
                the separation form lacked an editing feature, which hindered
                the entire process. This project involved collaborating with
                our customer-facing side as well as our internal team
                responsible for filing our customers’ unemployment claims, by
                understanding the use cases and editing permissions of both
                sides. This is an end-to-end project that involves
                understanding the complexities of unemployment laws while
                working within an ambiguous environment, identifying editing
                needs to create designs that bridge both internal and external
                teams.{" "}
              </p>
              <p>
                I collaborated with engineers who built the separation form to
                understand how information is stored and transferred between
                our customers and the claims-associate team. Along with my PM,
                I identified the feature requirements and designed an editing
                feature on both platforms, allowing information to seamlessly
                flow between them. This feature will be shipped by the end of
                the year.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.skipCont}>
          <button className={styles.skip} onClick={scrollToFinalDesigns}>skip here to final designs</button>
        </div>
        <hr className={styles.line} />
        <div className={styles.justworks}>

          <h1>WHEN THERE’S ONBOARDING ⬆️ , THERE’S ALSO OFFBOARDING ⬇️ </h1>
          <div className={styles.pt1}>
            <p>Justworks helps small-medium business (SMBs) onboard employees without them lifting a finger. But we also help with the off boarding-process. </p>
            <p>We make a promise we will do their SUI needs (claim management, registration, power of attorney, PEO & Client reporting states, manage beginning to end process for all employees, manage a scaling SUI program)</p>
          </div>
          <hr className={styles.line} />
          <h1>THE TERMINATION PROCESS AND WHO IS INVOLVED </h1>
          <p>There are two important roles within the separation process.</p>
          <div className={styles.termContainer}>
            <div className={styles.termination}>
              <div className={styles.termCont}>
                <p style={{ color: "black" }}><span className={styles.bold}>1. ADMINS</span>: OUR CUSTOMER WHO INITIATES THE SEPARATION PROCESS FOR AN EMPLOYEE</p>
                <p>Interacts with the form on Justworks</p>
                <img className={styles.subtitles} src={subtitles}/>
              </div>
              <img src={customerFacing} />
            </div>
            <div className={styles.termination}>
              <div className={styles.termCont}>
                <p style={{ color: "black" }}><span className={styles.bold}>2. CUSTOMER SUPPORT (CS)</span>: OUR TEAM WHO TAKES THE INPUT OF OUR CUSTOMER AND FILES THE CLAIM TO THE STATE</p>
                <p>Accesses information through CS Tools (internal)</p>
              </div>
              <img src={internalFacing} />
            </div>
          </div>

          <hr className={styles.line} />
          <h1><span className={styles.bold}>THE PROJECT:</span> INTEGRATE AN EDITING FEATURE FOR BOTH VIEWS</h1>
          <p>Understanding the impact of this project was one of the most challenging aspects of initiating it. With each state's unemployment laws varying, Customer Support (CS) must handle claims efficiently and straightforwardly while maintaining integrity for our customers. Mistakes are bound to happen, and information is often missing or needs updating. Currently, CS and Admins communicate through an email thread, which makes the entire process less efficient.</p>
          <h3 style={{color:"#325B5B", fontFamily: "Karla Bold", marginTop:"70px"}}>ADMIN’S EDIT FLOW DESIGN GOALS</h3>
          <img src={designFlow} />
          <hr className={styles.line} />
          <h1>EXPLORATION: WHERE SHOULD THE ENTRY POINT FOR EDITING LIVE?</h1>
          <p style={{marginTop:"50px", marginBottom: "50px"}}>Since there is no current editing feature, the separation form cannot be accessed after submission. The first step was determining where the editing feature should be located without disrupting the existing workflow.</p>

          <div className={styles.exploreContainer}>
            <div className={styles.explore}>
              <div className={styles.exploreLeft}>
                <p style={{ fontSize: "17px" }}>1. banner on the top</p>
                <img src={bannerOnTop}/>
              </div>
              <div className={styles.exploreRight}>
                <p style={{ fontSize: "17px" }}>Not a usual pattern for an action to live in a banner</p>
              </div>
            </div>
            <div className={styles.explore}>
              <div className={styles.exploreLeft}>
                <p style={{ fontSize: "17px" }}>2. termination status card</p>
                <img src={terminationStatus} />
              </div>
              <div className={styles.exploreRight}>
                <p style={{ fontSize: "17px" }}>Takes too much real estate on the page</p>
              </div>
            </div>
            <div className={styles.explore}>
              <div className={styles.exploreLeft}>
                <p style={{ fontSize: "17px" }}>3. part of the main actions</p>
                <img src={mainActions}/>
              </div>
              <div className={styles.exploreRight}>
                <p style={{ fontSize: "17px" }}>Editing separation form is not a main/frequent action an admin would be making on a daily basis </p>
              </div>
            </div>
            <div className={styles.explore}>
              <div className={styles.exploreLeft}>
                <p style={{ fontSize: "17px" }}>4. part of the main actions + notice</p>
                <img src={actionNotice}/>
              </div>
              <div className={styles.exploreRight}>
                <p style={{ fontSize: "17px" }}>Clear call out, but not cohesive with the current designs </p>
              </div>
            </div>
          </div>

          <h4 style={{marginBottom:"60px"}}>HONING IN BY LOOKING AT DESIGN PATTERNS WITHIN JW’S PLATFORM (INTERNATIONAL TEAM 🌎 )</h4>
          <div className={styles.patternContainer}>
            <div className={styles.pattern}>
              <img src={futureLayoff} />
              <p style={{ fontSize: "17px" }}>As an admin or manager, given that the employee has a terminated scheduled in the future, I should see <span className={styles.bold}>a status of their employment status.</span></p>
            </div>
            <div className={styles.pattern}>
              <img src={pastLayoff} />
              <p style={{ fontSize: "17px" }}>As an admin or manager, given the employee’s <span className={styles.bold}>last day has passed</span>, I should see that they have been terminated.</p>
            </div>
          </div>

          <img src={pendingTermination} />
          <div className={styles.greenBackground}>
            <div className={styles.greenLeft}>
              <h4>Intuitive & easy to use 👍🏻 </h4>
            </div>
            <div className={styles.greenRight}>
              <p style={{ fontSize: "17px" }}>Visual cues differentiate 'pending' from 'terminated' statuses, with form access via a card <span className={styles.bold}>reflecting the current design system</span> on the EE’s profile page.</p>
            </div>
          </div>
          <hr className={styles.line} />
          <h1>EDITING AND OVERVIEW OF A PREVIOUSLY SUBMITTED FORM</h1>
          <p style={{marginBottom:"60px", marginTop:"40px"}}>Admins will edit their previously submitted separation forms. Since each state has different termination requirements, it's important to track dynamically changing questions. <span className={styles.bold}>Understanding how the questionnaire data is managed on the backend is key to integrating this feature.</span></p>
          <img src={fullStepper} style={{width:"90%"}}/>
          <hr className={styles.line} />
          <h1>❗ENGINEERING CONCERN: TAKING INTO ACCOUNT THE DYNAMIC NATURE OF THE QUESTIONNAIRE  </h1>
          <p style={{marginBottom:"50px", marginTop:"40px"}}>Halfway through the internship, I hit a wall regarding what to do next. I spent a lot of time testing iterations, but one thing I overlooked was the complexity of the questionnaire. <span className={styles.bold}>I focused too much on WHAT the editing flow would look like and forgot HOW it would be integrated.</span></p>
          <p style={{marginBottom:"50px"}}>An attempt to understand the HOW and WHY the questionnaire was built, I set up a meeting with my engineering team and break down the flow with a flow chart of each section. </p>
          <img style={{ width: "90%", marginBottom:"60px" }} src={flowChart} />
          <h4>STEPPER REFLECTING THE COMPLEXITY OF EACH SECTION</h4>
          <img src={stepperComplexity} />

          <hr className={styles.line} />
          <h1>TACKLING EACH STEP ONE STEP AT A TIME 👣 </h1>
          <h4 style={{ fontFamily: "Karla Bold", marginTop:"80px", marginBottom:"25px" }}>EDIT DETAILS</h4>
          <img src={editDetails} style={{ marginBottom:"70px" }}/>
          <img src={entryPoint} />
          <div className={styles.greenBackground}>
            <div className={styles.greenLeft}>
              <h4>⏩ Improve Efficiency  </h4>
            </div>
            <div className={styles.greenRight}>
              <p style={{ fontSize: "17px" }}>By <span className={styles.bold}>informing users of the new questions upfront,</span> we help users understand the editing process better, hence  minimize back-and-forth conversations.</p>
            </div>
          </div>
          <hr className={styles.line} />
          <h4 style={{ fontFamily: "Karla Bold" }}>EDIT BACKGROUND INFORMATION</h4>
          <img src={editBackgroundInfo} style={{ marginTop:"17px", marginBottom:"25px" }}/>
          <h4 style={{ fontFamily: "Karla Bold" }}>EXPLORATION: IN-LINE EDITING</h4>
          <img src={inlineEditing} style={{ marginTop:"17px", marginBottom:"75px" }}/>
          <img src={bigEditBackground} />
          <div className={styles.greenBackground}>
            <div className={styles.greenLeft}>
              <h4>✏️  Clear Edit Feedback </h4>
            </div>
            <div className={styles.greenRight}>
              <p style={{ fontSize: "17px" }}> <span className={styles.bold}>Being certain about decisions:</span> A confirmation modal appears when users attempt to leave the page to ensure they are certain about their decision.</p>
            </div>
          </div>
          <hr className={styles.line} />
          <h4 style={{ fontFamily: "Karla Bold" }}>EDIT PAYMENTS</h4>
          <h4 style={{ fontFamily: "Karla Bold", marginTop: "50px"}}>Payments should be disabled. </h4>
          <p style={{marginBottom: "50px"}}>Payments are complex, so JW created a separate flow for editing within the Payment Center. I iterated on various designs for disabled payments before choosing the most straightforward one</p>
          <img src={editPayments} />
          <div className={styles.greenBackground}>
            <div className={styles.greenLeft}>
              <h4>⏩ Improve Efficiency  </h4>
            </div>
            <div className={styles.greenRight}>
              <p style={{ fontSize: "17px" }}><span className={styles.bold}>The Payment Center already includes an edit payment flow;</span> directing users there enables them to explore and better understand the payment editing process on their own.</p>
            </div>
          </div>
          <hr className={styles.line} />
          <h4 style={{ fontFamily: "Karla Bold" }}>CONFIRMATION BANNER</h4>
          <img src={confirmationBanner} />
          <div className={styles.greenBackground}>
            <div className={styles.greenLeft}>
              <h4>✏️  Clear Edit Feedback </h4>
            </div>
            <div className={styles.greenRight}>
              <p style={{ fontSize: "17px" }}>Adding a banner at the top will provide <span className={styles.bold}>clear, immediate feedback on edits,</span> helping users quickly understand and confirm that changes have been made.</p>
            </div>
          </div>
          <hr className={styles.line} />
          <h1>CUSTOMER SUPPORT’S EDITING FLOW</h1>
          <img src={csEditingFlow} style={{ marginBottom:"30px", marginTop:"30px" }}/>
          <p style={{ marginBottom:"70px"}}>With the customer support platform being internal, I had more freedom for blue-sky designs without strict adherence to JW’s design system. This helped me practice organizing dense, crucial information for easy navigation</p>
          <h4 style={{ fontFamily: "Karla Bold", color: "#325B5B" }}>ASKING CUSTOMER SUPPORT FOR WHAT THEY NEED </h4>
          <img src={csNeeds} />
          <hr className={styles.line} />
          <h4 style={{ fontFamily: "Karla Bold" }}>WHAT INFORMATION CS NEEDS TO SEE TO FILE THE CLAIM? </h4>
          <img src={csInfo} style={{width: "80%", marginTop: "30px", marginBottom:"50px"}}/>
          <h4 style={{ fontFamily: "Karla Bold" }}>AUDIT LOG (ACCORDION DESIGN)</h4>
          <img style={{ width: "90%" }} src={auditLog} />
          <h4 style={{ fontFamily: "Karla Bold" }}>VERSION HISTORY</h4>
          <img style={{ width: "90%", marginTop: "30px", marginBottom:"70px"}} src={versionHistory} />
          <h4 style={{ fontFamily: "Karla Bold" }}>WHY CHOOSE ONE WHEN YOU CAN COMBINE BOTH TOGETHER?</h4>
          <img style={{ width: "80%" }} src={combineBoth} />
          <img src={dropDown} />

          <hr className={styles.line} />
          <h4 style={{ fontFamily: "Karla Bold" }}>EDIT ENTRY POINT (MOST RECENT VERSION VS NOT) </h4>
          <img src={editEntryPoint} />

          <hr className={styles.line} />
          <h4 style={{ fontFamily: "Karla Bold" }}>EDITING WITHIN THE SUI INTERNAL PAGE</h4>
          <h4 style={{ fontFamily: "Karla Bold", color: "#325B5B" }}>The internal page will keep on growing in the future with more information/data. </h4>
          <h4>After weighing the options between inline editing and creating a more distinct editing environment, I chose the latter. The current page is a continuous scroll, and as it grows, separating the editing experience ensures clarity and avoids confusion. This approach aligns better with the <span className={styles.bold}>future scalability of the design.</span></h4>
          <img src={separationForm} style={{marginTop: "60px"}} />

          <hr className={styles.line} />
          <h4 style={{ fontFamily: "Karla Bold" }}>IN-LINE EDITING USE CASES ✏️ </h4>
          <h4 style={{ fontFamily: "Karla Bold", color: "#325B5B" }}>The form includes various editing states: inline text editing, single select, multi-select, date picker, file uploads, and more.</h4>
          <img src={singleSelect} style={{marginTop: "60px"}}/>
          <img src={uploadFiles} style={{marginTop: "40px"}}/>
          <img src={textEditing} style={{marginTop: "40px"}}/>
          <img src={multiSelect} style={{marginTop: "40px"}}/>
          <img src={datePickers} style={{marginTop: "40px"}}/>

          <hr className={styles.line} ref={finalDesignsRef} />
          <h1>🪄 TA-DA! FINAL DESIGNS </h1>

          <div className={styles.finalCont} style={{marginTop:"60px"}}>
            <div className={styles.darkGreen}>
              <h4>ENTRY POINT</h4>
            </div>
            <div className={styles.lightGreen}>
              <div className={styles.finalLeft}>
                <img className={styles.finalPic} src={finalEntryPoint} />
              </div>
              <div className={styles.finalRight} style={{paddingTop: "73px"}}>
                <div className={styles.finalContent}>
                  <div className={styles.finalHeading}>
                    <img src={pointLine} />
                    <h4>STATUS BADGE</h4>
                  </div>
                  <p>Visual cues for those who are “pending” versus “terminated”</p>
                </div>
                <div className={styles.finalContent}>
                  <div className={styles.finalHeading}>
                    <img src={pointLine} />
                    <h4>ENTRY POINT</h4>
                  </div>
                  <p>Visual cues for those who are “pending” versus “terminated”</p>
                </div>
              </div>
            </div>

            <div className={styles.darkGreen}>
              <h4>OVERALL VIEW</h4>
            </div>
            <div className={styles.lightGreen}>
              <div className={styles.finalLeft}>
                <img className={styles.finalPic} src={finalViewpoint} style={{width:"700px"}}/>
              </div>
              <div className={styles.finalRight} style={{paddingTop: "60px"}}>
                <div className={styles.finalContent}>
                  <div className={styles.finalHeading}>
                    <img src={pointLine} />
                    <h4>PREVIEW PAGE </h4>
                  </div>
                  <p>View the previous submitted form. Users can choose to view information, or edit each sections</p>
                </div>
                <div className={styles.finalContent}>
                  <div className={styles.finalHeading}>
                    <img src={pointLine} />
                    <h4>SECTIONS</h4>
                  </div>
                  <p>The form is divided up by details info, background info, and payments</p>
                </div>
              </div>
            </div>

            <div className={styles.darkGreen}>
              <h4>DETAILS EDIT</h4>
            </div>
            <div className={styles.lightGreen}>
              <div className={styles.finalLeft}>
                <img className={styles.finalPic} src={finalDetails} style={{width:"700px"}}/>
              </div>
              <div className={styles.finalRight} style={{paddingTop: "250px"}}>
                <div className={styles.finalContent}>
                  <div className={styles.finalHeading}>
                    <img src={pointLine} />
                    <h4>SEPARATION REASON & TYPE </h4>
                  </div>
                  <p>Changing these will dynamically change the questions that come after. </p>
                </div>
                <div className={styles.finalContent}>
                  <div className={styles.finalHeading}>
                    <img src={pointLine} />
                    <h4>BANNER</h4>
                  </div>
                  <p>Letting users know they will have to fill out a new set of questions </p>
                </div>
              </div>
            </div>

            <div className={styles.darkGreen}>
              <h4>BACKGROUND INFO EDITS</h4>
            </div>
            <div className={styles.lightGreen}>
              <div className={styles.finalLeft}>
                <img className={styles.finalPic} src={finalBackgroundInfo} style={{width:"700px"}}/>
              </div>
              <div className={styles.finalRight} style={{paddingTop:"200px"}}>
                <div className={styles.finalContent}>
                  <div className={styles.finalHeading}>
                    <img src={pointLine} />
                    <h4>EXIT MODEL </h4>
                  </div>
                  <p>A confirmation modal appears when users attempt to leave the page to ensure they are certain about their decision.</p>
                </div>
              </div>
            </div>

            <div className={styles.darkGreen}>
              <h4>PAYMENT EDITS</h4>
            </div>
            <div className={styles.lightGreen}>
              <div className={styles.finalLeft}>
                <img className={styles.finalPic} src={finalPayment} style={{width:"700px"}}/>
              </div>
              <div className={styles.finalRight} style={{paddingTop:"350px"}}>
                <div className={styles.finalContent}>
                  <div className={styles.finalHeading}>
                    <img src={pointLine} />
                    <h4>PAYMENTS ARE DISABLED </h4>
                  </div>
                  <p>Editing payments will lead users to the Payment Center where they can make edits there</p>
                </div>
              </div>
            </div>

            <h4 style={{ fontFamily: "Karla Bold", color: "#325B5B", marginTop:"80px"}}>CUSTOMER SUPPORT’S EDITING FEATURE</h4>
            <div className={styles.darkGreen}>
              <h4>VERSION HISTORY LOG</h4>
            </div>
            <div className={styles.lightGreen}>
              <div className={styles.finalRight} style={{paddingTop:"90px"}}>
                <div className={styles.finalContent}>
                  <div className={styles.finalHeading} style={{paddingLeft:"60px", paddingRight:"0px", justifyContent:'space-between'}}>
                    <h4>VERSION HISTORY</h4>
                    <img src={linePoint} style={{height:"4px"}}/>
                  </div>
                  <p >Drop down with when edits were made and who made the edits </p>
                  <p>“Most recent” form is the default </p>
                  <div className={styles.finalHeading} style={{paddingLeft:"60px", paddingRight:"0px", justifyContent:'space-between', paddingTop:"50px"}}>
                    <h4>EDITING ACCESS</h4>
                  </div>
                  <p>Editing is only available to the most recent form</p>
                </div>
              </div>
              <div className={styles.finalLeft}>
                <img className={styles.finalPic} src={finalVersion} style={{width:"700px"}}/>
              </div>
            </div>

            <div className={styles.darkGreen}>
              <h4>IN-LINE EDITING (MODAL)</h4>
            </div>
            <div className={styles.lightGreen}>
              <div className={styles.finalLeft}>
                <img className={styles.finalPic} src={finalInlineEditing} style={{width:"700px"}}/>
              </div>
              <div className={styles.finalRight} style={{paddingTop:"30px"}}>
                <div className={styles.finalContent}>
                  <div className={styles.finalHeading}>
                    <img src={pointLine} />
                    <h4>EDIT ENTRY </h4>
                  </div>
                  <p>Lives on top of the section. Only shows up on the “Most recent” form</p>
                </div>
                <div className={styles.finalContent} style={{paddingTop:"40px"}}>
                  <div className={styles.finalHeading}>
                    <img src={pointLine} />
                    <h4>EDIT MODAL </h4>
                  </div>
                  <p>All questions are in their editable state</p>
                </div>

                <div className={styles.finalContent}>
                  <div className={styles.finalHeading}>
                    <img src={pointLine} />
                    <h4>SAVE & CLEAR EDITS</h4>
                  </div>
                  <p>CTA at the bottom </p>
                </div>
              </div>
            </div>

            <hr className={styles.line} />
            <h1 style={{marginBottom:"40px"}}>TAKEAWAYS</h1>

            <div className={styles.greenBackground}>
              <div className={styles.greenLeft} style={{width:"300px"}}>
                <h4>DEALING WITH AMBIGUITY </h4>
              </div>
              <div className={styles.greenRight} >
                <p style={{ fontSize: "17px" }}>Ambiguity is overwhelming, but it pushes you to ask questions to tackle those moving parts </p>
              </div>
            </div>

            <div className={styles.greenBackground} style={{padding:"10px 60px", marginBottom:"50px"}}>
              <div className={styles.greenLeft} style={{width:"500px", textAlign:"center"}}>
                <h4>AVOIDING POTENTIAL ROADBLOCKS</h4>
              </div>
              <div className={styles.greenRight}>
                <p style={{ fontSize: "17px" }}>Having engineers review designs early ensures that technical feasibility is considered from the start that may not be apparent from a design-only perspective.</p>
              </div>
            </div>

            <p>This was my second time returning to Justworks as their product design intern. I could tell how much I have grown as a designer since last summer. The ambiguity of the project allowed me to keep pushing for more answers, giving me the chance to utilize the resources around me such as my manager, mentor, PM, CS, and engineers to gain insights and feedback. This not only helped me understand the intricacies of SUI but also sharpened my design skills. I also learned the importance of relationship-building, especially when managing conflicting priorities. By developing strong connections with my team and stakeholders, I was able to navigate challenging situations, like engineer reviews and stakeholder meetings, with more confidence.</p>

            <hr className={styles.line} />
            <h1>THE PEOPLE ARE THE BEST PART ❤️ </h1>
            <img src={people1}/>
            <img src={people2}/> 

          </div>


        </div>
      </div>
      <Contact />
    </div>
  );
}