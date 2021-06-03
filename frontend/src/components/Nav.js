import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import hatChef from '../img/hatChef.png'
import "../styles/style.scss"
import AuthService from "../AuthComponents/authService"
class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: undefined,
      authorInfor: undefined
    };
    this.logOut = this.logOut.bind(this);
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    // console.log(this.props.location.pathname);
    if (user) {
      const pathname = '/server-members/'+AuthService.getCurrentUser().id;
      console.log(pathname);
      fetch(pathname).then(response => response.json()).then(data => {
        const newDate = new Date(data.date);
          // console.log(newDate);
        const day = newDate.getDate();
        const month = newDate.getMonth()+1;
        const year = newDate.getFullYear();
        // console.log(day,month,year);
        data.date = day+'-'+month+'-'+year;
        const authorInfor = {
          id:AuthService.getCurrentUser().id,
          pathname: '/members/'+AuthService.getCurrentUser().id,
          // avatar:data.avatar,
          // fullname:data.fullname,
          // username:data.username,
          // favouritedRecipes:data.favouritedRecipes,
          // recipes:data.recipes,
          // date:data.date
          }
          console.log(authorInfor.pathname);
          this.setState({
            currentUser: user,
            authorInfor: authorInfor
          });
        // }
      });
    }
  }
  logOut() {
    AuthService.logout();
  }
  render() {  
    const currentUser = this.state.currentUser;
    const authorInfor = this.state.authorInfor;
    // console.log(currentUser);
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
            <div className="nav__menu-item"><Link to={authorInfor}><i className="fa fa-user" aria-hidden="true"></i>
                            <span>HI {currentUser.username}</span></Link></div>
            <div className="nav__menu-item"><Link to='/' onClick={this.logOut}><i className="fa fa-sign-in" aria-hidden="true"></i>
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
  
export default withRouter(Nav);