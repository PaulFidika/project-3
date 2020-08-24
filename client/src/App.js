import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'

import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './css/styles.css'


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path={["/home", "/"]}>
            <Home />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/portfolio:id" component={PortfolioDetail} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router >
  )
}

export default App;
