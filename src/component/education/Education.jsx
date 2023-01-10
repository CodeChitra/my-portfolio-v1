import "./Education.scss";
import React from "react";
const Education = () => {
    return <div className="education" id="education">
        <h1 className="heading">Education</h1>
        <ul className="educationList">

            <div className="path">

                <div className="path-container">

                    <div className="dot" style={{ backgroundColor: "#C780FA" }}></div>
                    <div className="line"></div>
                    <div className="dot" style={{ backgroundColor: "#39B5E0" }}></div>
                    <div className="line"></div>
                    <div className="dot" style={{ backgroundColor: "#FF7B54" }}></div>
                </div>
            </div>

            <div className="items">
                <li>
                    <h3>Bachelor Of Computer Application CGPA: 8.14/10 (2019-2022)</h3>
                    <p>Axis Colleges, Kanpur, India</p>

                </li>
                <li>
                    <h3>Class 12th (UP Board) Percent: 83% (2018-2019)</h3>
                    <p>SVM Inter College, Khaga, Fatehpur, India</p>
                </li>
                <li>
                    <h3>Class 10th (UP Board) Percent: 82% (2017-2018)</h3>
                    <p>SVM Inter College, Khaga, Fatehpur, India</p>
                </li>
            </div>
        </ul>
    </div>
}

export default Education;