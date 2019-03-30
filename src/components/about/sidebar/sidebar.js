import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            'modal': 'avatar-modal-hidden'
        }
    }

    pictureModal = _ => {
        if(this.state.modal === 'avatar-modal-hidden'){
            this.setState({modal: 'avatar-modal'});
        }else{
            this.setState({modal: 'avatar-modal-hidden'});
        }
    }

    render(){
        return(
            <div className="sidebar-grid">
                <img className={this.state.modal} src="https://unsplash.it/401" alt="Nick Darash" onClick={this.pictureModal}></img>
                <div className="avatar-container">
                    <img className="avatar" src="https://unsplash.it/401" alt="Nick Darash"></img>
                    <div className="avatar-cover" onClick={this.pictureModal}></div>
                </div>
                <div className="about-me-title">About me</div>
                <div className="about-me-text">I am a hardworking, ambitious, entry-level engineer looking to gain experience and knowledge to help further my career.</div>
                <div className="skills-title">Skills</div>
                <div className="skill-python">Programming</div>
                <div className="skill-office">Microsoft Office</div>
                <div className="skill-circuits">Circuit Analysis</div>
                <div className="skill-math">Mathematics</div>

            </div>
        )
    }

}


export default Sidebar;