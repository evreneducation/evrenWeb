import './App.css';
import Nav from './components/navigation/nav.js';
import { BrowserRouter,HashRouter, Route } from "react-router-dom";
import Footer from './components/navigation/footer';
import Home from './components/home/home';
import Discover from './components/discover/discover';
import Service from './components/Services/services';
import Partner from './components/partners/partners';
import Blog from './components/blog/blog';
import Career from './components/career/career';
import Contact from './components/contactus/contact';
import Client from './components/client/client';
import Privacy from './components/others/privacy';
import Tnc from './components/others/tnc';
import Crp from './components/others/crp';
import Mcq from './components/tests/mcq';


function App() {
  return (
    <HashRouter>
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/discover" component={Discover}/>
      <Route exact path="/services" component={Service}/>
      <Route exact path="/partner" component={Partner}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/clients" component={Client}/>
      <Route exact path="/Career" component={Career}/>
      <Route exact path="/privacy" component={Privacy}/>
      <Route exact path="/tnc" component={Tnc}/>
      <Route exact path="/crp" component={Crp}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/mcq" component={Mcq}/>

          <Footer/>
    </div>

    </HashRouter>
  );
}

export default App;
