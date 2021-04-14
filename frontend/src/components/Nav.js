import React from 'react';
import {Link} from 'react-router-dom';
import hatChef from '../img/hatChef.png'
import "../styles/style.scss"
import AuthService from "../AuthComponents/authService"
class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: undefined
    };
    this.logOut = this.logOut.bind(this);
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user
      });
    }
  }
  logOut() {
    AuthService.logout();
  }
  render() {
    const currentUser = this.state.currentUser;
    console.log(currentUser);
    return(
      <nav className="flex flex-jc-sa flex-ai-c">
        <div>
          <a href="/" className="nav__logo flex flex-ai-c">
            <img  className="img1" src={hatChef} alt="chefHat"></img>
            <p>RECIPE</p>
          </a>
          </div>
          {currentUser ? (
          <div className="nav__menu flex flex-ai-c">
            <div className="nav__menu-item"><Link to='/'><i className="fa fa-user" aria-hidden="true"></i>
                            <span>HI {currentUser.username}</span></Link></div>
            <div className="nav__menu-item"><Link to='/Login' onClick={this.logOut}><i className="fa fa-sign-in" aria-hidden="true"></i>
                            <span>LOG OUT</span></Link></div>
            <div className="nav__menu-item"><Link to='/Submit'><i className="fa fa-user" aria-hidden="true"></i>
                            <span>SUBMIT RECIPE</span></Link></div>
          </div>
          ): (
            <div className="nav__menu flex flex-ai-c">
              <div className="nav__menu-item"><Link to='/Register'><i className="fa fa-user" aria-hidden="true"></i>
                              <span>REGISTER</span></Link></div>
              <div className="nav__menu-item"><Link to='/Login'><i className="fa fa-sign-in" aria-hidden="true"></i>
                              <span>LOG IN</span></Link></div>
          </div>
          )}
      </nav>
    );
  }
}
  
export default Nav;