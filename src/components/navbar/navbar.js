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
        ]
      }
    }
    
    componentDidUpdate(){
      
    }
    
    render() {
      return (
        <nav className="navbar">
          <div className="navbar-banner"><p>nick darash</p></div>
          <ul>
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