import styles from '../css/JustworksEditing.module.css';
import justworks from '../images/justworks-editing-cover.jpeg';
import { Helmet } from "react-helmet";
import Contact from './Contact';


export default function JustworksEditing() {
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
              <div className={styles.greenBar}>
                <p>Currently putting together, come back soon!</p>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    );
}