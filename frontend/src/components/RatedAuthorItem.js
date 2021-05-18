import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
class RatedAuthorItem extends React.Component {
    render() {
        let author = {
        	pathname :"/members/"+this.props.authorID,
            id: this.props.authorID
    	}
        return(
        <div className="author-list__item">
            <Link to={author} className="link">
                <img className="author__img" src={this.props.authorImage} alt={this.props.authorName} title={this.props.authorName}></img>
            </Link>
        </div>
        );
    }
}
export default RatedAuthorItem;