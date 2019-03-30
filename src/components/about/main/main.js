import React, { Component } from 'react';
import './main.css';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            'workExperiences': [
                {
                    'title': 'Associate Engineer',
                    'company': 'Burns&Mcdonnell',
                    'responsibilities': [
                        '',
                        '',
                        ''
                    ]
                },
                {
                    'title': 'Engineering Co-op/Intern',
                    'company': 'FirstEnergy',
                    'responsibilities': [
                        'Maintain an efficient yet safe work envioronment.',
                        'Meet deadlines when completing tasks assigned by superiors.',
                        'Complete tasks by communicating effectively with a diverse team.'
                    ]
                },
                {
                    'title': 'Technical Support Specialist I',
                    'company': 'Honeywell',
                    'responsibilities': [
                        'Work one-on-one with HVAC technicians over the phone.',
                        'Solve problems quicklyand efficiently while working remote.',
                        'Work as a team to complete tasks while adhering to deadlines.'
                    ]
                }
            ]
        }
    }


    render(){
        return(
            <div className="main-grid">
                <div className="work-experience-title">Work Experience</div>
                <ul className="work-experience-list">
                    {
                        this.state.workExperiences.map((experience, i) => {
                            return(
                                <li className="work-experience" key={i}>
                                <p className="job-title">{experience.title}</p>
                                <p className="company">{experience.company}</p>
                                <ul className="work-responsibility-list">
                                    {
                                        experience.responsibilities.map((responsibility, ii) => {
                                            return(
                                                <li key={ii} className="responsibility">{responsibility}</li>
                                            )
                                        })
                                    }
                                </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}


export default Main;