import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import FixedNav from '../components/FixedNav'
import axios from 'axios'
import '../styles/_Submit.scss'
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            image: '',
            description: '',
            ingredients: '',
            steps: '',
            difficulty: '',
            yeild: '',
            numOfPeople: '',
            times: '',
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.changeIngredients = this.changeIngredients.bind(this);
        this.changeSteps = this.changeSteps.bind(this);
        this.changeDifficulty = this.changeDifficulty.bind(this);
        this.changeYeild = this.changeYeild.bind(this);
        this.changeNumOfPeople = this.changeNumOfPeople.bind(this);
        this.changeTimes = this.changeTimes.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    changeTitle(event){
        this.setState({
            title:event.target.value
        })
    }
    changeImage(event){
        this.setState({
            image:event.target.value
        })
    }
    changeDescription(event){
        this.setState({
            description:event.target.value
        })
    }
    changeIngredients(event){
        this.setState({
            ingredients:event.target.value
        })
    }
    changeSteps(event){
        this.setState({
            steps:event.target.value
        })
    }
    changeDifficulty(event){
        this.setState({
            difficulty:event.target.value
        })
    }
    changeYeild(event){
        this.setState({
            yeild:event.target.value
        })
    }
    changeNumOfPeople(event){
        this.setState({
            numOfPeople:event.target.value
        })
    }
    changeTimes(event){
        this.setState({
            times:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault();
        
        const registered = {
            title: this.state.title,
            image: this.state.image,
            description: this.state.description,
            ingredients: this.state.ingredients,
            steps: this.state.steps,
            difficulty: this.state.difficulty,
            yeild: this.state.yeild,
            numOfPeople: this.state.numOfPeople,
            times: this.state.times
        }

        axios.post('http://localhost:4000/submitRecipes', registered)
        .then(function (response) {
            console.log(response);
            if(response.data.status === 'error'){
                alert(response.data.error);
            }
            else alert('Register successfully');
          })
          .catch(function (error) {
            console.log(error);
          });
        // window.location = '/';
        this.setState({
            title:'',
            image:'',
            description:'',
            ingredients:'',
            steps:'',
            difficulty:'',
            yeild:'',
            numOfPeople:'',
            times:''
        })
    }
    render(){
        return(
            <section className="submit-section">
                <Nav/>
                <FixedNav/>
                <div className="form-container">
                    <div className="form-outer">

                        {/* Submit recipes */}
                        <div className="form flex">
                            <h1 className="form-title">Submit Recipe</h1>
                            <form id="submit-form" className="left-side"onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label for="title">Title</label>
                                    <input type="text"
                                    onChange={this.changeTitle}
                                    value={this.state.title}
                                    required></input>
                                </div>

                                <div className="form-group flex">
                                    <label for="image">Image</label>
                                    <input type="text"
                                    onChange={this.changeImage}
                                    value={this.state.image}
                                    required></input>
                                </div>

                                <div className="form-group">
                                    <h4 className="form-group__title">Description</h4>
                                    <textarea name="description" rows="8"
                                    form="submit-form" required>
                                    </textarea>
                                </div>

                                <div className="form-group">
                                    <h4 className="form-group__title">ingredients</h4>
                                    <textarea name="ingredients" rows="8"
                                    form="submit-form" required>
                                    </textarea>
                                </div>

                                <div className="form-group">
                                    <h4 className="form-group__title">Steps</h4>
                                    <textarea name="Steps" rows="8"
                                    form="submit-form" required>
                                    </textarea>
                                </div>

                                <div className="form-group">
                                    <label for="description">Difficulty</label>
                                    <input type="text"
                                    onChange={this.changeDifficulty}
                                    value={this.state.difficulty}
                                    required></input>
                                </div>

                                <div className="form-group">
                                    <label for="description">Number of people</label>
                                    <input type="text"
                                    onChange={this.changeNumOfPeople}
                                    value={this.state.numOfPeople}
                                    required></input>
                                </div>

                                <div className="form-group">
                                    <label for="description">Times</label>
                                    <input type="text"
                                    onChange={this.changeTimes}
                                    value={this.state.times}
                                    required></input>
                                </div>
    
                                <input type="submit" className="btn" value="Submit"></input>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        );
    }
}
export default Login;