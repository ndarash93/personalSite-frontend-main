import React, { Component } from 'react';
import './footer.css';

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="footer-grid">
                <p>Footer</p>
                <i className="fas fa-poll-h"></i>
            </div>
        )
    }

}


export default Footer;