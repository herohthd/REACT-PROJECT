import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../styles/style.scss"
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';

const FixedNav = () => {
    const [show, setShow] = useState(false);
    let navbarClasses = 'navbar navbar-expand-md navbar-light bg-light';

    const handleScroll = () => {
        if ( window.scrollY > 556 ){
            setShow(true);
        }
        else {
            setShow(false);
        }
    }

    useEffect ( () => {
        window.addEventListener('scroll', handleScroll);
    },[])

    return (
        <nav className={show ? navbarClasses + ' scrolled' : navbarClasses}>
            <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
             </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
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
  
export default FixedNav;