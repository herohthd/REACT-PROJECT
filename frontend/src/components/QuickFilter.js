import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
class QuickFilter extends React.Component {
    render() {
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
                  <div class="filter-list__item">
                    <Link to="/" class="link">
                      <i class="fa fa-beer" aria-hidden="true"></i>
                      Bervarages
                    </Link>
                  </div>
                  <div class="filter-list__item">
                    <Link to="/" class="link">
                      <i class="fas fa-bread-slice"></i>
                      Breads
                    </Link>
                  </div>
                  <div class="filter-list__item">
                    <Link to="/" class="link">
                      <i class="fas fa-hamburger"></i>
                      Hamburgers
                    </Link>
                  </div>
                  <div class="filter-list__item">
                    <Link to="/" class="link">
                      <i class="fas fa-ice-cream"></i>
                      Desserts
                    </Link>
                  </div>
                  <div class="filter-list__item">
                    <Link to="/" class="link">
                      <i class="fas fa-pizza-slice"></i>
                      Pizzas
                    </Link>
                  </div>
                  <div class="filter-list__item">
                    <Link to="/" class="link">
                      <i class="fas fa-seedling"></i>
                      Vegeterian
                    </Link>
                  </div>
                  <div class="filter-list__item">
                    <Link to="/" class="link">
                      <i class="fas fa-bacon"></i>
                      Meat
                    </Link>
                  </div>
                  <div class="filter-list__item">
                    <Link to="/" class="link">
                      <i class="fas fa-fish"></i>
                      Fish
                    </Link>
                  </div>
                  <div class="filter-list__item">
                    <Link to="/" class="link">
                      <i class="fas fa-egg"></i>
                      Egg
                    </Link>
                  </div>
                </div>
            </div>
        </section>
      );
    }
  }
  
export default QuickFilter;