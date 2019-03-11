import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            animals: ['dog', 'cat', 'turtle', 'monkey', 'lion'],
            userInput: '',
            filteredAnimals: []

        };
    }

    handleChange(val) {
        this.setState({userInput: val});
    }

    filterAnimals(userInput) {
        let animals= this.state.animals;
        let filteredAnimals= [];
        for(let i=0; i < animals.length; i++) {
            if (animals[i].includes(userInput)) {
                filteredAnimals.push(animals[i]);
            }
        }
        this.setState({filteredAnimals: filteredAnimals});
    }
    render() {
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span 
                className='puzzleText'>
                Animals: {JSON.stringify(this.state.animals, null, 10)}
                </span>
                <input 
                className='inputLine'
                onChange={(e) => this.handleChange(e.target.value)}
                ></input>
                <button 
                className='confirmationButton'
                onClick={() => this.filterAnimals(this.state.userInput)}
                >Filter</button>
                <span 
                className='resultsBox filterStringRB'>
                Filtered Animals: {JSON.stringify(this.state.filteredAnimals, null, 10)}
                </span>
            </div>
        )
    }
}

export default FilterString;