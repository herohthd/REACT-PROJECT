import React from 'react';
import "../styles/style.scss"

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
                    <a href="/" class="btn right-side">All Categories</a>
                </div>

               {/* Item */}
                <div class="filter-list flex flex-jc-sb flex-ai-c flex-wrap">
                  <div class="filter-list__item">
                    <a href="/">
                      <i class="fa fa-beer" aria-hidden="true"></i>
                      Bervarages
                    </a>
                  </div>
                  <div class="filter-list__item">
                    <a href="/">
                      <i class="fas fa-bread-slice"></i>
                      Breads
                    </a>
                  </div>
                  <div class="filter-list__item">
                    <a href="/">
                      <i class="fas fa-hamburger"></i>
                      Hamburgers
                    </a>
                  </div>
                  <div class="filter-list__item">
                    <a href="/">
                      <i class="fas fa-ice-cream"></i>
                      Desserts
                    </a>
                  </div>
                  <div class="filter-list__item">
                    <a href="/">
                      <i class="fas fa-pizza-slice"></i>
                      Pizzas
                    </a>
                  </div>
                  <div class="filter-list__item">
                    <a href="/">
                      <i class="fas fa-seedling"></i>
                      Vegeterian
                    </a>
                  </div>
                  <div class="filter-list__item">
                    <a href="/">
                      <i class="fas fa-bacon"></i>
                      Meat
                    </a>
                  </div>
                  <div class="filter-list__item">
                    <a href="/">
                      <i class="fas fa-fish"></i>
                      Fish
                    </a>
                  </div>
                  <div class="filter-list__item">
                    <a href="/">
                      <i class="fas fa-egg"></i>
                      Egg
                    </a>
                  </div>
                </div>
            </div>
        </section>
      );
    }
  }
  
export default QuickFilter;