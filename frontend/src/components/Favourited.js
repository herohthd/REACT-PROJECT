import React from 'react';
import "../styles/style.scss"
import {Link} from 'react-router-dom';
import FavouritedItem from './FavouritedItem'
class Favourited extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: undefined,
      dataIsReturned :false
    };
  }
  async componentDidMount(){
    const pathname = 'http://localhost:4000/favouritedRecipes';
    // console.log(pathname);
    const data = await fetch(pathname);
    const latestRecipes = await data.json();
    // console.log(latestRecipes);
    this.setState({
        recipes:latestRecipes,
        dataIsReturned:true
    })  
    // console.log(this.state.recipes)
  }
    render() {
      const dataIsReturned = this.state.dataIsReturned;
      if(!dataIsReturned){
        return <div>LOADING...</div>
      }
      let recipeFilter = {
        pathname :"/recipes/",
        sort:"Most favourited"
      }
      let FavouritedRecipes = this.state.recipes.map(item=><FavouritedItem images={item.image} 
        avatars={item.user.avatar} authorsName={item.user.fullname} 
        foodTitles={item.title} foodDescriptions={item.description} 
        difficulty={item.difficulty} yeild={item.yeild} 
        numOfPeople={item.numOfPeople} times={item.times}
        authorID={item.user._id} recipeID={item._id}/>);
      return(
        <section>
            <div className="container">

              {/* Title */}
                <div className="section-title flex flex-jc-sb flex-ai-c">
                    <h3 className="section-title__name left-side">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        Most Favourited Recipes
                    </h3>
                    <Link to={recipeFilter} className="link btn right-side">All Most Favourited Recipes</Link>
                </div>

               {/* Item */}
                <div className="recipe-list flex flex-jc-sb flex-ai-c">
                   {FavouritedRecipes}
                </div>   
            </div>
        </section>
      );
    }
  }
  
export default Favourited;