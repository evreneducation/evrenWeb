import React, { Component } from "react";
import "./video.css";
import Vid from "../../../assets/EGSSlides.mp4";
import Vidm from "../../../assets/EGSSlidesMob.mp4";

export default class Video extends Component {
  render() {
    return (
      <div>
        <section class="showcase">
          <div class="video-container m">
            <video src={Vid} autoplay="true" muted loop></video>
          </div>
          <div class="video-container pc">
            <video src={Vidm} autoplay="true" muted loop></video>
          </div>
          {/* <div class="content" style={{ zIndex: "0" }}>
            <h1>Evren Global Solutions Pvt. Ltd.</h1>
            <h3>IT Servces | Overseas Education | International Summer training</h3>
            <spant className="fadetext"></spant>
          </div> */}
        </section>
      </div>
    );
  }
}
