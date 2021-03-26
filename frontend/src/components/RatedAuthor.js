import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
import RatedAuthorItem from './RatedAuthorItem'
class RatedAuthor extends React.Component {
    render() {
      return(
        <section>
            <div class="container">

              {/* Title */}
                <div class="section-title flex flex-jc-sb flex-ai-c">
                    <h3 class="section-title__name left-side">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        Top Rated Authors
                    </h3>
                    <Link to="/" class="link btn right-side">All Top Rated Authors</Link>
                </div>

               {/* Item 1*/}
                
                
            </div>
        </section>
      );
    }
}
export default RatedAuthor;