import React, { Component } from "react";
import { Link } from "react-router-dom";
import './footer.css';

export default class Footer extends Component {

	about=() => {
		window.scrollTo(560, 622);
	}	
  render() {
    return (
      <div>
      <section id="footer">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>EGS</h5>
					<ul class="list-unstyled quick-links">
						<Link to="/"><li><i class="fa fa-angle-double-right"></i>Home</li></Link>
						<Link  to="/"><li onClick={this.about}><i class="fa fa-angle-double-right"></i>About</li></Link>
						<Link to ="/blog"><li><i class="fa fa-angle-double-right"></i>FAQ</li></Link>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Discover</h5>
					<ul class="list-unstyled quick-links">
						<Link to="/discover"><li><i class="fa fa-angle-double-right"></i>discover</li></Link>
						<Link to="/service"><li><i class="fa fa-angle-double-right"></i>Service</li></Link>
						<li><i class="fa fa-angle-double-right"></i>contact</li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Get in Touch</h5>
					<ul class="list-unstyled quick-links">
						<li><i class="fa fa-angle-double-right"></i>Testimonials</li>
						<li><i class="fa fa-angle-double-right"></i>Partners</li>
						<li><i class="fa fa-angle-double-right"></i>Career</li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-google-plus"></i></a></li>
						<li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" target="_blank"><i class="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr/>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p class="h6">© All right Reversed.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank"></a></p>
				</div>
				<hr/>
			</div>	
		</div>
	</section>
        
      </div>
    );
  }
}
