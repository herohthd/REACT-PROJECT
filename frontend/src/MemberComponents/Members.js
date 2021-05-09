import React from 'react'
import Nav from '../components/Nav.js'
import Footer from '../components/Footer'
import FixedNav from '../components/FixedNav'
import '../styles/style.scss';

const Members = () => {
    return <div className="authors">
        <Nav/>
        <FixedNav/>
        <section className="author-section">
            <div className="container">
                <div className="section-title">
                    <h1 className="text-center h3-size">
                        <i className="fa fa-users"></i>
                        Chefs In Our Kitchen
                    </h1>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="white-block member-block">
                            <div className="member-avatar">
                                <img src="https://kb.spinbackup.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" width="150" height="150" alt="Avatar" className="avatar avatar-150 wp-user-avatar wp-user-avatar-150 photo avatar-default"></img>
                            </div>
                            <div className="member-holder">
                                <a href="/author" className="blog-title">
                                    <h5>
                                        Username
                                    </h5>
                                </a>
                                <ul className="list-unstyled post-meta">
                                    <li> Joined in 11th 2000</li>
                                    <li>Wrote: 0 recipies</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="white-block member-block">
                            <div className="member-avatar">
                                <img src="https://kb.spinbackup.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" width="150" height="150" alt="Avatar" className="avatar avatar-150 wp-user-avatar wp-user-avatar-150 photo avatar-default"></img>
                            </div>
                            <div className="member-holder">
                                <a href="/author" className="blog-title">
                                    <h5>
                                        Username
                                    </h5>
                                </a>
                                <ul className="list-unstyled post-meta">
                                    <li> Joined in 11th 2000</li>
                                    <li>Wrote: 0 recipies</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="white-block member-block">
                            <div className="member-avatar">
                                <img src="https://kb.spinbackup.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" width="150" height="150" alt="Avatar" className="avatar avatar-150 wp-user-avatar wp-user-avatar-150 photo avatar-default"></img>
                            </div>
                            <div className="member-holder">
                                <a href="/author" className="blog-title">
                                    <h5>
                                        Username
                                    </h5>
                                </a>
                                <ul className="list-unstyled post-meta">
                                    <li> Joined in 11th 2000</li>
                                    <li>Wrote: 0 recipies</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="white-block member-block">
                            <div className="member-avatar">
                                <img src="https://kb.spinbackup.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" width="150" height="150" alt="Avatar" className="avatar avatar-150 wp-user-avatar wp-user-avatar-150 photo avatar-default"></img>
                            </div>
                            <div className="member-holder">
                                <a href="/author" className="blog-title">
                                    <h5>
                                        Username
                                    </h5>
                                </a>
                                <ul className="list-unstyled post-meta">
                                    <li> Joined in 11th 2000</li>
                                    <li>Wrote: 0 recipies</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        <Footer/>
    </div>
}

export default Members;