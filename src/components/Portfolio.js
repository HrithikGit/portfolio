import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'

import potholeDetection from './../images/PotholeDetection.jpeg'
import SchoolManagement from './../images/SchoolManagement.png'
import ExampleCarouselImage from './../images/profile_pic.jpeg'

function Portfolio( {colortheme} ){
    const containerStyle = {  marginTop : "50px", marginBottom: "100px", maxWidth : "80%"};
    return(
        <div className="container-fluid my-4" id="portfolio">
            <h1 className="title text-center">PORTFOLIO</h1>
            <Carousel variant={colortheme=="dark-theme" ? "light" : "dark"}>
                <Carousel.Item interval={5000}>
                    <div className="container" style={containerStyle}>
                        <div className="row d-flex flex-wrap align-items-center">
                            <div className="col-8">
                                <h2 style={{color : "#007EE5"}}> Pothole Detection and Reporting System </h2>
                                <p className="bold"> A Python Project to detect Potholes from live camera feed and report the image and location to governing officials, so that the officials can take corresponding actions</p>
                                <div className="d-flex flex-wrap ">
                                    <ul className=""> 
                                        <span className="bold-text">Key Features </span>
                                        <li> YOLO Model to Detect Potholes from camera with 90% accuracy </li>
                                        <li> Report detected Potholes to Database</li>
                                        <li> Webapp to view detected potholes data</li>
                                    </ul>
                                   <p> <span className="bold-text">Technologies : </span> Python, OpenCV, Flask, Object Detection, Angular</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <img width="350px" src={potholeDetection}></img>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className="container" style={containerStyle}>
                        <div className="row d-flex flex-wrap align-items-center">
                            <div className="col-8">
                                <h2 style={{color : "#007EE5"}}> School Management Mobile App </h2>
                                <p > Developed a comprehensive mobile application for a real-time school environment utilizing NativeScript framework integrated with Angular and Firebase. The application is tailored to accommodate diverse user functionalities, addressing the unique needs of stakeholders, including Principal, Teachers, and Students. </p>
                                <div className="d-flex flex-wrap ">
                                    <ul className=""> 
                                        <span className="bold-text">Key Features </span>
                                        <li> SignUp or SignIn as User/ Chef </li>
                                        <li> Search, Select and Book a chef for event</li>
                                        <li> Chef can accept or decline book requests</li>
                                    </ul>
                                   
                                </div>
                                <p> <span className="bold-text">Technologies : </span> Angular, NativeScript, Firebase </p>
                            </div>
                            <div className="col-4">
                                <img width="350px" height="300px" src={SchoolManagement}></img>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Portfolio;