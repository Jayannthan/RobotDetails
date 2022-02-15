import React, { Component } from "react";

import CardList from '../components/CardList';
import { robots } from '../robots'
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css'

class App extends Component {

    constructor(params) {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users })
            )
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }

    render() {
        const { robots, searchfield } = this.state;

        const fiterrobs = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        if (!robots.length) {
            return <h1 className="f1 tc">LOADING...</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className="f1">ROBOT DETAILS</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={fiterrobs} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;