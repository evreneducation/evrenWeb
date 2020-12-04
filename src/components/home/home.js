import React, { Component } from 'react';
import Video from './video/video';
import Cards from './cards';
import Compb from './compb';

import About from './about';
import Parallax from './parallax';

export default class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <div className="home">
                <Video/>
                <About/>
                <Cards/>
                <Parallax/>
                <Compb/>
                </div>
            </div>
        )
    }
}
