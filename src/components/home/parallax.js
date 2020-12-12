import React, { Component } from 'react';
import './parallax.css';
import Compa from './compa';
import {Link} from 'react-router-dom';


export default class Parallax extends Component {
    render() {
        return (
            <div>
                {/* <div className=" kol">
                    <div className="container">
                    <div className="row">
                    <div className=" col-sm title"> 
                    <h3><b>Building Career with EGS</b></h3>
                    <p>At Evren Global Solutions Pvt. Ltd., we believe that our team is our biggest strength and we take pride in hiring ONLY the best and the brightest. If you are confident that you would play a significant role in the overall success of the venture and have the most enjoyable, learning packed and truly meaningful experience with Evren Global Solutions Pvt. Ltd., then please drop your resume at info@evrenglobalsolutions.com. Our HR team will contact you after they review your application. </p>

                    </div>
                    <div className="col-sm"></div>
                    
                </div>
                </div>
                    </div> */}
                    
                <section className="ko"> 
                <Compa/>
                </section>
                <div className="kl">
                    <div className="connect">
                        <h3>Connect with EGS</h3><br/>
                        <p>Getting in touch with innovation and digitalization. Email us for any questions and queries or call us.</p>
                        <Link to="/contact"><button type="button" className="btn btn-primary " >Contact Us</button></Link>
                    </div>
                </div>
            </div>

        )
    }
}