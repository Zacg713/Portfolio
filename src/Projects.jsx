const Projects = () => {
    return ( 
        <div classname="projects-section">
            <div classname="projects">

            <h1 id="projects-title">Projects</h1>
    
            <div classname="card-section">
                <div classname="card">
                    <div classname="card-text">
                        <h1 classname="card-title">Fit Buddy</h1>
                    
                        <p>
                            The fitness social media app provides a easy and immersive user experience.
                            By utilizing flutter it allows our users to connect with like-minded individuals, 
                            share their workout triumphs, and compete with friends to unlock the most achievements.
                        </p>

                        <a href="https://github.com/robinmonsere/FitBuddy_App" class="github">
                            <button classname="github-button">Github</button>
                        </a>
                    </div>
                    
                    <div classname="images">
                        <img src="../images/projects/profile.webp" alt=""/>
                        <img src="../images/projects/timeline.webp" alt=""/>
                        <img src="../images/projects/matchmaking.webp" alt=""/>    
                    </div>
                </div>
    
                <div classname="card">
                    <div classname="card-text">
                        <h1 classname="card-title">Job Harvester</h1>
                    
                        <p>
                            Job Harvester is a webpage/extension that helps the user organize their job search process by giving them access to
                            a dashboard that will automatically update their status with the companies they have applied to by classifying their job emails using Naive Bayes Classifier.
                        </p>

                        <a href="https://github.com/TheEMG/Job-Harvester" class="github">
                            <button classname="github-button">Github</button>
                        </a>
                    </div>
                    
                    <div classname="single-image">
                        <img src="../images/projects/jobharvester.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Projects;