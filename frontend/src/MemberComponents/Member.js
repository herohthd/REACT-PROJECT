import React, {useEffect,useState} from 'react'
import Nav from '../components/Nav.js'
import Footer from '../components/Footer'
import FixedNav2 from '../components/FixedNav2'
import MemberItem from './MemberItem'
// import AuthService from "../AuthComponents/authService"
import '../styles/style.scss';

const Members = () => {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('http://localhost:4000/members');
        const items = await data.json();
        console.log(items);
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

    return <div className="authors">
        <Nav/>
        <FixedNav2/>
        <section className="author-section">
            <div className="container">
                <div className="section-title">
                    <h1 className="text-center h3-size">
                        <i className="fa fa-users"></i>
                        Chefs In Our Kitchen
                    </h1>
                </div>
                <div className="row">
                {
                items.map(item => 
                    <MemberItem id={item._id} avatar={item.avatar} 
                    fullname={item.fullname} username={item.username} 
                    date={item.date} favouritedRecipes={item.favouritedRecipes}
                    recipes={item.recipes}/>
                )
                }
                </div>
            </div>
        </section>
        <Footer/>
    </div>
}

export default Members;