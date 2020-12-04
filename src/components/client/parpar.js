import React, { Component } from 'react';
import '../discover/par.css';
import Img1 from '../../assets/Logo.png';
import Img2 from '../../assets/MIRAGE.png';
import Img3 from '../../assets/tweakf.png';
import Img4 from '../../assets/alphtrix.webp';


export default class Parpar extends Component {
    render() {
        return (
            <div>
                <div className="dispar">
                <div className="container ">
                    
                    <div className="row">
                    <div className=" col-sm titl "> 
                    
                    <div className="titlea">
                    
                        <img src={Img3} className="img-fluid" alt = "logq"/>
                        <h3 style={{textAlign : "center"}}>Tweakalize</h3>
                    </div>
                    </div>
                    <div className="col-sm "></div>
                </div>
                </div>
                </div>
                 
                

            
             <div className="dispra">
             <div className=" container ">
                   
                   <div className="row">
                       <div className="col-sm"></div>
                  <div className=" col-sm titl"> 
                  <div className="titlea">
                  <img src={Img4} className="img-fluid" alt = "MIRAGE"/>

                  </div>
                  </div>
                  
                  
              </div>
              </div>
          
             </div>
                <div className="dispar">
                <div className="container ">
                    
                    <div className="row">
                    <div className=" col-sm titl "> 
                    <div className="titlea">
                        <img src={Img1} className="img-fluid" alt = "logq"/>
                    </div>
                    </div>
                    <div className="col-sm "></div>
                </div>
                </div>
                </div>
                 
                

            
             <div className="dispra">
             <div className=" container ">
                   
                   <div className="row">
                       <div className="col-sm"></div>
                  <div className=" col-sm titl"> 
                  <div className="titlea">
                  <img src={Img2} className="img-fluid" alt = "MIRAGE"/>

                  </div>
                  </div>
                  
                  
              </div>
              </div>
          
             </div>
            </div>

        )
    }
}