import React, { Component } from "react";
import "./owl.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";




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
            <img src={this.props.Img1} style={{ paddingTop: "23%"}}  className="img-fluid" alt = "logq"/>
            </div>
            <div className="item">
            <img src={this.props.Img2} style={{ paddingTop: "15%"}} className="img-fluid" alt = "logq"/>
            </div>
            <div className="item">
            <img src={this.props.Img3} style={{    paddingTop: "27%"}} className="img-fluid" alt = "logq"/>
            </div>
            <div className="item">
            <img src={this.props.Img4} style={{paddingTop: ""}} className="img-fluid" alt = "logq"/>
            </div>
            <div className="item">
            <img src={this.props.Img5} style={{paddingTop: "31%"}} className="img-fluid" alt = "logq"/>
            </div>
            <div className="item">
            <img src={this.props.Img6} style={{paddingTop: ""}} className="img-fluid" alt = "logq"/>
            </div>
            <div className="item">
            <img src={this.props.Img7} style={{paddingTop: ""}} className="img-fluid" alt = "logq"/>
            </div>
            <div className="item">
            <img src={this.props.Img8} style={{paddingTop: "44px"}} className="img-fluid" alt = "logq"/>
            </div>
            <div className="item">
            <img src={this.props.Img9} style={{paddingTop: ""}} className="img-fluid" alt = "logq"/>
            </div>
            <div className="item">
            <img src={this.props.Img10} style={{paddingTop: "21%"}} className="img-fluid" alt = "logq"/>
            </div>
            <div className="item">
            <img src={this.props.Img12} style={{paddingTop: "31%"}} className="img-fluid" alt = "logq"/>
            </div>
            <div className="item">
            <img src={this.props.Img13} style={{marginTop: "20%"}} className="img-fluid" alt = "logq"/>
            </div>
            <div className="item">
            <img src={this.props.Img14} style={{marginTop: "20%"}} className="img-fluid" alt = "logq"/>
            </div>
          </OwlCarousel>
        </div>
      );
    }
  }

