import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import FixedNav2 from '../components/FixedNav2'
import axios from 'axios'
import '../styles/style.scss'
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fullname: '',
            username: '',
            password: '',
            avatar: '',
            usernameLogIn: '',
            passwordLogIn: ''
        }
        this.changeAvatar = this.changeAvatar.bind(this);
        this.changeFullName = this.changeFullName.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeUserNameLogIn = this.changeUserNameLogIn.bind(this);
        this.changePasswordLogIn = this.changePasswordLogIn.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
    }
    changeAvatar(event){
        this.setState({
            avatar:event.target.value
        })
    }
    changeUserNameLogIn(event){
        this.setState({
            usernameLogIn:event.target.value
        })
    }
    changePasswordLogIn(event){
        this.setState({
            passwordLogIn:event.target.value
        })
    }
    onSubmitLogin(event){
        event.preventDefault();
        
        const login = {
            usernameLogin:this.state.usernameLogIn,
            passwordLogin:this.state.passwordLogIn
        }
        axios.post('/login', login)
        .then(function (response) {
            console.log(response);
            if(response.data.status === 'error'){
                alert(response.data.error);
            }
            else {
                console.log("Got the token",response.data.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.data))
                alert('Login successfully');
                window.location = '/';
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({
            usernameLogin: '',
            passwordLogin: ''
        })
    }

    changeFullName(event){
        this.setState({
            fullname:event.target.value
        })
    }
    changeUserName(event){
        this.setState({
            username:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault();
        console.log(this.state.avatar);
        var usernameRegex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
        const registered = {
            fullname: this.state.fullname,
            username: this.state.username,
            password: this.state.password,
            avatar: this.state.avatar
        }
        if (usernameRegex.test(registered.username)) {
            axios.post('/register', registered)
            .then(function (response) {
                console.log(response);
                if(response.data.status === 'error'){
                    alert(response.data.error);
                }
                else alert('Register successfully');
            })
            .catch(function (error) {
                console.log(error);
            });
            // window.location = '/';
            this.setState({
                fullname: '',
                username: '',
                password: '',
                avatar: '',
            })
        } else {
            alert("Username is invalid. It should have more than 2 characters and not contains (_,-,@,...)!");
            this.setState({
                fullname: '',
                username: '',
                password: '',
                avatar: '',
            })
        }
    }
    render(){
        return(
            <section className="login-section">
                <Nav/>
                <FixedNav2/>
                <div className="form-container">
                    <div className="form-outer flex">

                        {/* Register */}
                        <div className="form flex">
                            <h1 className="form-title">Register</h1>
                            <form className="left-side"onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label for="fullname">Full name</label>
                                    <input type="text"
                                    onChange={this.changeFullName}
                                    value={this.state.fullname}
                                    required></input>
                                </div>

                                <div className="form-group">
                                    <label for="username">Username</label>
                                    <input type="text"
                                    onChange={this.changeUserName}
                                    value={this.state.username}
                                    required></input>
                                </div>

                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password"
                                    onChange={this.changePassword}
                                    value={this.state.password}
                                    required></input>
                                </div>

                                <div className="form-group">
                                    <label for="avatar">Avatar(Input image address)</label>
                                    <input type="text" 
                                    onChange={this.changeAvatar}
                                    value={this.state.avatar}
                                    required></input>
                                </div>

                                <input type="submit" className="btn" value="Register"></input>
                            </form>
                        </div>


                        {/* Login */}
                        <div className="form flex">
                            <h1 className="form-title">Login</h1>
                            <form className="left-side"onSubmit={this.onSubmitLogin}>
                                <div className="form-group">
                                    <label for="usernameLogIn">Username</label>
                                    <input type="text"
                                    onChange={this.changeUserNameLogIn}
                                    value={this.state.usernameLogIn}
                                    required></input>
                                </div>

                                <div className="form-group">
                                    <label for="passwordLogIn">Password</label>
                                    <input type="password"
                                    onChange={this.changePasswordLogIn}
                                    value={this.state.passwordLogIn}
                                    required></input>
                                </div>

                                <input type="submit" className="btn" value="Log in"></input>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        );
    }
}
export default Login;