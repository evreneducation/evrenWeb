import React, { Component } from 'react';
import Comma from '../comma';
import Img1 from '../../assets/international.jpg';
import Cona from './cona';


export default class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Comma url={Img1} content="Contact Us" />
                <Cona/>
            </div>
        )
    }
}