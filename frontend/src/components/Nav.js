import React from 'react';
import {Link} from 'react-router-dom';
import hatChef from '../img/hatChef.png'
import "../styles/style.scss"
class Nav extends React.Component {
    render() {
      return(
        <nav class="flex flex-jc-sa flex-ai-c">
          <div>
            <a href="/" class="nav__logo flex flex-ai-c">
              <img  class="img1" src={hatChef} alt="chefHat"></img>
              <p>RECIPE</p>
            </a>
            </div>
            <div class="nav__menu flex flex-ai-c">
              <div class="nav__menu-item"><Link to='/Login'><i class="fa fa-user" aria-hidden="true"></i>
                              <span>REGISTER</span></Link></div>
              <div class="nav__menu-item"><Link to='/Login'><i class="fa fa-sign-in" aria-hidden="true"></i>
                              <span>LOG IN</span></Link></div>
              <div class="nav__menu-item"><Link to='/Login'><i class="fa fa-user" aria-hidden="true"></i>
                              <span>SUBMIT RECIPE</span></Link></div>
            </div>
        </nav>
      );
    }
  }
  
export default Nav;