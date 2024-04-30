const Projects = () => {
    return ( 
        <div className="projects-section">
            <div className="projects">

                <h1 id="projects-title">Projects</h1>
    
                <div className="project-card-section">
                    <div className="project-card">
                        <div className="project-card-text">
                            <h1 className="project-card-title">Fit Buddy</h1>
                        
                            <p>
                                The fitness social media app provides a easy and immersive user experience.
                                By utilizing flutter it allows our users to connect with like-minded individuals, 
                                share their workout triumphs, and compete with friends to unlock the most achievements.
                            </p>

                            <a href="https://github.com/robinmonsere/FitBuddy_App" class="github">
                                <button className="github-button">Github</button>
                            </a>
                        </div>
                        
                        <div className="project-images">
                            <img src="./React-Portfolio/images/projects/profile.webp" alt=""/>
                            <img src="./React-Portfolio/images/projects/timeline.webp" alt=""/>
                            <img src="./React-Portfolio/images/projects/matchmaking.webp" alt=""/>    
                        </div>
                    </div>
        
                    <div className="project-card">
                        <div className="project-card-text">
                            <h1 className="project-card-title">Job Harvester</h1>
                        
                            <p>
                                Job Harvester is a webpage/extension that helps the user organize their job search process by giving them access to
                                a dashboard that will automatically update their status with the companies they have applied to by classifying their job emails using Naive Bayes Classifier.
                            </p>

                            <a href="https://github.com/TheEMG/Job-Harvester" class="github">
                                <button className="github-button">Github</button>
                            </a>
                        </div>
                        
                        <div className="project-single-image">
                            <img src="./React-Portfolio/images/projects/jobharvester.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;