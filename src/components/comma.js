import React, { Component } from 'react';
import './comma.css';
// import Img1 from '../../assets/international.jpg';


export default class Compa extends Component {
    render() {
        return (
            <div>
<div>
        <section class="showca">
          <div class="img-container">
            <img src={this.props.url} alt="lop"></img>
          </div>
          <div class="content" style={{ zIndex: "0" }}>
            <h3><b>{this.props.content}</b></h3>
           </div>
           
        </section>
       </div>
       

            </div>
        )
    }
}