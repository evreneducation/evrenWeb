import React, { Component } from "react";
import Coma from './coma';
import Comb from './comb';
import Comc from './comc';

export default class Services extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
}
  render() {
    return (
      <div>
          <Coma/>
          <div style={{"paddingBottom" : "20px"}}>
            <div  style={{"textAlign" : "center"}}>
                       <h2 className="cardd">Our Mission</h2>
                       <p>To provide all Consulting and IT solutions partnering with SBA Inc., for the entire enterprise value chain.</p>
                   </div>
    <Comb/>
</div>
<Comc/>
      </div>
    )
  }
}