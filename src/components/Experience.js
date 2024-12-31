import React from 'react';
import './Experience.css';
import moratuwa_logo from '../images/UOM.PNG';
import BoardPac_logo from '../images/BoardPac.PNG';

function Experience() {
    return (
        <section id="experience" className="experience">
            <h2>Experiences</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <img src={moratuwa_logo} alt="Moratuwa Logo" />
                    </div>
                    <div className="timeline-content">
                        <h3>University of Moratuwa, Katubedda, Sri Lanka</h3>
                        <p>
                        B.Sc. Engineering (Hons)<br />
                        Specialization: Computer Science and Engineering<br />
                        Stream: CSE Main Stream <br/>
                        Software Engineering, Systems Engineering, and Network Engineering
                            {/* B.Sc Engineering with specialization in Computer Science and Engineering<br />

                            GPA: 3.4/4.00<br />
                            Earned placement in the Dean's List thrice<br />
                            Involved in maintenance of the CSE Department website */}
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <img src={BoardPac_logo} alt="WSO2 Logo" />
                    </div>
                    <div className="timeline-content">
                        <h3>Intern - Software Engineer -BoardPAC</h3>
                        <p>
                        Actively involved in the development of the Ronde project and Partner engagement platform.<br />
                        Worked on both frontend and backend Developments.<br />
                        Technologies: Identity Server, Angular,  Asp.Net Core, Flutter, PostgreSQL.
                        </p>
                    </div>
                </div>

                
            </div>
        </section>
    );
}

export default Experience;
