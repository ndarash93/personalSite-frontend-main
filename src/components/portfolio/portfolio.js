import React, {Component} from 'react';
import './portfolio.css';

class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state = {
            'class': 'portfolio-right-of-screen',
            'index': 3
        };
    };


    componentDidUpdate(){
        if(this.props.activepage === 'PORTFOLIO' && this.state.class !== 'portfolio'){
            this.setState({class: 'portfolio'})
        }else if(this.props.index < this.state.index && this.state.class !== 'portfolio-right-of-screen'){
                this.setState({class: 'portfolio-right-of-screen'})
        }else if(this.props.index > this.state.index && this.state.class !== 'portfolio-left-of-screen'){
                this.setState({class: 'portfolio-left-of-screen'})
        }
    }

    render(){
        return(
            <div className={this.state.class}>
                Portfolio
            </div>
        );
    }

}


export default Portfolio;