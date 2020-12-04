import './App.css';
import Nav from './components/navigation/nav.js';
import { BrowserRouter, Route } from "react-router-dom";
import Footer from './components/navigation/footer';
import Home from './components/home/home';
import Discover from './components/discover/discover';
import Service from './components/Services/services';
import Partner from './components/partners/partners';
import Blog from './components/blog/blog';
import Career from './components/career/career';
import Contact from './components/contactus/contact';
import Client from './components/client/client';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/discover" component={Discover}/>
      <Route exact path="/services" component={Service}/>
      <Route exact path="/partner" component={Partner}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/clients" component={Client}/>
      <Route exact path="/Career" component={Career}/>
      <Route exact path="/Contact" component={Contact}/>

          <Footer/>
    </div>

    </BrowserRouter>
  );
}

export default App;
