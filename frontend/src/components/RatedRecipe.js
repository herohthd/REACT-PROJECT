import React from 'react';
import "../styles/style.scss"
import strawberryCake from '../img/strawberryCake.png'
import GordonRamsay from '../img/GordonRamsay.png'
import phobo from '../img/phobo.png'
import ChristineHa from '../img/ChristineHa.png'
import pizza from '../img/pizza.png'
import AntonioCarluccio from '../img/AntonioCarluccio.png'
import {Link} from 'react-router-dom';
import RatedRecipeItem from './RatedRecipeItem';
class RatedRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          recipes: [
            {
                images: strawberryCake,
                avatars: GordonRamsay,
                authorsName:"Gordon Ramsay",
                foodTitles:"Creamy Strawberry Crepes",
                foodDescriptions:"This recipe has been a family favorite for over 30 years! These crepes are delicious and very rich! Be sure you have at least 1 hour to prepare.",
                difficulty:"Easy",
                yeild:"Few dozen",
                numOfPeople:"1 person",
                times:"30min"
            },
            {
                images: phobo,
                avatars: ChristineHa,
                authorsName:"Christine Ha",
                foodTitles:"Pho bo Viet Nam",
                foodDescriptions:"Vietnamese Beef Noodle (Phở Bò) is one of the most popular dish in Vietnam.Vietnamese Beef Noodle is the combination of broth, rice noodles (Bánh Phở)...",
                difficulty:"Medium",
                yeild:"Few dozen",
                numOfPeople:"2 people",
            },
            {
                images: pizza,
                avatars: AntonioCarluccio,
                authorsName:"Gordon Ramsay",
                foodTitles:"Creamy Strawberry Crepes",
                foodDescriptions:"This recipe has been a family favorite for over 30 years! These crepes are delicious and very rich! Be sure you have at least 1 hour to prepare.",
                difficulty:"Hard",
                yeild:"Few dozen",
                numOfPeople:"3 people",
                times:"2 hours"
            },
          ]
        };
    }
    render() {
        let RatedRecipes = this.state.recipes.map(item=><RatedRecipeItem images={item.images} 
            avatars={item.avatars} authorsName={item.authorsName} 
            foodTitles={item.foodTitles} foodDescriptions={item.foodDescriptions} 
            difficulty={item.difficulty} yeild={item.yeild} 
            numOfPeople={item.numOfPeople} times={item.times}/>);
    return(
        <section>
            <div className="container">

              {/* Title */}
                <div className="section-title flex flex-jc-sb flex-ai-c">
                    <h3 className="section-title__name left-side">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        Top Rated Recipes
                    </h3>
                    <Link to="/" className="link btn right-side">All Top Rated Recipes</Link>
                </div>

               {/* Item */}
                <div className="recipe-list flex flex-jc-sb flex-ai-c">
                    {RatedRecipes};
                </div>
            </div>
        </section>
      );
    }
  }
  
export default RatedRecipe;