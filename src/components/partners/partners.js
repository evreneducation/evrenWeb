import React, { Component } from 'react';
import Comma from '../comma';
import Img1 from '../../assets/international1.jpg';
import Parpar from './parpar';
import Owl from './owl';
import './partner.css';

export default class Partner extends Component {
  
    constructor() {
        super();
    
        this.state = {
          data: [],
          isLoaded: true,
          responsive: {
            0: {
              items: 1,
            },
            450: {
              items: 2,
            },
            1000: {
              items: 3,
            },
          },
        };
      }
      componentDidMount() {
        
          window.scrollTo(0, 0);
      
      }
    render() {
        return (
            <div>
                <Comma url={Img1} content="Partners" />
                <div className="m">
                <Parpar/>
                </div>
                <div className="pc">
                <Owl 
                isLoaded={this.state.isLoaded}
                data={this.state.data}
                res={this.state.responsive}
                />
                </div>
                
            </div>
        )
    }
}