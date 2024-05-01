import c from "/images/skills/c++.webp";
import dart from "/images/skills/dart.webp";
import flutter from "/images/skills/flutter.webp";
import html from "/images/skills/html.webp";
import java from "/images/skills/java.webp";
import javascript from "/images/skills/javascript.webp";
import python from "/images/skills/python.webp";
import react from "/images/skills/react.png";

const Skills = () => {
    return ( 
        <div className="skills-section">
            <div className="skills">
                <h1 id="skills-title">Skills</h1>
    
                <div className="skills-card-section">
                    <div className="skills-card">
                        <h2 className="skills-card-title">C++</h2>
                        <img src={ c } alt=""/>
                        <p>3 years of experience</p>
                    </div>
    
                    <div className="skills-card">
                        <h2 className="skills-card-title">Java</h2>
                        <img src={ java } alt=""/>
                        <p>2 years of experience</p>
                    </div>
    
                    <div className="skills-card">
                        <h2 className="skills-card-title">Python</h2>
                        <img src={ python } alt=""/>
                        <p>2 years of experience</p>
                    </div>
    
                    <div className="skills-card">
                        <h2 className="skills-card-title">HTML</h2>
                        <img src={ html } alt=""/>
                        <p>1 year of experience</p>
                    </div>
    
                    <div className="skills-card">
                        <h2 className="skills-card-title">JavaScript</h2>
                        <img src={ javascript } alt=""/>
                        <p>1 year of experience</p>
                    </div>

                    <div className="skills-card">
                        <h2 className="skills-card-title">React</h2>
                        <img src={ react } alt=""/>
                        <p>1 year of experience</p>
                    </div>
    
                    <div className="skills-card">
                        <h2 className="skills-card-title">Dart</h2>
                        <img src={ dart } alt=""/>
                        <p>1 year of experience</p>
                    </div>
    
                    <div className="skills-card">
                        <h2 className="skills-card-title">Flutter</h2>
                        <img src={ flutter } alt=""/>
                        <p>1 year of experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Skills;