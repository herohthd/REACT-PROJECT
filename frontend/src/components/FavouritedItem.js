import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
class FavouritedItem extends React.Component {
    render() {
    return(
        <div class="favourited-list__item">
            <Link to="/" class="link">
                <div class="img-container">
                <img src={this.props.images} alt="{this.props.images}"></img>
                </div>
            </Link>
            <div class="favourited-description">
                <Link to="/" class="link"><h4>{this.props.foodTitles}</h4></Link>
                <p>{this.props.foodDescriptions}</p>
            </div>
            <div class="favourited-footer">
                <div class="favourited-footer__content">
                    <ul>
                        <li><img src={this.props.avatars} alt={this.props.authorsName}></img>
                                By              
                            <Link to="/" class="link">  {this.props.authorsName}</Link></li>
                        <li>{this.props.difficulty}</li>
                        <li><i class="fa fa-table"></i>  {this.props.yeild}</li>
                        <li><i class="fa fa-users"></i>  {this.props.numOfPeople}</li>
                        {/* <li><i class="fa fa-clock-o" aria-hidden="true"></i>  30 min</li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
    }
}
export default FavouritedItem;