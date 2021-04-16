import React from 'react'
import Nav from '../components/Nav.js'
import Footer from '../components/Footer'
import FixedNav from '../components/FixedNav'
import axios from 'axios'
import Author from './Author.js';
import '../styles/style.scss';

const Members = () => {
    return <div className="authorsscreen">
        <Nav/>
        <FixedNav/>
        <h2 className="authorsscreen_title">
            Chefs In Our Kitchen
        </h2>
        <div className="authorsscreen_authors">
            {/* <Author /> */}
        </div>
        <Footer/>
    </div>
}

export default Members;