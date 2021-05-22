import React from 'react'
import Nav from '../components/Nav.js'
import Footer from '../components/Footer'
import FixedNav2 from '../components/FixedNav2'
import axios from 'axios'
import '../styles/style.scss'
import {Link} from 'react-router-dom'
import AuthService from "../AuthComponents/authService"

class Author extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            author: undefined,
            recipeTitle:"",
            favouritedRecipeTitle:"",
            dataIsReturned :false,
        }
        // console.log(this.state);
        this.handleChangeRecipeTitle =  this.handleChangeRecipeTitle.bind(this);
        this.handleChangeFavouritedRecipeTitle =  this.handleChangeFavouritedRecipeTitle.bind(this);
    }
    async componentDidMount(){
        console.log("DID MOUNT")
        // console.log(this.props.location.id);
        const pathname = '/server-members/'+this.props.location.id;
        // console.log(pathname);
        const data = await fetch(pathname);
        const author = await data.json();
        // console.log(author);
        const newDate = new Date(author.date);
        // console.log(newDate);
        const day = newDate.getDate();
        const month = newDate.getMonth()+1;
        const year = newDate.getFullYear();
        // console.log(day,month,year);
        author.date = day+'-'+month+'-'+year;
        // console.log(item.date);
        this.setState({
            author:author,
            dataIsReturned:true
        })  
        // console.log(this.state)
    }

    async componentDidUpdate(prevProps,prevState) {
        // Typical usage (don't forget to compare props):
        const changeID = this.props.location.id !== prevProps.location.id; 
        if (changeID || !this.state.dataIsReturned) {
            console.log("DID UPDATE");
            const pathname = '/server-members/'+this.props.location.id;
            // console.log(pathname);
            const data = await fetch(pathname);
            const author = await data.json();
            console.log(author);
            const newDate = new Date(author.date);
            // console.log(newDate);
            const day = newDate.getDate();
            const month = newDate.getMonth()+1;
            const year = newDate.getFullYear();
            // console.log(day,month,year);
            author.date = day+'-'+month+'-'+year;
            // console.log(item.date);
            this.setState({
                author:author,
                dataIsReturned:true
            })  
        }
    }
    removeFavouritedRecipe(recipeID,userID){
        const deleteRecipe = {
            recipeID,
            userID:AuthService.getCurrentUser().id,
        }
        console.log(deleteRecipe)
        axios.post('/deleteFavourited', deleteRecipe)
        .then(function (response) {
            // console.log(response);
            if(response.data.status === 'error'){
                alert(response.data.error);
            }
            else alert('Delete successfully');
        })
          .catch(function (error) {
            console.log(error);
        });
        this.setState({
            // author: undefined,
            dataIsReturned :false
        })
    }

    removeRecipe(recipeID,userID){
        const deleteRecipe = {
            recipeID,
            userID
        }
        console.log(deleteRecipe)
        axios.post('/delete', deleteRecipe)
        .then(function (response) {
            // console.log(response);
            if(response.data.status === 'error'){
                alert(response.data.error);
            }
            else alert('Delete successfully');
        })
          .catch(function (error) {
            console.log(error);
        });
        this.setState({
            // author: undefined,
            dataIsReturned :false
        })
    }

    onClickHeart(recipeID,userID){
        // event.preventDefault();
        const favouritedRecipe = {
            recipeID,
            userID:AuthService.getCurrentUser().id
        }
        // console.log(favouritedRecipe);
        axios.post('/addFavourited', favouritedRecipe)
        .then(function (response) {
            console.log(response);
            if(response.data.status === 'error'){
                alert(response.data.error);
            }
            else alert('Add to favourited recipes successfully');
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    handleChangeRecipeTitle(event){
        this.setState({recipeTitle:event.target.value})
    }

    handleChangeFavouritedRecipeTitle(event){
        this.setState({favouritedRecipeTitle:event.target.value})
    }

    render() {
        const author = this.state.author;
        const dataIsReturned = this.state.dataIsReturned
        // console.log(author);
        // console.log(dataIsReturned);
        if(!dataIsReturned){
            return <div>LOADING...</div>
        }
        const isLoggedIn = (AuthService.getCurrentUser()) ? AuthService.getCurrentUser().id : null ;
        let recipeTitle = this.state.recipeTitle;
        let recipes = author.recipes;
        let favouritedRecipeTitle = this.state.favouritedRecipeTitle;
        let favouritedRecipes = author.favouritedRecipes;
        if(recipeTitle){
            recipeTitle = recipeTitle.split(" ");
            recipes = author.recipes.filter(recipe => {
                let mark = 1;
                for(let item of recipeTitle){
                    if(!recipe.title.includes(item))  {
                        mark = 0;
                        break;
                    }
                }
                if(mark) return true;
                return false;
            })
        }
        console.log(recipes);
        return (
            <div className="author">
            <Nav/>
            <FixedNav2/>
            <section className="author-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="white-block">
                                <div className="my-sidebar">
                                    <div className="my-avatar">
                                        <img src={author.avatar} width="150" height="150" alt="Avatar" className="avatar avatar-150 wp-user-avatar wp-user-avatar-150 photo avatar-default"></img>
                                        <h4>{author.fullname}</h4>
                                        <ul className="list-unstyled list-inline post-share"></ul>
                                    </div>
                                    <ul className="list-unstyled my-menu">
                                        <li>
                                            <div href="/" className="clearfix">
                                                <i className="fa fa-cutlery"></i>
                                                Participating date 
                                                <span className="right-value"> {author.date}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div href="/" className="clearfix">
                                                <i className="fa fa-book"></i>
                                                Recipes 
                                                <span className="right-value"> {author.recipes.length}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div href="/" className="clearfix">
                                                <i className="fa fa-heart"></i>
                                                Favourited Recipes 
                                                <span className="right-value"> {author.favouritedRecipes.length}</span>
                                            </div>
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
                                            <h4 className="no-top-margin">{author.username}'s recipes</h4>
                                            <hr/>
                                            {/* <p className="pretable-loading">Loading...</p> */}
                                            <div className="bt-table">
                                                <div className="boostrap-table">
                                                    <div className="fixed-table-toolbar">
                                                        <div className="pull-left-search">
                                                            <input className="form-control" type="text" onChange={this.handleChangeRecipeTitle} placeholder="Search for Recipes..."></input>
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
                                                                    recipes.map(recipe => {       
                                                                        const recipeInfor = {
                                                                            pathname: '/recipes/'+recipe._id,
                                                                            id:recipe._id
                                                                        };
                                                                        const recipeUpdate = {
                                                                            pathname: '/update',
                                                                            recipeID:recipe._id,
                                                                        }
                                                                        return  <tr className="no-records-found">
                                                                            <th>
                                                                                <Link to={recipeInfor}>
                                                                                <div className="th-inner-route"><img src={recipe.image} alt={recipe.title} width="120" height="80"></img></div>
                                                                                <div className="fht-cell"></div>
                                                                                </Link>
                                                                            </th>
                                                                            <th>
                                                                                <Link to={recipeInfor}>
                                                                                <div className="th-inner-route sortable">{recipe.title}</div>
                                                                                <div className="fht-cell"></div>
                                                                                </Link>
                                                                            </th>
                                                                            <th>
                                                                                <div className="th-inner">{recipe.category}</div>
                                                                                <div className="fht-cell"></div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="th-inner">{recipe.difficulty}</div>
                                                                                <div className="fht-cell"></div>
                                                                            </th>
                                                                            
                                                                            {
                                                                                isLoggedIn && isLoggedIn === author._id &&
                                                                                <button className="button">
                                                                                    <Link to={recipeUpdate}>
                                                                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                                                                    </Link>
                                                                                </button>
                                                                            }
                                                                            {
                                                                                isLoggedIn && isLoggedIn === author._id &&
                                                                                <button className="button" onClick={this.removeRecipe.bind(this,recipe._id,author._id)}>
                                                                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                                                                </button>
                                                                            }
                                                                            {
                                                                                isLoggedIn && isLoggedIn !== author._id &&
                                                                                <button className="button" onClick={this.onClickHeart.bind(this,recipe._id,author._id)}>
                                                                                <i class="fa fa-heart" aria-hidden="true"></i>
                                                                                </button>
                                                                            }
                                                                        
                                                                        </tr>                     
                                                                    }                                               
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
                                            <h4 className="no-top-margin">{author.username}'s favourited recipes</h4>
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
                                                                    author.favouritedRecipes.map(recipe =>  {
                                                                        const recipeInfor = {
                                                                            pathname: '/recipes/'+recipe._id,
                                                                            id:recipe._id
                                                                        };          
                                                                        // console.log(recipeInfor);  
                                                                        // console.log(recipe);  
                                                                        return  <tr className="no-records-found">
                                                                            <th>
                                                                                <Link to={recipeInfor} className="link-title">
                                                                                <div className="th-inner-route"><img src={recipe.image} alt={recipe.title} width="120" height="80"></img></div>
                                                                                <div className="fht-cell"></div>
                                                                                </Link>
                                                                            </th>
                                                                            <th>
                                                                                <Link to={recipeInfor}>
                                                                                <div className="th-inner-route sortable">{recipe.title}</div>
                                                                                <div className="fht-cell"></div>
                                                                                </Link>
                                                                            </th>
                                                                            <th>
                                                                                <div className="th-inner">{recipe.category}</div>
                                                                                <div className="fht-cell"></div>
                                                                            </th>
                                                                            <th className="remove-group">
                                                                                <div className="th-inner">{recipe.difficulty}</div>
                                                                                <div className="fht-cell">
                                                                                </div>
                                                                            </th>
                                                                            {
                                                                                isLoggedIn && isLoggedIn === author._id &&
                                                                                <button className="button" onClick={this.removeFavouritedRecipe.bind(this,recipe._id)}>
                                                                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                                                                </button>
                                                                            }
                                                                            {
                                                                                isLoggedIn && isLoggedIn !== author._id &&
                                                                                <button className="button" onClick={this.onClickHeart.bind(this,recipe._id,author._id)}>
                                                                                <i class="fa fa-heart" aria-hidden="true"></i>
                                                                                </button>
                                                                            }
                                                                        </tr>                                
                                                                    }                                
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
    )}
}
export default Author;