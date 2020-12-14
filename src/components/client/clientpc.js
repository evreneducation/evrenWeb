import React, { Component } from 'react';
import './clientpc.css';

class Clientpc extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <br/>
                    <br/>
                    

                    <div className="row">
                        <div className="col-sm pt">
                            <img className="img-fluid" src={this.props.Img1} alt="img1"/>
                        </div>
                        <div className="col-sm pt">
                        <img className="img-fluid" src={this.props.Img2} alt="img2"/>

                        </div>
                        <div className="col-sm pt">
                        <img className="img-fluid" style={{padding : "62px 0px 0px 7px"}} src={this.props.Img3} alt="img3"/>

                        </div>
                        <div className="col-sm pt">
                            <img className="img-fluid" src={this.props.Img4} alt="img4"/>
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="col-sm pt">
                        <img className="img-fluid" src={this.props.Img5} alt="img5"/>

                        </div>
                        <div className="col-sm pt">
                        <img className="img-fluid"  src={this.props.Img6} alt="img6"/>

                        </div>
                        <div className="col-sm pt">
                            <img className="img-fluid" src={this.props.Img7} alt="img7"/>
                        </div>
                        <div className="col-sm pt">
                        <img className="img-fluid" src={this.props.Img8} alt="img8"/>

                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="col-sm pt">
                        <img className="img-fluid"  src={this.props.Img9} alt="img9"/>

                        </div>
                        <div className="col-sm pt">
                            <img className="img-fluid" src={this.props.Img10} alt="img10"/>
                        </div>
                        <div className="col-sm pt">
                        <img className="img-fluid" src={this.props.Img12} alt="img12"/>

                        </div>
                        <div className="col-sm pt">
                        <img className="img-fluid"  src={this.props.Img13} alt="img13"/>

                        </div>
                    </div>
                    
                    <div className="row">
                        
                        <div className="col-sm">

                        </div>
                        <div className="col-sm pt">
                            <img className="img-fluid" src={this.props.Img14} alt="img14"/>
                        </div>
                        <div className="col-sm">

                        </div>
                    </div>


                    
                </div>
            </div>
        );
    }
}

export default Clientpc;