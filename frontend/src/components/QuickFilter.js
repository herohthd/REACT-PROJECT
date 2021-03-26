import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
import QuickFilterItem from './QuickFilterItem';
class QuickFilter extends React.Component {
    render() {
      const classIcons = [
        "fa fa-beer",
        "fas fa-bread-slice",
        "fas fa-hamburger",
        "fas fa-ice-cream",
        "fas fa-pizza-slice",
        "fas fa-seedling",
        "fas fa-bacon",
        "fas fa-fish",
        "fas fa-egg"
      ];
      const categories = [
        "Bervarages",
        "Breads",
        "Hamburgers",
        "Ice cream",
        "Pizzas",
        "Vegeterian",
        "Meat",
        "Fish",
        "Egg"
      ];
      return(
        <section>
            <div class="container">

              {/* Title */}
                <div class="section-title flex flex-jc-sb flex-ai-c">
                    <h3 class="section-title__name left-side">
                        <i class="fa fa-filter"></i>
                        Quick Filter
                    </h3>
                    <Link to="/" class=" link btn right-side">All Categories</Link>
                </div>

               {/* Item */}
                <div class="filter-list flex flex-jc-sb flex-ai-c flex-wrap">
                  <QuickFilterItem classFromFilter = {classIcons[0]} categoriesFromFilter = {categories[0]}/>
                  <QuickFilterItem classFromFilter = {classIcons[1]} categoriesFromFilter = {categories[1]}/>
                  <QuickFilterItem classFromFilter = {classIcons[2]} categoriesFromFilter = {categories[2]}/>
                  <QuickFilterItem classFromFilter = {classIcons[3]} categoriesFromFilter = {categories[3]}/>
                  <QuickFilterItem classFromFilter = {classIcons[4]} categoriesFromFilter = {categories[4]}/>
                  <QuickFilterItem classFromFilter = {classIcons[5]} categoriesFromFilter = {categories[5]}/>
                  <QuickFilterItem classFromFilter = {classIcons[6]} categoriesFromFilter = {categories[6]}/>
                  <QuickFilterItem classFromFilter = {classIcons[7]} categoriesFromFilter = {categories[7]}/>
                  <QuickFilterItem classFromFilter = {classIcons[8]} categoriesFromFilter = {categories[8]}/>
                </div>
            </div>
        </section>
      );
    }
  }
  
export default QuickFilter;