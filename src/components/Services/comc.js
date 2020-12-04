import React, { Component } from 'react';
import Img1 from "../../assets/help.jpg";



export default class Disard extends Component {
    render() {
        return (
            <div style={{"marginTop": "76px", "background":"whitesmoke"}}>
                <div className="container"> 
                    <div className="row">
                        <div className="col-md-8">
                        
                    <div className="container tc">
                        <div className="row">
                            <div className="col-sm">
                        
                            <div className="tl">
                                    <h3><b>Sifting Data To Collect Insights</b></h3>
                                    <p>Gain a complete overview of the business and ascertain the data and analytics needs.</p>     
                           </div>
                        </div>    
                        <div className="col-sm">
                        <div className="tl">
                               <h3><b>Sifting Data To Collect Insights</b></h3>
                               <p>Gain a complete overview of the business and ascertain the data and analytics needs.</p>     
                           </div>
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col-sm">
                        <div className="tl">
                               <h3><b>Sifting Data To Collect Insights</b></h3>
                               <p>Gain a complete overview of the business and ascertain the data and analytics needs.</p>     
                           </div>
                        </div>    
                        <div className="col-sm">
                        <div className="tl">
                               <h3><b>Sifting Data To Collect Insights</b></h3>
                               <p>Gain a complete overview of the business and ascertain the data and analytics needs.</p>     
                           </div>
                        </div>    
                    </div>
                    </div>
                        </div>    
                        <div className="col-md-4 ">
                            <div className="tr">
                                <img className="img-fluid tr" src={Img1} alt="h"/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        )
    }
}