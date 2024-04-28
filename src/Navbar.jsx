import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Zachary Graham</h1>
            <div className="links">
                <Link to="/">About Me</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/contact">Contact Me</Link>
            </div>
        </div>


     );
}
 
export default Navbar;