import { LuSend } from "react-icons/lu";

import logo from './../images/logo.png';

function Contact(){
    return (
        <div className="container mt-5" id="contact">
            <h1 className="title text-center mb-5"> CONTACT </h1>
            <form className="pb-3">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-6">
                            <img src={logo} style={{borderRadius : 10}} width="450px"/>
                        </div>
                        <div className="col-6">
                            <div className="form-group d-flex flex-column align-items-center">
                                <input className="form-control w-100 mb-4" type="text" name="Name" placeholder="Full Name"></input>
                                <input className="form-control w-100 mb-4" type="text" name="Email" placeholder="Email"></input>
                                <textarea className="form-control w-100 mb-4" id="message" rows="4" placeholder="Message..."></textarea>
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