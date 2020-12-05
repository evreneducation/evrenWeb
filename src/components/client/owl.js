import React, { Component } from "react";
import "./owl.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Img1 from '../../assets/Logo.png';
import Img2 from '../../assets/MIRAGE.png';
import Img3 from '../../assets/tweakf.png';
import Img4 from '../../assets/alphtrix.webp';



export default class Owl extends Component {
  constructor() {
    super();

    this.state = {
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

  render() {
    var { isLoaded, data, res } = this.props;
    // if (!isLoaded) {
    //   return (
    //     <div style={{ padding: "10%" }}>
    //       <div className="spinner-border text-dark" role="status">
    //         <span className="sr-only">Loading...</span>
    //       </div>
    //     </div>
    //   );
    // } else {
    //   let cards = data.map(function (item, i) {
    //     return (
    //       <div class="item">
    //         <h2>{item.id}</h2>
    //         <h6>{item.title}</h6>
    //       </div>
    //     );
    //   });
      return (
        <div>
          <OwlCarousel
            className="owl-theme"
            loop
            nav
            margin={20}
            autoHeight={true}
            responsive={res}
          >
            <div className="item">
            <img src={Img3}  className="img-fluid" alt = "logq"/>
            <h3>Tweaklize</h3>
            </div>
            <div className="item">
            <img src={Img4}  className="img-fluid" alt = "logq"/>
            </div>
            <div className="item">
            <img src={Img1}  className="img-fluid" alt = "logq"/>
            </div>
            <div className="item">
            <img src={Img2} style={{paddingTop: "44px"}} className="img-fluid" alt = "logq"/>
            </div>
          </OwlCarousel>
        </div>
      );
    }
  }

