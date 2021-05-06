import React, {useEffect,useState} from 'react';
import Nav from '../components/Nav';
import FixedNav2 from '../components/FixedNav2';
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
        items.forEach(item => {
            const newDate = new Date(item.date);
            // console.log(newDate);
            const day = newDate.getDate();
            const month = newDate.getMonth()+1;
            const year = newDate.getFullYear();
            console.log(day,month,year);
            item.date = day+'-'+month+'-'+year;
            console.log(item.date);
        });
        setItems(items);
    };

    return(
        <section className="recipe-section">
            <Nav/>
            <FixedNav2/>
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
                    ingredients={item.ingredients} steps={item.steps}
                    date={item.date}/>
                )
                }
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default Recipe;