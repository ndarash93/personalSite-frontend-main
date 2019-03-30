import React, { Component } from 'react'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';

class App extends Component {
  constructor() {
    super()
    this.state = {
      'ActivePage': 'ABOUT',
      'aboutActive': true,
      'projectsActive': false,
      'pages': [
        'ABOUT',
        'PROJECTS',
        'CONTACT',
        'PORTFOLIO'
      ]
    }
  }
  
  navbarClick = (button_ID) => {
    this.setState({'ActivePage': button_ID.page}, () => {
    })
  }  

  rightClick = _ => {
    const {pages, ActivePage} = this.state;
    if(pages.indexOf(ActivePage) < (pages.length-1)){
      this.setState({ActivePage: pages[pages.indexOf(ActivePage) + 1]});
    }
  }

  leftClick = _ => {
    const {pages, ActivePage} = this.state;
    if(pages.indexOf(ActivePage) > (0)){
      this.setState({ActivePage: pages[pages.indexOf(ActivePage) - 1]});
    }
  }

  componentDidUpdate(){
  }


  render() {
    return (
      <div className="root">
        <Navbar click={this.navbarClick} activepage={this.state.ActivePage} pages={this.state.pages} />
          <About 
            activepage={this.state.ActivePage} 
            index={this.state.pages.indexOf(this.state.ActivePage)} 
          />
          <Projects 
            activepage={this.state.ActivePage} 
            index={this.state.pages.indexOf(this.state.ActivePage)}
          />
          <Contact
            activepage={this.state.ActivePage}
            index={this.state.pages.indexOf(this.state.ActivePage)}
          />
          <Portfolio
            activepage={this.state.ActivePage}
            index={this.state.pages.indexOf(this.state.ActivePage)}
          />
          <div className="scroll-right">
            <i className="fas fa-chevron-right" onClick={this.rightClick}></i>
          </div>
          <div className="scroll-left">
            <i className="fas fa-chevron-left" onClick={this.leftClick}></i>
          </div>
      </div>
    );
  }
}

export default App;
