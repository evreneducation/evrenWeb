import React, { Component } from 'react';
import Img1 from '../../assets/help1.jpg';
import {Link} from 'react-router-dom';


export default class Cona extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h2><b>Our Location</b></h2>
                    <br/>
                    <div className="row" style={{marginBottom : "20px"}}>
                   <div className="col-sm ">
                        <img src={Img1} className="img-fluid" alt="office" />
                       </div>     
                       <div className="col-lg-7 col-md-14 leftd">
                       <h2><b>contact:</b></h2>
                            <p>Corporate Office: 128-A, First Floor, D-Mall, Netaji Subhash Place, New Delhi-110034, India</p>
                            <p>email id: info@evrenglobalsolutions.com</p>
                            <p>Number: +918199050506/+918199050507</p>
                          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@evrenglobalsolutions.com" target="_blank">
                          <button type="button" className="btn btn-primary " style={{"marginTop": "30px"}}>Mail Us</button></a>

                          </div>
                  
                        
                    </div>
                </div>
            </div> 
        )
    }
}   