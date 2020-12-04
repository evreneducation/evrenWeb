import React, { Component } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Img1 from '../../assets/menu.svg';
import Img2 from '../../assets/icnb.ico';
import Img3 from '../../assets/Egswhitef.ico';

export default class Nav extends Component {

  constructor() {
    super();
    this.state = {
      overlayClass: "overlay",
      scrolled: false,
      col: false,
      log: false
    };
  }
  top(){
  
      window.scrollTo(0, 0);
  
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        
        this.setState({
          scrolled: true,
          col: true,
          log: true
        });
      } else {
        this.setState({ scrolled: false, col: false , log: false});
      }
    });
  }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll");
  // }
  

  openMenu = () => {
    this.setState({
      overlayClass: "overlay overlay--active",
    });
  };
  closeMenu = () => {
    this.setState({
      overlayClass: "overlay ",
    });
  };
  render() {
    return (
      <div>
        <div  className={
            this.state.scrolled
              ? "  scrolled"
              : " notscrolled "
          } >
          <header>
            <Link  to="/">
              <div className={this.state.scrolled ? "logw" : ""}>
              <img  src={Img3} className="img-fluid " alt="EGSLOGO"/>
              </div>
              <div className={this.state.scrolled ? "" : "logw"}>
              <img src={Img2} className="img-fluid " alt="EGSLOGO"/>
              </div>
              

            </Link>
            <nav>
              <ul className="nav__links">
                <li>
                  <Link  to="/">
                    <h6 className={this.state.col ? "lcol" : "bcol"} >
                      Home
                    </h6>
                  </Link>
                </li>
                <li>
                  <Link to="/discover">
                    <h6 className={this.state.col ? "lcol" : "bcol"}>
                      Discover EGS
                    </h6>
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <h6 className={this.state.col ? "lcol" : "bcol"}>
                      Services
                    </h6>
                  </Link>
                </li>
                <li>
                  <Link to="/partner">
                    <h6 className={this.state.col ? "lcol" : "bcol"}>
                      Partners
                    </h6>
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    <h6 className={this.state.col ? "lcol" : "bcol"}>
                      Testimonials
                    </h6>
                  </Link>
                </li>
                <li>
                  <Link to="/Clients">
                    <h6 className={this.state.col ? "lcol" : "bcol"}>
                      Clients
                    </h6>
                  </Link>
                </li>
                <li>
                  <Link to="/career">
                    <h6 className={this.state.col ? "lcol" : "bcol"}>
                      Career
                    </h6>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <h6 className={this.state.col ? "lcol" : "bcol"}>
                      Contact Us
                    </h6>
                  </Link>
                </li>
                
              </ul>
            </nav>
            
            <p onClick={this.openMenu} className="menu cta">
            <img src={Img1} className="img-fluid ham" alt="office" />

            </p>
          </header>
          <div className={this.state.overlayClass}>
            <p onClick={this.closeMenu} className="close">
              ×
            </p>
            <div className="overlay__content">
              <Link to="/">
                <h6
                  onClick={this.closeMenu}
                  style={{ color: "white", fontStyle: "oblique" }}
                >
                  Home
                </h6>
              </Link>
              <Link to="/discover">
                <h6
                  onClick={this.closeMenu}
                  style={{ color: "white", fontStyle: "oblique" }}
                >
                  Discover EGS
                </h6>
              </Link>
              <Link to="/services">
                <h6
                  onClick={this.closeMenu}
                  style={{ color: "white", fontStyle: "oblique" }}
                >
                  Services
                </h6>
              </Link>
              <Link to="/partner">
                <h6
                  onClick={this.closeMenu}
                  style={{ color: "white", fontStyle: "oblique" }}
                >
                  Partners
                </h6>
              </Link>
              <Link to="/blog">
                <h6
                  onClick={this.closeMenu}
                  style={{ color: "white", fontStyle: "oblique" }}
                >
                  Testimonial
                </h6>
              </Link>
              <Link to="/career">
                <h6
                  onClick={this.closeMenu}
                  style={{ color: "white", fontStyle: "oblique" }}
                >
                  Career
                </h6>
              </Link>
              <Link to="/clients">
                <h6
                  onClick={this.closeMenu}
                  style={{ color: "white", fontStyle: "oblique" }}
                >
                  Clients
                </h6>
              </Link>
              <Link to="/contact">
                <h6
                  onClick={this.closeMenu}
                  style={{ color: "white", fontStyle: "oblique" }}
                >
                  Contact Us
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
