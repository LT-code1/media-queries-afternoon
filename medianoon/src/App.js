import React from 'react';
import './reset.css'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuStatus: 'menu'
    }
  }
  toggleMenu = () => {
    if(this.state.menuStatus === 'menu-open') {
      this.setState({menuStatus: 'menu-close'});
    } else {
      this.setState({menuStatus: 'menu-open'});
    }
  }

  render() {
    return (
      <div className="nav-Wrapper">  
        <nav>
          <ul>
            <li>Start Bootstrap</li>
            <div className="nav-Links">
            <li>
              <img 
                onClick={this.toggleMenu}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAACVBMVEX////x8fH4+Pg/xVg9AAAAf0lEQVR4nO3bwQ0AIAgEQbX/oq1CJMdMB/sjubAWAAAAAAAAAAAAAAAAAACMcqp8K9xVFCpUqFChQoUKH8q/2gAAAAAAALrI354UKlSoUKFChQoTCgEAAAAAALrI/wPO354UKlSoUKFChRMK8682AAAAAAAAAAAAAAAAAAD44gLQbBAAqqi0mgAAAABJRU5ErkJggg==" 
                alt="Hamburger Menu" />
              </li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>About</li>
              <li>Team</li>
              <li>Contact</li>
            </div>
          </ul>
        </nav>
        <div className={this.state.menuStatus}>
          <ul className="inside-List">
             <li>Services</li>
              <li>Portfolio</li>
              <li>About</li>
              <li>Team</li>
              <li>Contact</li>
          </ul>
        </div>
        <body className="body-Wrapper"> 
            <div className="hero-image">
              <h1> Welcome to our Studio!<br/> </h1> 
              <h2>It's Nice to Meet you<br/> </h2> 
              <button className="button1">Tell Me More</button>
            </div>
        </body>
       
  
      </div>
    );
  }
  
}

export default App;


