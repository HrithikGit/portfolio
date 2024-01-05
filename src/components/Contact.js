import { LuSend } from "react-icons/lu";
import { FaHandshake } from "react-icons/fa";

import emailjs from '@emailjs/browser';

import logo from './../images/logo.png';

function Contact(){

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vm8uzyx', 'template_udlpehc', e.target , 'VGPTLa5VbyVHctvTo')
          .then((result) => {
            e.target.reset();
            alert("Message Sent Successfully!");
          }, (error) => {
              console.log(error.text);
          });
    };
    
    return (
        <div className="container mt-5" id="contact">
            <h1 className="title text-center mb-5"> CONTACT </h1>
            <div className="text-center px-5 m-5">   
                Thank you for exploring my portfolio! If you have any questions, collaboration ideas, or just want to connect, feel free to reach out to me. I'm always excited to discuss new opportunities and projects
                <FaHandshake style={{marginLeft : "3px"}}/>
            </div>
            <form className="pb-3" onSubmit={sendEmail}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-6">
                            <img src={logo} style={{borderRadius : 10}} width="450px"/>
                        </div>
                        <div className="col-6">
                            <div className="form-group d-flex flex-column align-items-center">
                                <input className="form-control w-100 mb-4" type="text" name="from_name" placeholder="Full Name"></input>
                                <input className="form-control w-100 mb-4" type="text" name="from_email" placeholder="Email"></input>
                                <textarea className="form-control w-100 mb-4" id="message" name="message" rows="4" placeholder="Message..."></textarea>
                                <button className="btn btn-primary d-flex align-items-center" type="submit"> <span style={{marginRight : "2px"}}> Send </span>   <LuSend /></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <input className="form-control" type="text" name="Name" placeholder="Full Name"></input> */}
                    
            </form>
        </div>
    )
}

export default Contact;