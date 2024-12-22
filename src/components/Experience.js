import React from 'react';
import './Experience.css';

function Experience() {
    return (
        <section id="experience" className="experience">
            <h2>Experiences</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <img src="moratuwa_logo.png" alt="Moratuwa Logo" />
                    </div>
                    <div className="timeline-content">
                        <h3>BSc Engineering - University of Moratuwa (CSE Department)</h3>
                        <p>
                            B.Sc Engineering with specialization in Computer Science and Engineering<br />
                            GPA: 3.77/4.00<br />
                            Earned placement in the Dean's List thrice<br />
                            Involved in maintenance of the CSE Department website
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <img src="wso2_logo.png" alt="WSO2 Logo" />
                    </div>
                    <div className="timeline-content">
                        <h3>Intern - Software Engineer -Ironone</h3>
                        <p>
                            Member of the Identity and Access Management team.<br />
                            Developed JavaScript SDKs to integrate authentication.<br />
                            Technologies: Identity Server, Asgardeo, OAuth, JavaScript, TypeScript, React, Ballerina.
                        </p>
                    </div>
                </div>

                
            </div>
        </section>
    );
}

export default Experience;
