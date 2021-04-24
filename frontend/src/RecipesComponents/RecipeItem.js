import React from 'react';
import Nav from '../components/Nav';
import FixedNav from '../components/FixedNav';
import Footer from '../components/Footer';
import '../styles/style.scss';
class RecipeItem extends React.Component {
    render() {
        const props = this.props.location;
    return(
        <section className="recipe-blog">
            <Nav/>
            <FixedNav/>
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
                                                <div>
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
                                    <img src={props.avatar} alt={props.authorName}></img>
                                    By <a href="/">{props.authorName}</a>
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
                            </ul>
                        </div>
                        <div className="author-item__like">        
                                <ul>
                                    <li><a href="/"><i class="fa fa-thumbs-up" aria-hidden="true"></i></a></li>
                                    <li><a href="/"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
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