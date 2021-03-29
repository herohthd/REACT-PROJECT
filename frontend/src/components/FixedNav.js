import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/style.scss"
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';

let navbar;
let sticky;
class FixedNav extends React.Component {
    listener = null;
    state = {
        nav: false
    };
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        var heightToShow = window.innerHeight -120;

        if ( window.pageYOffset > heightToShow) {
            if (!this.state.nav ) {
                this.setState({ nav:true})
            }
        } 
        else {
            if (this.state.nav) {
                this.setState( {nav:false})
            }
        }
    };

    render() {
        return (
            <nav className={ this.state.nav ? "navbar navbar-expand-md navbar-light bg-light fixed-top" : "navbar navbar-expand-md navbar-light bg-light"}>
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item" active>
                                <a className="nav-link" href="/home">Home</a>
                            </li>
                            <li className="nav-item" active>
                                <a className="nav-link" href="/recipies">Recipies</a>
                            </li>
                            <li className="nav-item" active>
                                <a className="nav-link" href="/members">Members</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/post" id="navbardrop" data-toggle="dropdown">
                                    Post Formats
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="/audio">Audio</a>
                                    <a class="dropdown-item" href="/gallery">Gallery</a>
                                    <a class="dropdown-item" href="/image">Image</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/code" id="navbardrop" data-toggle="dropdown">
                                    Short Codes
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="/recipe">Recipes</a>
                                    <a class="dropdown-item" href="/genrall">Generall</a>
                                </div>
                            </li>
                            <li className="nav-item" active>
                                <a className="nav-link" href="/blog">Blog</a>
                            </li>
                            <li className="nav-item" active>
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>        
        </nav>
        )
    }
  }
  
export default FixedNav;