import React from 'react';
import Nav from '../components/Nav';
import FixedNav2 from '../components/FixedNav2';
import Footer from '../components/Footer';
import axios from 'axios'
import AuthService from "../AuthComponents/authService"
import '../styles/style.scss';
import {Link} from 'react-router-dom';
class RecipeItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            recipe: [],
            dataIsReturned :false
        }
        this.onClickHeart = this.onClickHeart.bind(this);
        this.onClickLike = this.onClickLike.bind(this);
    }
    async componentDidMount(){
        console.log(this.props.location.id);
        const pathname = '/server-recipes/'+this.props.location.id;
        // console.log(pathname);
        const data = await fetch(pathname);
        const recipe = await data.json();
        const newDate = new Date(recipe.date);
        // console.log(newDate);
        const day = newDate.getDate();
        const month = newDate.getMonth()+1;
        const year = newDate.getFullYear();
        // console.log(day,month,year);
        recipe.date = day+'-'+month+'-'+year;
        // console.log(item.date);
        this.setState({
            recipe:recipe,
            dataIsReturned:true
        })  
        // console.log(this.state.recipe)
    }
    onClickLike(event){
        event.preventDefault();
        const likedRecipe = {
            recipeID:this.props.location.id,
            userID:this.state.recipe.user._id,
        }
        // console.log(likedRecipe);
        axios.post('/like', likedRecipe)
        .then(function (response) {
            console.log(response);
            if(response.data.status === 'error'){
                alert(response.data.error);
            }
            else alert('Like recipe successfully');
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    onClickHeart(event){
        event.preventDefault();
        const isLoggedIn = (AuthService.getCurrentUser()) ? AuthService.getCurrentUser().id : null;
        if(isLoggedIn === null){
            alert("You must log in to add this recipe to favourited list");
            window.location = '/register'
        }
        else {
        const favouritedRecipe = {
            recipeID: this.props.location.id,
            userID:AuthService.getCurrentUser().id
        }
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
    }
    render() {
        const props = this.state.recipe;
        const dataIsReturned = this.state.dataIsReturned
        console.log(props);
        console.log(dataIsReturned);
        if(!dataIsReturned){
            return <div>LOADING...</div>
        }
        const authorInfor = {
            pathname: '/members/'+props.user._id,
            id:props.user._id
        }
        return(
            <section className="recipe-blog">
                <Nav/>
                <FixedNav2/>
                <div className="container">
                    <div className="recipe-infor flex flex-jc-sb">
                        <div className="recipe-item">
                            <div className="img-container">
                                <img src={props.image} alt="{props.title}"></img>
                            </div>
                            <div className="recipe-content">
                                <h1 className="recipe-content__title">{props.title}</h1>
                                <div className="recipe-content__inner">
                                    <p>{props.description}</p>
                                </div>
                                <hr/>
                            </div>
                            <div className="recipe-details flex flex-jc-sb">
                                <div className="recipe-details__ingredients">
                                    <h4>
                                        <i className="fa fa-eyedropper"></i>
                                        Ingredients
                                    </h4>
                                    <ul>
                                        {
                                            props.ingredients.map(function(item, index){
                                                return <li className="list-style" key={ index }>{item}</li>;
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="recipe-details__steps">
                                    <h4>
                                        <i className="fa fa-sort-numeric-asc"></i>
                                        Steps
                                    </h4>
                                    <ul>
                                        {
                                            props.steps.map(function(item, index){
                                                return (
                                                    <div key={index}>
                                                        <div>Step {index+1}</div>
                                                        <li key={ index }>{item}</li>
                                                    </div>
                                                )
                                            })
                                        }
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="author-item">
                            <div className="author-item__infor">
                                <ul>
                                    <li className="author-avatar">
                                        <img src={props.user.avatar} alt={props.user.fullname}></img>
                                        By <Link to={authorInfor}>{props.user.fullname}</Link>
                                    </li>
                                    <li>
                                        Cook time:
                                        <span>{props.times}</span>
                                    </li>
                                    <li>
                                        Yeild:
                                        <span>{props.yeild}</span>
                                    </li>
                                    <li>
                                        Serving:
                                        <span>{props.numOfPeople}</span>
                                    </li>
                                    <li>
                                        Cuisine:
                                        <span>{props.cuisine}</span>
                                    </li>
                                    <li>
                                        Category:
                                        <span>{props.category}</span>
                                    </li>
                                    <li>
                                        Difficulty level:
                                        <span>{props.difficulty}</span>
                                    </li>
                                    <li>
                                        Created Date:
                                        <span>{props.date}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="author-item__like">        
                                    <ul>
                                        <li><a href="javascript:" onClick={this.onClickLike}><i class="fa fa-thumbs-up" aria-hidden="true"></i></a></li>
                                        <li><a href="javascript:" onClick={this.onClickHeart}><i class="fa fa-heart" aria-hidden="true"></i></a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        )
    }
}

export default RecipeItem;