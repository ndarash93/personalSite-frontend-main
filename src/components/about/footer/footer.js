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
                <div className="sub-footer">
                    <i className="fab fa-github"></i>   
                </div>
                <div className="sub-footer">
                    <i className="fab fa-twitter"></i>
                </div>
                <div className="sub-footer">
                    <i className="fab fa-facebook"></i>   
                </div>
            </div>
        )
    }

}


export default Footer;