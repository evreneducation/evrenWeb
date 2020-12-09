import React, { Component } from 'react';
import Comma from '../comma';
import Img1 from '../../assets/international1.jpg';
import Img2 from '../../assets/koshika.jpeg';
import Img3 from '../../assets/pulkit.jpeg';
import Img4 from '../../assets/vibhu.jpeg';
import './blog.css';


export default class Blog extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Comma url={Img1} content="Testimonials" />
                <div className="container">
                    
                    <div className="row">
                        <div className="col-sm">
                            <div >
                                <img src={Img2} style={{paddingBottom:"20px"}} className="img-fluid" alt="imh"/>
                                <p style={{background:"whitesmoke"}}>
                                “It is great to understand you potential. Do visit Evren education to get the best out of yourself.”
                                </p>
                                <span>-Koshika</span>
                            </div>
                        </div>
                        
                        <div className="col-sm">
                        <div >
                                <img src={Img4} style={{paddingBottom:"20px"}} className="img-fluid" alt="imh"/>
                                <p style={{background:"whitesmoke"}}>
                                “I was not able to understand the best suitable and most economical course for myself. Thanks to Piyush Sir for guiding me.”                                </p>
                            <span>-Vibhu</span>
                            </div>
                        </div>
                        <div className="col-sm">
                        <div >
                                <img src={Img3} style={{paddingBottom:"20px"}} className="img-fluid" alt="imh"/>
                                <p style={{background:"whitesmoke"}}>
                                    “Studying in Germany was a great experience for me. I would like to thank Dinesh sir and Piyush sir for their motivation.”</p>                            </div>
                        <span>-Pulkit</span>
                        </div>
                    </div>
                </div>
            <div style={{marginTop:"40px"}} className="container">
            <h2 style={{color:"blue"}}><b>Frequently Asked Question</b></h2>
                <div className="row">
                    <div className="col-lg-7">
                        <h2><b>Where are you from?</b></h2>
                        <h4>We are a Delhi based Consultants.</h4>
                    </div>
                    <div className="col-sm">
                        <h3><b>I am confused which course to choose. Will a consultation session help me decide a course?</b></h3>
                        <h4>Yes. This is the area of our expertise.</h4>
                    </div>
                </div> 
                <div className="row">   
                    <div className="col-lg-7">
                        <h2><b>How can I visit for consultation?</b></h2>
                        <h4>You need to book an appointment prior to visiting our office.</h4>
                    </div>
                    <div className="col-sm">
                        <h2><b>I am not from Delhi. How can I connect with you?</b></h2>
                        <h4>We will arrange a Video Conference session with our consultants. You will have to fill the form in website for booking a Video Conference session.</h4>    
                    </div>
                </div>
                <div className="row">    
                    <div className="col-lg-7">
                        <h2><b>Do you have tie-ups with Universities in USA?</b></h2>
                        <h4>We don't have tie-up with Universities in USA, but we can recommend good Universities for higher studies.</h4>    
                    </div>
                    <div className="col-sm">
                        <h2><b>How much time will it take to get admission in a good University?</b></h2>
                        <h4>From your first visit till your admission, the process will take one to six months depending on the type of course and country of course.</h4>    
                    </div>
                </div>
                <div className="row">    
                    <div className="col-lg-7">
                        <h2><b>Will I get Visa assistance?</b></h2>
                        <h4>We have tie-ups with good agents for Visa assistance. We will connect you with our Visa assistance team.</h4>    
                    </div>

                </div>
            </div>    
            </div>
        )
    }
}