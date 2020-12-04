import React, { Component } from 'react';
import './home.css';
import Img1 from '../../assets/desktop.png';

export default class Compc extends Component {
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
                    <b>International Training</b>
                  </span>
                  <br />
                  <br/>
                  
                  
                  <p className="utext">We help you get a preview of foreign companies and Universities by offering International Training in Summer holidays.
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
