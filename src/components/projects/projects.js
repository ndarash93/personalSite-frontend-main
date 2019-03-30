import React, { Component } from 'react'
import './projects.css'

class Projects extends Component{
    constructor(props){
        super(props)
        this.state = {
            'class': 'projects-right-of-screen',
            'index': 1,
            'projects': [
                {
                    'img': {
                        'src': 'https://unsplash.it/600/300',
                        'alt': 'Project 1'
                    },
                    'description': 'This is a project I worked on',
                    'additional-info': 'Idfk'
                },
                {
                    'img': {
                        'src': 'https://unsplash.it/601/300',
                        'alt': 'Project 2'
                    },
                    'description': 'This is a project I worked on',
                    'additional-info': 'Idfk'
                },
                {
                    'img': {
                        'src': 'https://unsplash.it/600/301',
                        'alt': 'Project 3'
                    },
                    'description': 'This is a project I worked on',
                    'additional-info': 'Idfk'
                },
                {
                    'img': {
                        'src': 'https://unsplash.it/601/301',
                        'alt': 'Project 4'
                    },
                    'description': 'This is a project I worked on',
                    'additional-info': 'Idfk'
                },
            ]
        }
    }

    componentDidUpdate(){
        if(this.props.activepage === 'PROJECTS' && this.state.class !== 'projects'){
            this.setState({class: 'projects'})
        }else if(this.props.index < this.state.index && this.state.class !== 'projects-right-of-screen'){
                this.setState({class: 'projects-right-of-screen'})
        }else if(this.props.index > this.state.index && this.state.class !== 'projects-left-of-screen'){
                this.setState({class: 'projects-left-of-screen'})
        }
    }

    render(){
        return(
            <div className={this.state.class}>
                <div className="projects-root">
                    {
                        this.state.projects.map((project) => {
                            return(
                                <div className="project-card">
                                    <div className="image-cover"></div>
                                    <img src={project.img.src} alt={project.img.alt}></img>
                                    <p>{project.description}</p>
                                    <a href="">Learn More</a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}


export default Projects