import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
class RatedRecipeItem extends React.Component {
    render() {
    return(
        <div className="recipe-list__item">
            <Link to="/" className="link">
                <div className="img-container">
                    <img src={this.props.images} alt="{this.props.images}"></img>
                </div>
            </Link>
            <div className="recipe-description">
                <Link to="/" className="link"><h4>{this.props.foodTitles}</h4></Link>
                <p>{this.props.foodDescriptions}</p>
                <div className="avatar">
                    <img src={this.props.avatars} alt={this.props.authorsName}></img>
                    By              
                    <Link to="/" className="link">  {this.props.authorsName}</Link>
                </div>
            </div>
            <div className="recipe-footer">
                <div className="recipe-footer__content">
                    <ul>
                        {this.props.difficulty&&<li>{this.props.difficulty}</li>}
                        {this.props.yeild&&<li><i className="fa fa-table"></i>  {this.props.yeild}</li>}
                        {this.props.numOfPeople&&<li><i className="fa fa-users"></i>  {this.props.numOfPeople}</li>}
                        {this.props.times && <li><i className="fa fa-clock-o" aria-hidden="true"></i>  {this.props.times}</li>}
                    </ul>
                </div>
            </div>
        </div>
                                  
      );
    }
  }
  
export default RatedRecipeItem;