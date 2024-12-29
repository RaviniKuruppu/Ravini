import React from "react";
import "./Technologies.css";
// Import all logos
import Java_logo from "../images/technologies/java.png";
import Python_logo from "../images/technologies/python.png";
import CSharp_logo from "../images/technologies/c-sharp.png";
import Cpp_logo from "../images/technologies/c.png";
import JavaScript_logo from "../images/technologies/js.png";
import TypeScript_logo from "../images/technologies/ts.png";
import Dart_logo from "../images/technologies/dart.png";
import HTML5_logo from "../images/technologies/html.png";
import CSS3_logo from "../images/technologies/css.png";
import Flutter_logo from "../images/technologies/flutter.png";
import Postman_logo from "../images/technologies/postman.png";
import NodeJS_logo from "../images/technologies/node.png";
import Angular_logo from "../images/technologies/angular.png";
import React_logo from "../images/technologies/react.png";
import DotNet_logo from "../images/technologies/netcore.png";
import MySQL_logo from "../images/technologies/mysql.png";
import PostgreSQL_logo from "../images/technologies/postgresql.svg";
import AWS_logo from "../images/technologies/aws.png";
import GitHub_logo from "../images/technologies/github.png";
import Boostrap_logo from "../images/technologies/bootstrap.png";
//import windows_logo from "../images/technologies/windows.png";

const technologies = [
  { name: "Java", src: Java_logo },
  { name: "Python", src: Python_logo },
  { name: "C#", src: CSharp_logo },
  { name: "C++", src: Cpp_logo },
  { name: "JavaScript", src: JavaScript_logo },
  { name: "TypeScript", src: TypeScript_logo },
  { name: "Dart", src: Dart_logo },
  { name: "HTML5", src: HTML5_logo },
  { name: "CSS3", src: CSS3_logo },
  { name: "Flutter", src: Flutter_logo },
  { name: "Postman", src: Postman_logo },
  { name: "Node.js", src: NodeJS_logo },
  { name: "Angular", src: Angular_logo },
  { name: "React", src: React_logo },
  { name: ".NET Core", src: DotNet_logo },
  { name: "MySQL", src: MySQL_logo },
  { name: "PostgreSQL", src: PostgreSQL_logo },
  { name: "AWS", src: AWS_logo },
  { name: "GitHub", src: GitHub_logo },
  { name: "Boostrap", src: Boostrap_logo },
//   { name: "windows", src: windows_logo },
];

function Technologies() {
    return (
        <section id="technologies" className="technologies">
            <h2>Technologies</h2>
            <div className="technologies-grid">
                {technologies.map((tech, index) => (
                    <div className="technologies-item" key={index}>
                        <img src={tech.src} alt={tech.name} className="technologies-icon" />
                        {/* <p>{tech.name}</p> */}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Technologies;
