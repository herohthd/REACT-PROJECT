import React from 'react'
import Nav from '../components/Nav.js'
import Footer from '../components/Footer'
import FixedNav from '../components/FixedNav'
import '../styles/style.scss';

const Author = () => {
    return <div className="author">
        <Nav/>
        <FixedNav/>
        <section className="author-container">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="white-block">
                            <div className="my-sidebar">
                                <div className="my-avatar">
                                    <img src="https://kb.spinbackup.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" width="150" height="150" alt="Avatar" className="avatar avatar-150 wp-user-avatar wp-user-avatar-150 photo avatar-default"></img>
                                    <h4>Username</h4>
                                    <ul className="list-unstyled list-inline post-share"></ul>
                                </div>
                                <ul className="list-unstyled my-menu">
                                    <li>
                                        <a href="javascript:;" className="clearfix">
                                            <i className="fa fa-cutlery"></i>
                                            Cooking level 
                                            <span className="right-value"> Rookie</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="clearfix">
                                            <i className="fa fa-book"></i>
                                            Recipies 
                                            <span className="right-value"> 0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="clearfix">
                                            <i className="fa fa-heart"></i>
                                            Favorite Recipies 
                                            <span className="right-value"> 0</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9 single-recipie author">
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" active>
                                <a href="#tab_about" role="tab" data-toggle="tab">About Author</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab_recipies" role="tab" data-toggle="tab">Author Recipies</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab_fav_recipies" role="tab" data-toggle="tab">Favorite Recipies</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane fade active in" id="tab_about">
                                <div className="white-block">
                                    <div className="content-inner"></div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="tab_recipies">
                                <div className="white-block">
                                    <div className="content-inner">
                                        <h4 className="no-top-margin">Username's recipies</h4>
                                        <hr/>
                                        <p className="pretable-loading">Loading...</p>
                                        <div className="bt-table">
                                            <div className="boostrap-table">
                                                <div className="fixed-table-toolbar">
                                                    <div className="pull-left-search">
                                                        <input className="form-control" type="text" placeholder="Search for Recipies..."></input>
                                                    </div>
                                                </div>
                                                <div className="fixed-table-container">
                                                    <div className="fixed-table-header">
                                                        <table></table>
                                                    </div>
                                                    <div className="fixed-table-body">
                                                        <div className="fixed-table-loading">Loading, Please wait...</div>
                                                        <table data-toggle="table" data-search-align="left" data-search="true" data-classes="table table-striped" className="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        <div className="th-inner">Image</div>
                                                                        <div className="fht-cell"></div>
                                                                    </th>
                                                                    <th>
                                                                        <div className="th-inner sortable">Name</div>
                                                                        <div className="fht-cell"></div>
                                                                    </th>
                                                                    <th>
                                                                        <div className="th-inner">Ratings</div>
                                                                        <div className="fht-cell"></div>
                                                                    </th>
                                                                    <th>
                                                                        <div className="th-inner">Difficulty</div>
                                                                        <div className="fht-cell"></div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody >
                                                                <tr className="no-records-found"></tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="fixed-table-pagination"></div>
                                                </div>
                                            </div>
                                           <div className="clearfix"></div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="tab_fav_recipies">
                                <div className="white-block">
                                    <div className="content-inner">
                                        <h4 className="no-top-margin">Username's favorite recipies</h4>
                                        <hr/>
                                        {/* <p className="pretable-loading">Loading...</p> */}
                                        <div className="bt-table">
                                            <div className="boostrap-table">
                                                <div className="fixed-table-toolbar">
                                                    <div className="pull-left-search">
                                                        <input className="form-control" type="text" placeholder="Search for Recipies..."></input>
                                                    </div>
                                                </div>
                                                <div className="fixed-table-container">
                                                    <div className="fixed-table-header">
                                                        <table></table>
                                                    </div>
                                                    <div className="fixed-table-body">
                                                        {/* <div className="fixed-table-loading">Loading, Please wait...</div> */}
                                                        <table data-toggle="table" data-search-align="left" data-search="true" data-classes="table table-striped" className="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        <div className="th-inner">Image</div>
                                                                        <div className="fht-cell"></div>
                                                                    </th>
                                                                    <th>
                                                                        <div className="th-inner sortable">Name</div>
                                                                        <div className="fht-cell"></div>
                                                                    </th>
                                                                    <th>
                                                                        <div className="th-inner">Ratings</div>
                                                                        <div className="fht-cell"></div>
                                                                    </th>
                                                                    <th>
                                                                        <div className="th-inner">Difficulty</div>
                                                                        <div className="fht-cell"></div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody >
                                                                <tr className="no-records-found"></tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="fixed-table-pagination"></div>
                                                </div>
                                            </div>
                                           <div className="clearfix"></div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
}

export default Author;