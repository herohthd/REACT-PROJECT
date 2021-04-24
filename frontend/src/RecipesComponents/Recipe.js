import React, {useEffect,useState} from 'react';
import Nav from '../components/Nav';
import FixedNav from '../components/FixedNav';
import Footer from '../components/Footer';
import '../styles/style.scss';
import RatedRecipeItem from '../components/RatedRecipeItem';
function Recipe(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('http://localhost:4000/recipes');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section className="recipe-section">
            <Nav/>
            <FixedNav/>
            <div className="container">
                <div className="recipe-list flex flex-jc-sb flex-ai-c">
                {
                items.map(item => 
                    <RatedRecipeItem id={item._id} images={item.image} 
                    avatars={item.user.avatar} authorsName={item.user.fullname} 
                    foodTitles={item.title} foodDescriptions={item.description} 
                    difficulty={item.difficulty} yeild={item.yeild} 
                    numOfPeople={item.numOfPeople} times={item.times}
                    cuisine={item.cuisine} category={item.category}
                    ingredients={item.ingredients} steps={item.steps}/>
                )
                }
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default Recipe;