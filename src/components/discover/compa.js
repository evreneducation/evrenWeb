import React, { Component } from 'react';
import './discover.css';
import Img1 from '../../assets/international.jpg';


export default class Compa extends Component {
    render() {
        return (
            <div>
<div>
                <section class="showcas">
          <div class="img-container">
            <img src={Img1} alt="lop"></img>
          </div>
          <div class="content" style={{ zIndex: "0" }}>
            <h3>Discover EGS</h3>
           </div>
           
        </section>
       </div>
       

            </div>
        )
    }
}