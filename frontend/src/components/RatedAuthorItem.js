import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
class RatedAuthorItem extends React.Component {
    render() {
        return(
        <div class="author-list__item">
            <Link to="/" class="link">
                <img class="author__img" src={this.props.author} alt="{this.props.author}"></img>
            </Link>
        </div>
        );
    }
}
export default RatedAuthorItem;