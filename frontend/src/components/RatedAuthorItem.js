import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
class RatedAuthorItem extends React.Component {
    render() {
        return(
        <div className="author-list__item">
            <Link to="/" className="link">
                <img className="author__img" src={this.props.author} alt="{this.props.author}"></img>
            </Link>
        </div>
        );
    }
}
export default RatedAuthorItem;