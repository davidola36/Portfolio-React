import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';

class App extends Component {

  state = {
    lightmode: false
  }


  handleModeChange = () => {
    this.setState({lightmode:!this.state.lightmode})
  }

  componentDidMount() {
    const cursor = document.querySelector(".cursor");

    document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+ (e.pageY - 10) + "px; left: "  + (e.pageX - 10) + "px");
    })

    document.addEventListener('click', ()=> {
      cursor.classList.add("expand");

      setTimeout(()=>{
        cursor.classList.remove("expand");
      }, 500)
    })
  }

  render() {
    let color = this.state.lightmode ? 'light-theme__color lightmode' : null;
    let backgroundColor = this.state.lightmode ? 'light-theme__background lightmode' : 'dark-theme__background'
    let border = this.state.lightmode ? 'dark-theme__border lightmode' : 'light-theme__border';
    let filter = this.state.lightmode ?  'light-theme__filter lightmode' : null
    let lightmode = this.state.lightmode ? 'lightmode' : null

    return(
      <div className={'transition ' + backgroundColor}>
        <div className="background-image">
          <div className="cursor"></div>
          <div className={"page transition " + color}>
              <header className="header">
                <div className="mode">
                  <input type="checkbox" 
                    className={"mode-input transition" + backgroundColor}
                    id="mode"
                    name="mode"
                    checked={this.state.lightmode}
                    onChange={this.handleModeChange} 
                    />
                  <label htmlFor="mode" className="mode-label">
                      {
                        this.state.lightmode ? 'light mode' : 'dark mode'
                      }
                      <span className={"mode-btn " + lightmode}></span>
                  </label>
                </div>
                {/* <img src="/img/logo.svg" className="header-logo"/> */}
                <Link to="/"><img src="/img/logo.svg" className="header-logo"/></Link>
                <NavLink to="/projects"className={"header-link " + lightmode} activeClassName="active">projects</NavLink>

                {/* <div className={"header-link " + lightmode}>projects</div> */}
              </header>
              <main className="main">
                <div className="main-content">
                      <h1>This is the projects page</h1>
                </div>
              </main>

              <footer className="footer">
                  <div className="social">
                    <img src="/img/twitter.svg" className={"social-img transition " + filter}/>
                    <img src="/img/linkedin.svg" className={"social-img transition " + filter}/>
                    <img src="/img/instagram.svg" className={"social-img transition " + filter}/>
                    <img src="/img/facebook.svg" className={"social-img transition " + filter}/>
                  </div>
                  
              </footer>
            
          </div>
        </div>
      </div>
     
    )
  }
}
export default App;
