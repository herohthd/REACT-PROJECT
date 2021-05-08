import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
class LatestRecipeItem extends React.Component {
    render() {
        const recipeInfor = {
            pathname:"/recipes/"+this.props.recipeID,
            id: this.props.recipeID
        }
        const authorInfor = {
            pathname:"/members/"+this.props.authorID,
            id:this.props.authorID
        } 
    return(
        <div className="recipe-list__item">
            <Link to={recipeInfor} className="link">
                <div className="img-container">
                <img src={this.props.images} alt="{this.props.images}"></img>
                </div>
            </Link>
            <div className="recipe-description">
                <Link to={recipeInfor} className="link"><h4>{this.props.foodTitles}</h4></Link>
                <p>{this.props.foodDescriptions}</p>
                <div className="avatar">
                    <img src={this.props.avatars} alt={this.props.authorsName}></img>
                    By              
                    <Link to={authorInfor} className="link">  {this.props.authorsName}</Link>
                </div>
            </div>
            <div className="recipe-footer">
                <div className="recipe-footer__content">
                    <ul>
                        {this.props.difficulty&&<li title="Difficulty">{this.props.difficulty}</li>}
                        {this.props.yeild&&<li title="Yeild"><i className="fa fa-table"></i>  {this.props.yeild}</li>}
                        {this.props.numOfPeople&&<li title="Number of people"><i className="fa fa-users"></i>  {this.props.numOfPeople}</li>}
                        {this.props.times && <li title="Time"><i className="fa fa-clock-o" aria-hidden="true"></i>  {this.props.times}</li>}
                    </ul>
                </div>
            </div>
        </div>
    );
    }
}
export default LatestRecipeItem;