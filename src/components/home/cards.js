import React, { Component } from 'react';
import './card.css';

export default class Cards extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{"paddingBottom" : "20px"}}>
                    <div className="row">
                        <div className="col-sm">
                        <div class="card">
  <div class="cardTop imga" >
      
  </div>
  <div class="cardBottom">
    <div class="cardText">
      <h3 class="cardTitle">IT Solutions</h3>
      
      <div class="cardHoverText">
        <p className="utext">Website Development, Android App Development, IOS App Development
</p>
      </div>
    </div>
  </div>
</div>                        </div>
                        <div className="col-sm">
                        <div class="card">
  <div class="cardTop imgb" >
      
  </div>
  <div class="cardBottom">
    <div class="cardText">
      <h3 class="cardTitle">Study Abroad</h3>
      
      <div class="cardHoverText">
      <p className="utext">Website Development, Android App Development, IOS App Development
</p>
      </div>
    </div>
  </div>
</div>
                        </div>
                        <div className="col-sm">
                        <div class="card">
  <div class="cardTop imgc" >
      
  </div>
  <div class="cardBottom">
    <div class="cardText">
      <h3 class="cardTitle">International Training</h3>
      
      <div class="cardHoverText">
      <p className="utext">
                 We help you finalize good Universities for application, LOR, SOP etc. After admission, we also help in VISA assistance.
                  
                 </p>
      </div>
    </div>
  </div>
</div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}