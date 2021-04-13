import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
class FavouritedItem extends React.Component {
    render() {
    return(
        <div className="favourited-list__item">
            <Link to="/" className="link">
                <div className="img-container">
                <img src={this.props.images} alt="{this.props.images}"></img>
                </div>
            </Link>
            <div className="favourited-description">
                <Link to="/" className="link"><h4>{this.props.foodTitles}</h4></Link>
                <p>{this.props.foodDescriptions}</p>
            </div>
            <div className="favourited-footer">
                <div className="favourited-footer__content">
                    <ul>
                        <li><img src={this.props.avatars} alt={this.props.authorsName}></img>
                                By              
                            <Link to="/" className="link">  {this.props.authorsName}</Link></li>
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
export default FavouritedItem;