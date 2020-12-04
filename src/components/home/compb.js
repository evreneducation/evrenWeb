import React, { Component } from 'react';
import './home.css';
import Img1 from '../../assets/desktop.png';

export default class Compb extends Component {
    render() {
        return (
            <div>
                <div className="homecomp1"  >
            <div className="homec" >
            <div className="row ">
            <div className="col-lg-4 col-md-8">
                <div className="about-image">
                  <img src={Img1} className="img-fluid" alt="chairman" />
                </div>
              </div>
              <div className="col-lg-8 col-md-18">
                <div className="about-content">
                  <span className="h3 bold dark">
                    <b>Overseas Education</b>
                  </span>
                  <br />
                  <br/>
                 <p className="utext">
                 With a team comprising of teachers with more than 42 years of experience in teaching, EGS will offer best guidance and counseling. We are associated with many leading Universities across India, Canada, Australia, New Zealand, and other countries. For professionals seeking help in continuing learning, we have tie-ups with institutes providing higher studies for working professionals. For students pursuing their degrees, we provide international summer training. These trainings provide a platform for students to learn global fundamentals. 
The consultants in EGS have worked in various government and private organizations across the globe. Many consultants are advisors in various startups across India. With the experience of teaching lacs of students, EGS will always be the best choice for you to get your education guidance.
                 </p>
                 </div>
              </div>
              
            </div>

                </div>
                </div>
           </div>
        )
    }
}
