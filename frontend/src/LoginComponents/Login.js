import React,{Component} from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import axios from 'axios';
import '../styles/style.scss'
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fullname: '',
            username: '',
            password: ''
        }
        this.changeFullName = this.changeFullName.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
        
        const registered = {
            fullname: this.state.fullname,
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:4000/login', registered)
            .then(response => console.log(response.data))
        
        // window.location = '/';
        this.setState({
            fullname: '',
            username: '',
            password: ''
        })
    }
    render(){
        return(
            <section>
                <Nav/>
                <div class="form-container">
                    <div class="form-outer flex">

                        {/* Register */}
                        <div class="form flex">
                            <h1 class="form-title">Register</h1>
                            <form class="left-side"onSubmit={this.onSubmit}>
                                <div class="form-group">
                                    <label for="fullname">Full name</label>
                                    <input type="text"
                                    onChange={this.changeFullName}
                                    value={this.state.fullname}
                                    ></input>
                                </div>

                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input type="text"
                                    onChange={this.changeUserName}
                                    value={this.state.username}
                                    ></input>
                                </div>

                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="text"
                                    onChange={this.changePassword}
                                    value={this.state.password}
                                    ></input>
                                </div>

                                <input type="submit" class="btn" value="Register"></input>
                            </form>
                        </div>


                        {/* Login */}
                        <div class="form flex">
                            <h1 class="form-title">Login</h1>
                            <form class="left-side"onSubmit={this.onSubmit}>
                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input type="text"
                                    onChange={this.changeUserName}
                                    value={this.state.username}
                                    ></input>
                                </div>

                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="text"
                                    onChange={this.changePassword}
                                    value={this.state.password}
                                    ></input>
                                </div>

                                <input type="submit" class="btn" value="Log in"></input>
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