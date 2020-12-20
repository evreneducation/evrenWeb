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
			<div class="row fot text-center text-xs-center text-sm-left text-md-left">
				<div class="col-sm">
					<h5>EGS</h5>
					<ul class="list-unstyled quick-links">
						<Link to="/"><li><i class="fa fa-angle-double-right"></i>Home</li></Link>
						<Link  to="/"><li onClick={this.about}><i class="fa fa-angle-double-right"></i>About</li></Link>
						<Link to ="/blog"><li><i class="fa fa-angle-double-right"></i>FAQ</li></Link>
					</ul>
				</div>
				<div class="col-sm">
					<h5>Discover</h5>
					<ul class="list-unstyled quick-links">
						<Link to="/discover"><li><i class="fa fa-angle-double-right"></i>discover</li></Link>
						<Link to="/services"><li><i class="fa fa-angle-double-right"></i>Service</li></Link>
						<Link to="/career"><li><i class="fa fa-angle-double-right"></i>Career</li></Link>
					</ul>
				</div>
				<div class="col-sm">
					<h5>Get in Touch</h5>
					<ul class="list-unstyled quick-links">
						<Link to="/blog"><li><i class="fa fa-angle-double-right"></i>Testimonials</li></Link>
						<Link to="/partner"><li><i class="fa fa-angle-double-right"></i>Partners</li></Link>
						<Link to="/contact"><li><i class="fa fa-angle-double-right"></i>Contact</li></Link>
					</ul>
				</div>
				{/* col-xs-12  col-sm-4 col-md-4 */}
				<div class="col-sm">
					<h5>Others</h5>
					<ul class="list-unstyled quick-links">
						<Link to="/privacy"><li><i class="fa fa-angle-double-right"></i>Privacy Policy</li></Link>
						<Link to="/tnc"><li><i class="fa fa-angle-double-right"></i>Terms & Conditions</li></Link>
						<Link to="/crp"><li><i class="fa fa-angle-double-right"></i>Cancellation/Refund Policy</li></Link>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="https://www.facebook.com/Evren-Global-Solutions-105297237852842/" target="_blank"><i class="fa fa-facebook"></i></a></li>
						{/* <li class="list-inline-item"><a href=""><i class="fa fa-twitter"></i></a></li> */}
						<li class="list-inline-item"><a href="https://www.instagram.com/evrenglobalsolutions/" target="_blank"><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="https://www.linkedin.com/company/evren-global-solutions" target="_blank"><i class="fa fa-linkedin"></i></a></li>
						<li class="list-inline-item"><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@evrenglobalsolutions.com" target="_blank"><i class="fa fa-envelope"></i></a></li>
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
