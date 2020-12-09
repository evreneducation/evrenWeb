import React, { Component } from 'react';
import Img1 from '../../assets/help1.jpg';



export default class Career extends Component {
    render() {
        return (
            <div>
                <div className="container cara">
                    <h2><b>Building your career with EGS</b></h2>
                    <p> More than a job, its an adventure in innovation. If you wish to be considered for employment at <br/>SLT, please don't share a message, here - instead, please complete Our job application and our<br/> Human Resources Department will contact you after their review of your submitted information.</p>
                </div>
                <div className="carb">
                <div className="container cara">
                    <h2><b>Career Development</b></h2>
                    <p>Stay one step ahead and cognizance the quintessential of our spirited and divergent workforce.</p>
                    <br/>
                    <div className="row">
                        <div className="col-sm">
                            <img src={Img1} alt="im" className="img-fluid"/>
                    
                            <div>
                            <br/>
                                <h3><b>Competence Proffesional</b></h3>
                                <p>SLT permit you to build upon its accumulated priceless wealth of experience and to gain own expertise.</p>
                            </div>
                        </div>
                        <div className="col-sm">
                        <img src={Img1} alt="im" className="img-fluid"/>
                            <div>
                            <br/>
                                <h3><b>Fresh Hiring</b></h3>
                                <p>Stay one step ahead in race by stimulating with SLT</p>
                            </div>
                        </div>
                        <div className="col-sm">
                        <img src={Img1} alt="im" className="img-fluid"/>
                            <div>
                            <br/>
                                <h3><b>Internship</b></h3>
                                <p>Boost your skill and gain IT skills with SLT internship program</p>    
                            </div>
                        </div>
                    </div>
                </div>

                </div>
                <div className="carb">
                    
                
            </div>
            </div>
        )
    }
}
