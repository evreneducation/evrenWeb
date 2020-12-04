import React, { Component } from 'react';
import './home.css';
import Img1 from '../../assets/desktop.png';

export default class Compa extends Component {
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
                    <b>IT Solutions</b>
                  </span>
                  <br />
                  <br/>
                  
                  <p className="aboutext">EGS provides complete IT Solutions like ERP solutions, website development, Android/IOS app development, Data Analytics etc. We have a complete range of tech stack available with us. A strong headed technical staff is capable on working latest trends and technologies like Machine Learning, Business Intelligence, Angular JS, React JS, VueJS, Node JS, Python, Django, Golang, React Native, Swift Native, Flutter, AWS, Digital Ocean and many more. 
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
