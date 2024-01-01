import './Experience.css'
import { SlCalender } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";

function Experience(){
    return (
        <div className="container-fluid" id="experience">
            <h1 className="text-center title mb-5"> EXPERIENCE </h1>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-4">
                        <h2>ServiceNow</h2>
                        <h3>  Associate Software Engineer</h3>
                        <div className="d-flex align-items-center">
                            <SlCalender style={{height : "20px", color : "#007EE5"}}/>
                            <h4 style={{paddingLeft : "10px",paddingTop : "5px"}}> Aug 2022 - July 2023</h4>
                        </div>
                        <div className="d-flex align-items-center">
                            <SlLocationPin style={{height : "25px", color : "#007EE5"}}/>
                            <h4 style={{paddingLeft : "10px",paddingTop : "5px"}}> Hyderabad, India</h4>
                        </div>
                    </div>
                    <div className="col-1 vline">

                    </div>
                    <div className="col-7 ">
                        <div>
                            <ul>
                                <li>Built Servicenow application to actively monitor issues in product through logs and report them, thus resulting in
customers facing 70% less issues</li>
                                <li>Identified Queries with longer run time and resettled them to Read Replica to improve performance by over 80%</li>
                                <li>Developed Client Scripts, Business Rules and Automated Workflows in JavaScript for Servicenow applications</li>
                                <li>Resolved 50+ defects and customer issues through thorough debugging and collaboration with cross-functional
teams, resulting in a 40% reduction in user complaints and a 25% increase in customer satisfaction</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-4">
                        <h2>NCR Corporation</h2>
                        <h3>  Software Engineer Intern</h3>
                        <div className="d-flex align-items-center">
                            <SlCalender style={{height : "20px", color : "#007EE5"}}/>
                            <h4 style={{paddingLeft : "10px",paddingTop : "5px"}}> Jan 2022 - July 2022</h4>
                        </div>
                        <div className="d-flex align-items-center">
                            <SlLocationPin style={{height : "25px", color : "#007EE5"}}/>
                            <h4 style={{paddingLeft : "10px",paddingTop : "5px"}}> Hyderabad, India</h4>
                        </div>
                    </div>
                    <div className="col-1 vline">

                    </div>
                    <div className="col-7 ">
                        <div>
                            <ul>
                                <li>Upgraded 30+ dependencies and resolved conflicts in Spring. Raised the code quality from 60% to 75% by fixing
bugs/errors</li>
                                <li> Corrected Unit Tests and improved code test coverage using JUnit’s </li>    
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <h2>Mindler</h2>
                        <h3> Frontend Developer Intern </h3>
                        <div className="d-flex align-items-center">
                            <SlCalender style={{height : "20px", color : "#007EE5"}}/>
                            <h4 style={{paddingLeft : "10px",paddingTop : "5px"}}> June 2021 - Dec 2021</h4>
                        </div>
                        <div className="d-flex align-items-center">
                            <SlLocationPin style={{height : "25px", color : "#007EE5"}}/>
                            <h4 style={{paddingLeft : "10px",paddingTop : "5px"}}> Hyderabad, India</h4>
                        </div>
                    </div>
                    <div className="col-1 vline">

                    </div>
                    <div className="col-7 ">
                        <div>
                            <ul>
                                <li>Migrated existing PHP applications to Angular and built few Angular applications from scratch</li>
                                <li>Revamped web page features and aesthetics, resulting in a 60% reduction in response time</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;