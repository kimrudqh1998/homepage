import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  




  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Awesome Website</h1>
        </header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <footer>
          <p>&copy; 2023 My Awesome Website</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <main>
      <h2>Welcome to my awesome website!</h2>
      <p>Here you will find all sorts of cool stuff!</p>
    </main>
  );
}

export default App;
