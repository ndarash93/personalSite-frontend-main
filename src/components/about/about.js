import React, { Component } from 'react';
import './about.css';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Main from './main/main';
import Footer from './footer/footer';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            'class': 'about',
            'index': 0
        }
    }

    componentDidUpdate(){
        if(this.props.activepage === 'ABOUT' && this.state.class !== 'about'){
            this.setState({class: 'about'})
        }else if(this.props.activepage !== 'ABOUT' && this.state.class !== 'about-left-of-screen'){
            this.setState({class: 'about-left-of-screen'})
        }
    }

    render(){
        return(
            <div className={this.state.class}>
                <Header />
                <Sidebar />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default About;