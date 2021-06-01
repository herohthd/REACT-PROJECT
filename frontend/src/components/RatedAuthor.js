import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
import RatedAuthorItem from './RatedAuthorItem'

class RatedAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          authors: undefined,
          dataIsReturned :false
        };
    }
    async componentDidMount(){
      const pathname = '/ratedAuthors';
      // console.log(pathname);
      const data = await fetch(pathname);
      const ratedAuthors = await data.json();
      // console.log(latestRecipes);
      this.setState({
          authors:ratedAuthors,
          dataIsReturned:true
      })  
      console.log(this.state.authors)
    }
    render() {
        const dataIsReturned = this.state.dataIsReturned;
        if(!dataIsReturned){
          return <div>LOADING...</div>
        }
        let authors = this.state.authors.map(item=>
                    <RatedAuthorItem key={item._id} authorImage={item.avatar} authorName={item.fullname} authorID={item._id}/>);
        return(
        <section>
            <div className="container">

            {/* Title */}
                <div className="section-title flex flex-jc-sb flex-ai-c">
                    <h3 className="section-title__name left-side">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        Top Rated Authors
                    </h3>
                    <Link to="/members/" className="link btn right-side">All Top Rated Authors</Link>
                </div>

            {/* Item 1*/}
                <div className="author-list flex flex-jc-sb flex-ai-c">
                    {authors};
                </div>
                
            </div>
        </section>
      );
    }
}
export default RatedAuthor;