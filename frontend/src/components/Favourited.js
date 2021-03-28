import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
import strawberryCake from '../img/strawberryCake.png'
import GordonRamsay from '../img/GordonRamsay.png'
import phobo from '../img/phobo.png'
import ChristineHa from '../img/ChristineHa.png'
import pizza from '../img/pizza.png'
import AntonioCarluccio from '../img/AntonioCarluccio.png'
import LatestRecipeItem from './LatestRecipeItem'
import FavouritedItem from './FavouritedItem'
class Favourited extends React.Component {
    render() {
        const images = [
            strawberryCake,
            phobo,
            pizza
        ];
        const avatars = [
            GordonRamsay,
            ChristineHa,
            AntonioCarluccio
        ];
        const authorsName = [
            "Gordon Ramsay",
            "Christine Ha",
            "Antonio Carluccio"
        ];
        const foodTitles = [
            "Creamy Strawberry Crepes",
            "Pho bo Viet Nam",
            "Strawberry Crepes"
        ];
        const foodDescriptions = [
            "This recipe has been a family favorite for over 30 years!...",
            "Vietnamese Beef Noodle (Phở Bò) is one of the most popular dish...",
            "This recipe has been a family favorite for over 30 years! These crepes are delicious and very rich! Be sure you have at least 1 hour to prepare."
        ];
        const difficulty = [
            "Easy",
            "Medium",
            "Hard"
        ];
        const yeild = [
            "Few Dozen"
        ];
        const numOfPeople = [
            "1 person",
            "2 people",
            "3 people"
        ]
        const times = [
            "30 min",
            "1 hour",
            "2 hour"
        ];
      return(
        <section>
            <div class="container">

              {/* Title */}
                <div class="section-title flex flex-jc-sb flex-ai-c">
                    <h3 class="section-title__name left-side">
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        Most Favourited Recipes
                    </h3>
                    <Link to="/" class="link btn right-side">All Most Favourited Recipes</Link>
                </div>

               {/* Item */}
                <div class="recipe-list flex flex-jc-sb flex-ai-c">
                    <FavouritedItem images={images[0]} avatars={avatars[0]} authorsName={authorsName[0]} foodTitles={foodTitles[0]} foodDescriptions={foodDescriptions[0]} difficulty={difficulty[0]} yeild={yeild[0]} numOfPeople={numOfPeople[0]} times={times[0]}/>
                    <FavouritedItem images={images[1]} avatars={avatars[1]} authorsName={authorsName[1]} foodTitles={foodTitles[1]} foodDescriptions={foodDescriptions[1]} difficulty={difficulty[1]} yeild={yeild[0]} numOfPeople={numOfPeople[1]} />
                </div>   
            </div>
        </section>
      );
    }
  }
  
export default Favourited;