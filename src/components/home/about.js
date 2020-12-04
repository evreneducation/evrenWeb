import React, { Component } from 'react';
import './home.css';
import Img1 from '../../assets/office.jpg';
import {Link } from 'react-router-dom';

export default class About extends Component {
    v = (e) => {
        console.log(e.clientX, e.clientY);
    }
    render() {
        return (
            <div>
               <div className="container  about">
                   <div className="tit" style={{"textAlign" : "center"}}>
                       <h2><b>About Us</b></h2>
                       
                   </div>
                   <div className="row">
                   <div className="col-sm mob">
                        <img src={Img1} className="img-fluid" alt="office" />
                       </div>     
                       <div className="col-lg-7 col-md-14 leftd mob1">
                           <h3 className="align"> <b>We make you understand your Capabilities</b></h3>
                          <div className="aboutext ">
                          <p>Evren Global Solutions Pvt. Ltd. (EGS) is an IT Solution and Overseas Education Consultation company founded by a group of IT Professionals from various MNC’s and Professors from eminent Universities across Delhi. The mission of this company is to provide solutions to the technological and educational paths of individuals and organisations.
 
                            Located at one of the most premium locations in New Delhi, EGS provides complete IT Solutions like website development, Android/IOS app development, Data Analytics and all customized services. EGS provides complete guidance to its students for overseas and indigenous education, including research guidance, general test guidance, Universities short listing, filling application forms and many more. </p>
                          </div>
                          <Link to="/discover">
                          <button   type="button" className="btn btn-primary " style={{"marginTop": "30px"}}>Discover</button>

                          </Link>

                          </div>
                       
                   </div>

               </div>
           </div>
        )
    }
}
