import { Component } from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import './App.css';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield:'',
        }
    };

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState({robots: user}));
    };

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
             
    };

    render(){
        const {robots,searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.username.toLowerCase().includes(searchfield.toLowerCase())
        })
      return !robots.length ?
             <h1>Loading</h1>:
           (
                <div>
                    <h1 className="f1">RoboFriends</h1>
                    <Searchbox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots = {filteredRobots} /> 
                    </Scroll>
                   
                </div>
            )  
        }
    
}



export default App;