import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        'activePage': 'ABOUT',
        'icons': [
          <i className="far fa-address-card"></i>,
          <i className="fas fa-project-diagram"></i>,
          <i className="far fa-id-badge"></i>,
          <i className="fas fa-chart-line"></i>
        ],
        'ulClassList': 'navbar-closed'
      }
    }
    
    componentDidUpdate(){
      
    }
    
    toggleMenu = () => {
      if(this.state.ulClassList === 'navbar-closed'){
        this.setState({'ulClassList': 'navbar-open'});
      }else{
        this.setState({'ulClassList': 'navbar-closed'});
      }
    }

    render() {
      return (
        <nav className="navbar">
          <div className="navbar-banner"><p>nick darash</p></div>
          <button className="navbar-dropdown-button" onClick={this.toggleMenu}>
            <div className="dropdown-effect"></div>
          </button>
          <ul id="menu" ref="menu" className={this.state.ulClassList}>
            {this.props.pages.map((page, i) => {
              if(page === this.props.activepage){
                return(
                  <li key={i}><button onClick={() => this.props.click({page})} className="navbar-button-active">{this.state.icons[i]}{page}</button></li>
                )
              }else{
                return(
                  <li key={i}><button onClick={() => this.props.click({page})} className="navbar-button">{this.state.icons[i]}{page}</button></li>
                )
              }
            })}
          </ul>
        </nav>
      );
    }
  }

  export default Navbar;