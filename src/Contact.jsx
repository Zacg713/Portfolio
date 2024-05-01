import linkedin from "/images/contact/linkedin.webp";
import gmail from "/images/contact/gmail.webp";

const Contact = () => {
    return ( 
        <div className="contact-section">
            <div className="contact">

                <h1 id="contact-title">Contact Me</h1>
    
                <div className="contact-card-section">
                    <div className="contact-card">
                        <p>
                            <a href="https://www.linkedin.com/in/zachary-graham-944234286/">
                                <img className="contactlogos" id="linkedin" src={ linkedin } alt="LinkedIn"/>
                            </a>
                        </p>
                        <p>
                            <a href="mailto:zacg713@gmail.com">
                                <img className="contactlogos" src={ gmail } alt="Mail"/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;