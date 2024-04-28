const Contact = () => {
    return ( 
        <div classname="contact-section">
            <div classname="contact">

                <h1 id="contact-title">Contact Me</h1>
    
                <div classname="card-section">
                    <div classname="card">
                        <p>
                            <a href="https://www.linkedin.com/in/zachary-graham-944234286/">
                                <img classname="contactlogos" id="linkedin" src="./src/images/contact/linkedin.webp" alt="LinkedIn"/>
                            </a>
                        </p>
                        <p>
                            <a href="mailto:zacg713@gmail.com">
                                <img classname="contactlogos" src="./src/images/contact/gmail.webp" alt="Mail"/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;