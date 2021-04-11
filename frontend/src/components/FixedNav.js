import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../styles/style.scss"
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';

const FixedNav = () => {
    const [show, setShow] = useState(false);
    const [responsive, setResponsive] = useState(false);
    let effect = show && !responsive;
    let navbarClasses = 'navbar navbar-expand-md navbar-light';

    const handleScroll = () => {
        if ( window.scrollY > 556 ){
            setShow(true);
        }
        else {
            setShow(false);
        }
    }

    const handleResponsive = () => {
        if ( window.innerWidth <= 600 ) {
            setResponsive(true);
        }
        else {
            setResponsive(false);
        }
    }

    useEffect ( () => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResponsive);
    },[])

    useEffect ( () => {
        console.log(window.scrollY);
        console.log(window.innerWidth);
        console.log(effect);
    },[show, responsive])

    return (
        <nav className={ effect ? navbarClasses + ' scrolled' : navbarClasses}>
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