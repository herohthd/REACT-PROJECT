import React, {useState, useEffect} from 'react';
import "../styles/style.scss"

const FixedNav = () => {
    const [show, setShow] = useState(false);
    const [responsive, setResponsive] = useState(false);
    let effect = show && !responsive;
    let navbarClasses = 'navbar navbar-expand-md navbar-light';

    const handleScroll = () => {
        if ( window.scrollY > 700 ){
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
                <button className="navbar-toggler button-white-menu collapsed"  data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span class="sr-only">Toggle navigation</span>
                        <i class ="fa fa-bars fa-3x"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" active>
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item" active>
                            <a className="nav-link" href="/recipes">Recipes</a>
                        </li>
                        <li className="nav-item" active>
                            <a className="nav-link" href="/members">Members</a>
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