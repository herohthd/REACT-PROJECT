import React from 'react';
import "../styles/style.scss"
// import {Link} from 'react-router-dom';
import QuickFilter from '../components/QuickFilter'
import RatedRecipe from '../components/RatedRecipe'
import LatestRecipe from '../components/LatestRecipe'
import RatedAuthor from '../components/RatedAuthor'
import Favourited from '../components/Favourited'
class Body extends React.Component {
    render() {
      return (
        <div className="App-body">
          <QuickFilter/>
          <RatedRecipe/>
          <LatestRecipe/>
          {/* <RatedAuthor/>
          <Favourited/>  */}
        </div>
      );
    }
  }
  
export default Body;