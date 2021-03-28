import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
import RatedAuthorItem from './RatedAuthorItem'
import GordonRamsay from '../img/GordonRamsay.png'
import ChristineHa from '../img/ChristineHa.png'
import AntonioCarluccio from '../img/AntonioCarluccio.png'
import LukeNguyen from '../img/LukeNguyen.png'
import HungHuynh from '../img/HungHuynh.png'
import Ray from '../img/Ray.png'
class RatedAuthor extends React.Component {
    render() {
        const authors = [
            GordonRamsay,
            ChristineHa,
            AntonioCarluccio,
            LukeNguyen,
            HungHuynh,
            Ray
        ];
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
                <div class="author-list flex flex-jc-sb flex-ai-c">
                    <RatedAuthorItem author={authors[0]}/>
                    <RatedAuthorItem author={authors[1]}/>
                    <RatedAuthorItem author={authors[2]}/>
                    <RatedAuthorItem author={authors[3]}/>
                    <RatedAuthorItem author={authors[4]}/>
                    <RatedAuthorItem author={authors[5]}/>
                </div>
                
            </div>
        </section>
      );
    }
}
export default RatedAuthor;