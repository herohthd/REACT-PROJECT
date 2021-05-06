import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
class MemberItem extends React.Component {
    render() {
        const memberInfor = {
            pathname: '/members/'+this.props.id,
            avatar:this.props.avatar,
            fullname:this.props.fullname,
            username:this.props.username,
            favouritedRecipes:this.props.favouritedRecipes,
            recipes:this.props.recipes,
            date:this.props.date
        };
        return(
            <div className="col-md-4">
                <div className="white-block member-block">
                    <div className="member-avatar">
                        <img src={this.props.avatar} width="150" height="150" alt="Avatar" className="avatar avatar-150 wp-user-avatar wp-user-avatar-150 photo avatar-default"></img>
                    </div>
                    <div className="member-holder">
                        <Link to={memberInfor} className="blog-title">
                            <h5>
                                {this.props.fullname}
                            </h5>
                        </Link>
                        <ul className="list-unstyled post-meta">
                            <li> Joined in {this.props.date}</li>
                            <li>Wrote: {this.props.recipes.length} recipes</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
  }
  
export default MemberItem;