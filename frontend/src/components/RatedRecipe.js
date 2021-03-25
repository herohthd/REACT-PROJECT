import React from 'react';
import "../styles/style.scss"
import strawberryCake from '../img/strawberryCake.png'
import GordonRamsay from '../img/GordonRamsay.png'
import phobo from '../img/phobo.png'
import ChristineHa from '../img/ChristineHa.png'
import pizza from '../img/pizza.png'
import AntonioCarluccio from '../img/AntonioCarluccio.png'
import {Link} from 'react-router-dom';
class RatedRecipe extends React.Component {
    render() {
      return(
        <section>
            <div class="container">

              {/* Title */}
                <div class="section-title flex flex-jc-sb flex-ai-c">
                    <h3 class="section-title__name left-side">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        Top Rated Recipes
                    </h3>
                    <Link to="/" class="link btn right-side">All Top Rated Recipes</Link>
                </div>

               {/* Item 1*/}
                <div class="recipe-list flex flex-jc-sb flex-ai-c">
                    {/* Item 1 */}
                  <div class="recipe-list__item">
                    <Link to="/" class="link">
                        <div class="img-container">
                            <img src={strawberryCake} alt="StrawberryCake"></img>
                        </div>
                    </Link>
                    <div class="recipe-description">
                        <Link to="/" class="link"><h4>Creamy Strawberry Crepes</h4></Link>
                        <p>This recipe has been a family favorite for over 30 years! These crepes are delicious and very rich! Be sure you have at least 1 hour to prepare.</p>
                        <div class="avatar">
                            <img src={GordonRamsay} alt="Gordon Ramsay"></img>
                            By              
                            <Link to="/" class="link">  Gordon Ramsay</Link>
                        </div>
                    </div>
                    <div class="recipe-footer">
                        <div class="recipe-footer__content">
                            <ul>
                                <li>Easy</li>
                                <li><i class="fa fa-table"></i>  Few Dozen</li>
                                <li><i class="fa fa-users"></i>  3 people</li>
                            </ul>
                        </div>
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div class="recipe-list__item">
                    <Link to="/" class="link">
                        <div class="img-container">
                            <img src={phobo} alt="Phobo"></img>
                        </div>
                    </Link>
                    <div class="recipe-description">
                        <Link to="/" class="link"><h4>Pho bo Viet Nam</h4></Link>
                        <p>Vietnamese Beef Noodle (Phở Bò) is one of the most popular dish in Vietnam.Vietnamese Beef Noodle is the combination of broth, rice noodles (Bánh Phở)..</p>
                        <div class="avatar">
                            <img src={ChristineHa} alt="Christine Ha"></img>
                            By              
                            <Link to="/" class="link">  Christine Ha</Link>
                        </div>
                    </div>
                    <div class="recipe-footer">
                        <div class="recipe-footer__content">
                            <ul>
                                <li>Easy</li>
                                <li><i class="fa fa-table"></i>  Few Dozen</li>
                                <li><i class="fa fa-users"></i>  3 people</li>
                                <li><i class="fa fa-clock-o" aria-hidden="true"></i>  1 hour</li>
                            </ul>
                        </div>
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div class="recipe-list__item">
                    <Link to="/" class="link">
                        <div class="img-container">
                            <img src={pizza} alt="Pizza"></img>
                        </div>
                    </Link>
                    <div class="recipe-description">
                        <Link to="/" class="link"><h4>Creamy Strawberry Crepes</h4></Link>
                        <p>This recipe has been a family favorite for over 30 years! These crepes are delicious and very rich! Be sure you have at least 1 hour to prepare.</p>
                        <div class="avatar">
                            <img src={AntonioCarluccio} alt="Antonio Carluccio"></img>
                            By              
                            <Link to="/" class="link">  Antonio Carluccio</Link>
                        </div>
                    </div>
                    <div class="recipe-footer">
                        <div class="recipe-footer__content">
                            <ul>
                                <li>Easy</li>
                                <li><i class="fa fa-table"></i>  Few Dozen</li>
                                <li><i class="fa fa-users"></i>  3 people</li>
                                <li><i class="fa fa-clock-o" aria-hidden="true"></i>  30 min</li>
                            </ul>
                        </div>
                    </div>
                  </div>
                </div>
                
            </div>
        </section>
      );
    }
  }
  
export default RatedRecipe;