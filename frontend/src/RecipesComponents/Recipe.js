import React from 'react';
import Nav from '../components/Nav';
import FixedNav2 from '../components/FixedNav2';
import Footer from '../components/Footer';
import '../styles/style.scss';
import RatedRecipeItem from '../components/RatedRecipeItem';

class Recipe extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            recipes: [],
                category: "",
                cuisine:"",
                sort:"",
                ingredients:"",
                keyword:"",
                dataIsReturned :false
        }
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeCuisine = this.handleChangeCuisine.bind(this);
        this.handleChangeSort = this.handleChangeSort.bind(this);
        this.handlleChangeIngredients = this.handlleChangeIngredients.bind(this);
        this.handleChangeKeyword = this.handleChangeKeyword.bind(this);

    }
    async componentDidMount(){
        const pathname = 'http://localhost:4000/recipes/';
        const data = await fetch(pathname);
        const recipes = await data.json();
        this.setState({
            recipes:recipes,
            dataIsReturned:true
        })  
    }
    handleChangeCategory(event){
        this.setState({category:event.target.value })
    }
    handleChangeCuisine(event){
        this.setState({cuisine:event.target.value })
    }
    handleChangeSort(event){
        this.setState({sort:event.target.value })
    }
    handlleChangeIngredients(event){
        this.setState({ingredients:event.target.value })
    }
    handleChangeKeyword(event){
        this.setState({keyword:event.target.value })
    }
    getUnique(arr, comp) {

        // store the comparison  values in array
        const unique =  arr.map(e => e[comp])

        // store the indexes of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)

        // eliminate the false indexes & return unique objects
        .filter((e) => arr[e]).map(e => arr[e]);

        return unique;
    }
    
    render() {
        const recipes = this.state.recipes;
        const dataIsReturned = this.state.dataIsReturned;
        if(!dataIsReturned){
            return <div>LOADING...</div>
        }
        const uniqueCategory = this.getUnique(recipes,"category");
        const uniqueCuisine = this.getUnique(recipes,"cuisine");
        const cuisine = this.state.cuisine;
        let category= "";
        let sort = "";
        
        if(!this.state.category && this.props.location.category){
            category = this.props.location.category;
        } else{
            category = this.state.category;
        }

        if(!this.state.sort && this.props.location.sort){
            sort = this.props.location.sort;
        } else{
            sort = this.state.sort;
        }
        let ingredients = this.state.ingredients;
        let keyword = this.state.keyword;
        console.log(category,cuisine,sort,ingredients,keyword);


        // FILTER CUISINE AND CATEGORY
        let filterRecipes = recipes.filter(function(recipe) {
            // console.log(recipe.category)
            if(cuisine && category)
                return recipe.category === category && recipe.cuisine === cuisine
            else if(!cuisine && category)
                return recipe.category === category
            else if(cuisine && !category)
                return recipe.cuisine === cuisine
            else return false  
        });

        //FILTER INGREDIENTS
        if(filterRecipes.length !== 0){
            if(ingredients){
                ingredients = ingredients.split(" ");
                console.log(ingredients)
                filterRecipes = filterRecipes.filter(recipe =>{
                    let mark = 1;
                    for(let item of ingredients){
                        if(!recipe.ingredients.includes(item))  {
                            mark = 0;
                            break;
                        }
                    }
                    if(mark) return true;
                    return false;
                })
            }
        }
        else{
            if(ingredients){
                ingredients = ingredients.split(" ");
                console.log(ingredients)
                filterRecipes = recipes.filter(recipe =>{
                    let mark = 1;
                    for(let item of ingredients){
                        if(!recipe.ingredients.includes(item))  {
                            mark = 0;
                            break;
                        }
                    }
                    if(mark) return true;
                    return false;
                })
            }
        }
        
        //FILTER KEYWORD
        if(filterRecipes.length !== 0){
            if(keyword){
                keyword = keyword.split(" ");
                console.log(keyword)
                filterRecipes = filterRecipes.filter(recipe =>{
                    let mark = 1;
                    for(let item of keyword){
                        if(!recipe.title.includes(item))  {
                            mark = 0;
                            break;
                        }
                    }
                    if(mark) return true;
                    return false;
                })
            }
        }
        else{
            if(keyword){
                keyword = keyword.split(" ");
                console.log(keyword)
                filterRecipes = recipes.filter(recipe =>{
                    let mark = 1;
                    for(let item of keyword){
                        if(!recipe.title.includes(item))  {
                            mark = 0;
                            break;
                        }
                    }
                    if(mark) return true;
                    return false;
                })
            }
        }

        // FILTER SORT
        if(filterRecipes.length !== 0){
            if(sort){
                const compareTopRated = sort.localeCompare("Top rated");
                const compareMostFavourited = sort.localeCompare("Most favourited");
                const compareLatest = sort.localeCompare("Latest");
                if(compareTopRated === 0) {
                    filterRecipes = filterRecipes.sort((a, b) => b.numOfLike - a.numOfLike)
                } else if(compareMostFavourited === 0) {
                    filterRecipes = filterRecipes.sort((a, b) => b.numOfFavourited - a.numOfFavourited)
                } else {
                    filterRecipes = filterRecipes.sort((a, b) => new Date(b.date) - new Date(a.date))
                }
            }
        }
        else {
            if(sort){
                const compareTopRated = sort.localeCompare("Top rated");
                const compareMostFavourited = sort.localeCompare("Most favourited");
                const compareLatest = sort.localeCompare("Latest");
                // console.log(compareLatest,compareTopRated,compareMostFavourited);
                if(compareTopRated === 0) {
                    filterRecipes = recipes.sort((a, b) => b.numOfLike - a.numOfLike)
                } else if(compareMostFavourited === 0) {
                    filterRecipes = recipes.sort((a, b) => b.numOfFavourited - a.numOfFavourited)
                } else {
                    filterRecipes = recipes.sort((a, b) => new Date(b.date) - new Date(a.date))
                }
            }
            else{
                filterRecipes = [];
            }
        }

        console.log(filterRecipes);
        return(
            <section className="recipe-section">
                <Nav/>
                <FixedNav2/>
                <div className="container">
                    <div className="search">
                        <div className="search__content">
                            <form className="flex" onSubmit={this.handleSubmit}>
                                <div className="search__group flex">
                                    <label for="recipe-category">
                                        Recipe Category
                                    </label>
                                    <select className="recipe-select" value={this.state.category} onChange={this.handleChangeCategory}>
                                        <option selected> - Select - </option>
                                        {uniqueCategory.map(recipe => 
                                            <option key={recipe._id} value={recipe.category}>
                                                {recipe.category}
                                            </option>
                                        )}
                                    </select>
                                </div>
                                <div className="search__group flex">
                                    <label for="recipe-category">
                                        Recipe Cuisine
                                    </label>
                                    <select className="recipe-select" value={this.state.cuisine} onChange={this.handleChangeCuisine}>
                                        <option selected> - Select - </option>
                                        {uniqueCuisine.map(recipe => 
                                            <option key={recipe._id} value={recipe.cuisine}>
                                                {recipe.cuisine}
                                            </option>
                                        )}
                                    </select>
                                </div>
                                <div className="search__group flex">
                                    <label for="recipe-category">
                                        Sort recipes
                                    </label>
                                    <select className="recipe-select" value={this.state.sort} onChange={this.handleChangeSort}>
                                        <option selected> - Select - </option>
                                        <option value="Top rated">
                                            Top rated
                                        </option>
                                        <option value="Latest">
                                            Latest
                                        </option>
                                        <option value="Most favourited">
                                            Most favourited
                                        </option>
                                    </select>
                                </div>
                                <div className="search__group flex">
                                    <label for="ingredients">
                                        Ingredients
                                    </label>
                                    <input type="text" name="ingredients" onChange={this.handlleChangeIngredients}/>
                                </div>
                                <div className="search__group flex">
                                    <label for="keyword">
                                        Keyword
                                    </label>
                                    <input type="text" name="keyword" onChange={this.handleChangeKeyword}/>
                                </div>
                                
                            </form>
                            </div>
                        </div>
                    <div className="recipe-list flex flex-ai-c">
                    {
                    (filterRecipes.length !== 0) ?
                        filterRecipes.map(recipe => 
                            <RatedRecipeItem recipeID={recipe._id} images={recipe.image} 
                            authorID={recipe.user._id} date={recipe.date}
                            avatars={recipe.user.avatar} authorsName={recipe.user.fullname} 
                            foodTitles={recipe.title} foodDescriptions={recipe.description} 
                            difficulty={recipe.difficulty} yeild={recipe.yeild} 
                            numOfPeople={recipe.numOfPeople} times={recipe.times}
                            cuisine={recipe.cuisine} category={recipe.category}
                            ingredients={recipe.ingredients} steps={recipe.steps}/>
                        )
                        :( (category !== "" || cuisine !== "" || sort !== "") ? <div>There is no recipe you want to find.</div>
                            :   recipes.map(recipe => 
                                <RatedRecipeItem recipeID={recipe._id} images={recipe.image} 
                                authorID={recipe.user._id} date={recipe.date}
                                avatars={recipe.user.avatar} authorsName={recipe.user.fullname} 
                                foodTitles={recipe.title} foodDescriptions={recipe.description} 
                                difficulty={recipe.difficulty} yeild={recipe.yeild} 
                                numOfPeople={recipe.numOfPeople} times={recipe.times}
                                cuisine={recipe.cuisine} category={recipe.category}
                                ingredients={recipe.ingredients} steps={recipe.steps}/>
                                )
                        )
                    }
                    </div>
                </div>
                <Footer/>
            </section>
        )
    }
}

export default Recipe;