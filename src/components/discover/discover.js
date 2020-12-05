import React, { Component } from 'react';
import './discover.css';
import Compa from './compa';
import Img1 from '../../assets/international1.jpg';
import Par from './par';
import Discard from './discard';
import {Link} from 'react-router-dom';

export default class Discover extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Compa/>
                 <div className="container discb">
                   
                   <div className="row">
                   <div className="col-sm ">
                        <img src={Img1} className="img-fluid" alt="office" />
                       </div>     
                       <div className="col-lg-7 col-md-14 leftd mob">
                           <h3 className="align"><b>We make you understand your Capabilities</b></h3>
                          <div className="aboutext ">
                          <p>Evren Global Solutions Pvt. Ltd. (EGS) is an IT Solution and overseas education consultation company founded by a group of IT Professionals and Professors from various MNC’s and Universities across Delhi.</p>
                           <p>The company provides complete IT Solutions like website development, Android/IOS app development, Data Analytics etc. For overseas education, EGS provide a complete guidance to its enrolled students including research guidance, general test guidance, Universities short listing, filling application forms and many more.</p>
                       
                          </div>
                          <Link to="/career"><button type="button" className="btn btn-primary " style={{"marginTop": "30px"}}>View More</button></Link>

                          </div>
                       
                   </div>

               </div>

<Par/>
<div style={{"paddingBottom" : "20px"}}>
            <div className="cardd" style={{"textAlign" : "center"}}>
                       <h2><b>Best Services Provided by EGS</b></h2>
                       
                   </div>
     <Discard/>
</div> 
            </div>
        )
    }
}