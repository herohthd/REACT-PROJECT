import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
class RatedRecipeItem extends React.Component {
    render() {
    return(
        <div class="recipe-list__item">
            <Link to="/" class="link">
                <div class="img-container">
                    <img src={this.props.images} alt="{this.props.images}"></img>
                </div>
            </Link>
            <div class="recipe-description">
                <Link to="/" class="link"><h4>{this.props.foodTitles}</h4></Link>
                <p>{this.props.foodDescriptions}</p>
                <div class="avatar">
                    <img src={this.props.avatars} alt={this.props.authorsName}></img>
                    By              
                    <Link to="/" class="link">  {this.props.authorsName}</Link>
                </div>
            </div>
            <div class="recipe-footer">
                <div class="recipe-footer__content">
                    <ul>
                        {this.props.difficulty&&<li>{this.props.difficulty}</li>}
                        {this.props.yeild&&<li><i class="fa fa-table"></i>  {this.props.yeild}</li>}
                        {this.props.numOfPeople&&<li><i class="fa fa-users"></i>  {this.props.numOfPeople}</li>}
                        {this.props.times && <li><i class="fa fa-clock-o" aria-hidden="true"></i>  {this.props.times}</li>}
                    </ul>
                </div>
            </div>
        </div>
                                  
      );
    }
  }
  
export default RatedRecipeItem;