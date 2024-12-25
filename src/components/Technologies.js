import React from "react";
import "./Technologies.css";
import BoardPac_logo from "../images/BoardPac.PNG";

const technologies = [
  { name: "Java", src: BoardPac_logo },
  { name: "Python", src: BoardPac_logo },
  { name: "C#", src: "path_to_csharp_logo" },
    { name: "C++", src: "path_to_cpp_logo" },
    { name: "JavaScript", src: "path_to_javascript_logo" },
    { name: "TypeScript", src: "path_to_typescript_logo" },
    { name: "Dart", src: "path_to_dart_logo" },
    { name: "HTML5", src: "path_to_html5_logo" },
    { name: "CSS3", src: "path_to_css3_logo" },
    { name: "Flutter", src: "path_to_flutter_logo" },
    { name: "Windows", src: "path_to_windows_logo" },
    { name: "Node.js", src: "path_to_nodejs_logo" },
    { name: "Angular", src: "path_to_angular_logo" },
    { name: "React", src: "path_to_react_logo" },
    { name: ".NET Core", src: "path_to_dotnet_logo" },
    { name: "MySQL", src: "path_to_mysql_logo" },
    { name: "PostgreSQL", src: "path_to_postgresql_logo" },
    { name: "AWS", src: "path_to_aws_logo" },
    { name: "GitHub", src: "path_to_github_logo" },
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
