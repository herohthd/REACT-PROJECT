import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
class QuickFilterItem extends React.Component {
    render() {
      return(
        <div class="filter-list__item">
            <Link to="/" class="link">
                <i class={this.props.classFromFilter} aria-hidden="true"></i>
                {this.props.categoriesFromFilter}
            </Link>
        </div>
      );
    }
  }
  
export default QuickFilterItem;