import React, { Component} from 'react';
import '../discover/discard.css';
import Comc from './comc';
import { scroller } from "react-scroll";




export default class Disard extends Component {
    constructor(){
      super();
      this.state = {
        content : "none",
        title : "none"
      }
      // this.myRef = React.createRef()  

    }

    

    itserv = () => {
      this.setState({
        content : "It Services",
        title : "It Services"

      })
      // window.scrollTo(560, 622);
      scroller.scrollTo("scrh", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });

    }

    studyA = () => {
      this.setState({
        content : "Study Abroad",
        title : "Study Abroad"

      })
      scroller.scrollTo("scrh", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
    }
    IntlT = () => {
      this.setState({
        content : "International Training",
        title : "International Training"

      })
      scroller.scrollTo("scrh", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });

    }

     render() {
        return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div onClick={this.itserv} class="car card-1">
                <h3>It Services</h3>
              </div>
            </div>
            <div class="col-md-4">
              <div onClick={this.studyA} class="car card-2">
                <h3>Study Abroad</h3>
          
              </div>
            </div>
            <div class="scrh col-md-4">
              <div onClick={this.IntlT} class="car card-3">
                <h3>International training</h3>
                </div>
            </div>
            
          </div>
        </div>
        <Comc  content={this.state.content} title={this.state.title}/>
            </div>
        )
    }

}