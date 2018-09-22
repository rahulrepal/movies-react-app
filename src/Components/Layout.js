import React, { Component } from 'react';
import { HashRouter as Router , Route ,Switch} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contacts from './Contacts';
import MoviesMiddle from './Movies/MoviesMiddle';
import Discover from '././Discover/Discover';

class layout extends Component {
  render() {
    return (
      <Router>
      <div className="">
        <Header/>
        
        <Switch>
          <Route exact path="/" component={MoviesMiddle} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacts" component={Contacts} />


        </Switch>

        <Footer />

      </div>
      </Router>
    );
  }
}

export default layout;
