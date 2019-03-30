import React, { Component } from 'react';
import './header.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="header-grid">
                <p className="name">Nicholas Darash</p>
            </div>
        )
    }

}


export default Header;