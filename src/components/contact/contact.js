import React, {Component} from 'react';
import './contact.css';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            'class': 'contact-right-of-screen',
            'index': 2
        };
    };


    componentDidUpdate(){
        if(this.props.activepage === 'CONTACT' && this.state.class !== 'contact'){
            this.setState({class: 'contact'})
        }else if(this.props.index < this.state.index && this.state.class !== 'contact-right-of-screen'){
                this.setState({class: 'contact-right-of-screen'})
        }else if(this.props.index > this.state.index && this.state.class !== 'contact-left-of-screen'){
                this.setState({class: 'contact-left-of-screen'})
        }
    }

    render(){
        return(
            <div className={this.state.class}>
                <div className="contact-root">
                    <div className="contact-banner">
                        <h2>Like What You See?</h2>
                        <p>Some paragraph about how to contact me wither via social media such as Linkedin Twitter Facebook. Also Github.</p>
                    </div>
                    <div className="contact-content">
                        <div className="sub-contact">Content 1</div>
                        <div className="sub-contact">Content 2</div>
                        <div className="sub-contact">Content 3</div>
                    </div>
                </div>
            </div>
        );
    }

}


export default Contact;