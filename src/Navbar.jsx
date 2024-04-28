import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Zachary Graham</h1>
            <div className="links">
                <Link to="/React-Portfolio">About Me</Link>
                <Link to="/React-Portfolio/skills">Skills</Link>
                <Link to="/React-Portfolio/projects">Projects</Link>
                <Link to="/React-Portfolio/experience">Experience</Link>
                <Link to="/React-Portfolio/contact">Contact Me</Link>
            </div>
        </div>


     );
}
 
export default Navbar;