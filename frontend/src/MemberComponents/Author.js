import React from 'react'
import Nav from '../components/Nav.js'
import Footer from '../components/Footer'
import FixedNav2 from '../components/FixedNav2'
import '../styles/style.scss';

class Author extends React.Component {
    render() {
        const props = this.props.location;
        // console.log(props);
        return <div className="author">
        <Nav/>
        <FixedNav2/>
        <section className="author-container">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="white-block">
                            <div className="my-sidebar">
                                <div className="my-avatar">
                                    <img src={props.avatar} width="150" height="150" alt="Avatar" className="avatar avatar-150 wp-user-avatar wp-user-avatar-150 photo avatar-default"></img>
                                    <h4>{props.username}</h4>
                                    <ul className="list-unstyled list-inline post-share"></ul>
                                </div>
                                <ul className="list-unstyled my-menu">
                                    <li>
                                        <a href="javascript:;" className="clearfix">
                                            <i className="fa fa-cutlery"></i>
                                            Participating date 
                                            <span className="right-value"> {props.date}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="clearfix">
                                            <i className="fa fa-book"></i>
                                            Recipes 
                                            <span className="right-value"> {props.recipes.length}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="clearfix">
                                            <i className="fa fa-heart"></i>
                                            Favourited Recipes 
                                            <span className="right-value"> {props.favouritedRecipes.length}</span>
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
                                <a href="#tab_recipies" role="tab" data-toggle="tab">Author Recipes</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab_fav_recipies" role="tab" data-toggle="tab">Favourited Recipes</a>
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
                                        <h4 className="no-top-margin">{props.username}'s recipes</h4>
                                        <hr/>
                                        {/* <p className="pretable-loading">Loading...</p> */}
                                        <div className="bt-table">
                                            <div className="boostrap-table">
                                                <div className="fixed-table-toolbar">
                                                    <div className="pull-left-search">
                                                        <input className="form-control" type="text" placeholder="Search for Recipes..."></input>
                                                    </div>
                                                </div>
                                                <div className="fixed-table-container">
                                                    <div className="fixed-table-header">
                                                        <table></table>
                                                    </div>
                                                    <div className="fixed-table-body">
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
                                                                        <div className="th-inner">Category</div>
                                                                        <div className="fht-cell"></div>
                                                                    </th>
                                                                    <th>
                                                                        <div className="th-inner">Difficulty</div>
                                                                        <div className="fht-cell"></div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody >
                                                                {
                                                                props.recipes.map(recipe =>                            
                                                                    <tr className="no-records-found">
                                                                        <th>
                                                                            <div className="th-inner"><img src={recipe.image} alt={recipe.title} width="120" height="80"></img></div>
                                                                            <div className="fht-cell"></div>
                                                                        </th>
                                                                        <th>
                                                                            <div className="th-inner sortable">{recipe.title}</div>
                                                                            <div className="fht-cell"></div>
                                                                        </th>
                                                                        <th>
                                                                            <div className="th-inner">{recipe.category}</div>
                                                                            <div className="fht-cell"></div>
                                                                        </th>
                                                                        <th>
                                                                            <div className="th-inner">{recipe.difficulty}</div>
                                                                            <div className="fht-cell"></div>
                                                                        </th>
                                                                    </tr>                                                                    
                                                                )
                                                                }
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
                                        <h4 className="no-top-margin">{props.username}'s favourited recipes</h4>
                                        <hr/>
                                        {/* <p className="pretable-loading">Loading...</p> */}
                                        <div className="bt-table">
                                            <div className="boostrap-table">
                                                <div className="fixed-table-toolbar">
                                                    <div className="pull-left-search">
                                                        <input className="form-control" type="text" placeholder="Search for Recipes..."></input>
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
                                                                        <div className="th-inner">Category</div>
                                                                        <div className="fht-cell"></div>
                                                                    </th>
                                                                    <th>
                                                                        <div className="th-inner">Difficulty</div>
                                                                        <div className="fht-cell"></div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody >
                                                            {
                                                                props.favouritedRecipes.map(recipe =>                            
                                                                    <tr className="no-records-found">
                                                                        <th>
                                                                            <div className="th-inner"><img src={recipe.image} alt={recipe.title} width="120" height="80"></img></div>
                                                                            <div className="fht-cell"></div>
                                                                        </th>
                                                                        <th>
                                                                            <div className="th-inner sortable">{recipe.title}</div>
                                                                            <div className="fht-cell"></div>
                                                                        </th>
                                                                        <th>
                                                                            <div className="th-inner">{recipe.category}</div>
                                                                            <div className="fht-cell"></div>
                                                                        </th>
                                                                        <th>
                                                                            <div className="th-inner">{recipe.difficulty}</div>
                                                                            <div className="fht-cell"></div>
                                                                        </th>
                                                                    </tr>                                                                    
                                                                )
                                                                }
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
}

export default Author;