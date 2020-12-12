import React, { Component } from 'react';
import Comma from '../comma';
import Img1 from '../../assets/international1.jpg';
import Cara from './cara';
import './career.css';
import '../home/parallax.css';


export default class Career extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Comma url={Img1} content="Career" />
                 
                <Cara/>
               
            </div>
        )
    }
}