import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
class QuickFilterItem extends React.Component {
    render() {
      return(
        <div className="filter-list__item">
            <Link to="/" className="link">
                <i className={this.props.classFromFilter} aria-hidden="true"></i>
                {this.props.categoriesFromFilter}
            </Link>
        </div>
      );
    }
  }
  
export default QuickFilterItem;