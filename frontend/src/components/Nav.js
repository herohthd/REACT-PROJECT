import React from 'react';
import {Link} from 'react-router-dom';
import hatChef from '../img/hatChef.png'
import "../styles/style.scss"
class Nav extends React.Component {
    render() {
      return(
        <nav className="flex flex-jc-sa flex-ai-c">
          <div>
            <a href="/" className="nav__logo flex flex-ai-c">
              <img  className="img1" src={hatChef} alt="chefHat"></img>
              <p>RECIPE</p>
            </a>
            </div>
            <div className="nav__menu flex flex-ai-c">
              <div className="nav__menu-item"><Link to='/Register'><i className="fa fa-user" aria-hidden="true"></i>
                              <span>REGISTER</span></Link></div>
              <div className="nav__menu-item"><Link to='/Login'><i className="fa fa-sign-in" aria-hidden="true"></i>
                              <span>LOG IN</span></Link></div>
              <div className="nav__menu-item"><Link to='/Submit'><i className="fa fa-user" aria-hidden="true"></i>
                              <span>SUBMIT RECIPE</span></Link></div>
            </div>
        </nav>
      );
    }
  }
  
export default Nav;