import './MainPage.css'

import profilePic from './../images/profile_pic.jpeg'
import linkedInIcon from './../icons/linkedin-in.svg'
import githubIcon from './../icons/github.svg'
import leetcodeIcon from './../icons/terminal-solid.svg'
import downloadSvg from './../icons/download.svg'
import resume from './../files/Resume.pdf'


function MainPage(){
    return (
        <div className="container-fluid mainpage" id="home">
           <div className="row d-flex flex-wrap-reverse align-items-center justify-content-between mh-100">
            <div className="col-3 d-flex justify-content-between">
                <div className="container d-flex flex-column justify-content-between h-100">
                    <a className="text-center" href="https://www.linkedin.com/in/hrithik-manda-6abb481b5/"  target="_blank" rel="noreferrer">
                        <img src={linkedInIcon} className="profile-icon" alt="LinkedIn"></img>
                    </a>
                    <a className="text-center" href="https://github.com/HrithikGit" target="_blank" rel="noreferrer">
                        <img src={githubIcon} className="profile-icon" alt="LinkedIn"></img>
                    </a>
                    <a className="text-center" href="https://leetcode.com/mandhahrithik/" target="_blank" rel="noreferrer">
                        <img src={leetcodeIcon} className="profile-icon" alt="LinkedIn"></img>
                    </a>
                </div>
            </div>
            <div className="col-5">
                <div className="container">
                    <h1 className="bold-text">Hi, I'am Hrithik</h1>
                    <h3>Software Developer</h3>
                    <p className="text-justify">
                        Graduate Student in Computer Science at Univerity of Central Florida with one year of professional experience in software development and Technology
                        
                    </p>
                    <p className="text-justify font-italic">
                      Logic is the foundation; syntax is just the language it speaks
                    </p>
                    <p className="text-justify">
                        <span className="bold-text"> Interests : </span> Full Stack Development, System Design, Problem Solving
                    </p>
                    <a href={resume} download="Hrithik Manda Resume" target="_blank" rel="noreferrer" >
                        <button className="btn btn-primary"> Download Resume <img src={downloadSvg} width="15px" style={{paddingBottom : '4px',paddingLeft : "2px"}} alt="icon"/> </button>
                    </a>
                </div>
            </div>
            <div className="col-4">
                <img src={profilePic} className="profile-pic" alt="Profile Pic"></img>
            </div>
            
           </div>
        </div>
    )
}

export default MainPage;