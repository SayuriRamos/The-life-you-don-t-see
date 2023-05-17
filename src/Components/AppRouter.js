import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';

const AppRouter = () => {
  return (
    
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Router>
  );
};

export default AppRouter;