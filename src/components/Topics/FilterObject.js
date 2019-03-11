import React, { Component } from 'react';

class FilterObject extends Component {
    constructor () {
        super()
        this.state = {
            family: [
                {
                   name: 'Chris Foster',
                   title: 'House Master',
                   hair:'Everywhere',
                },
                {
                   name: 'Kinsley Shahan',
                   age: '12',
                   title: 'Wanwake Yeller',
                   hobbies: 'Being Bossy',
                },
                {
                   name: 'Bayli Simmons',
                   hair: 'Blonde with Booger Streaks',
                   stickyLevel: 'High',
                   age: '8', 
                },
                {
                   name: 'Atlas Foster',
                   hobbies: 'Beating up Sisters',
                   title: 'House Master in Training',
                   stickyLevel: 'Moderate',
                }
            ],
            userInput: '',
            filteredFamily: []
        }
    }
    handleChange(val) {
        this.setState({ userInput: val})
    }

    filterFamily(prop) {
        let family = this.state.family;
        let filteredFamily= [];

        for ( let i = 0; i < family.length; i++) {
            if (family[i].hasOwnProperty(prop)) {
                filteredFamily.push(family[i]);
            }
        }
        this.setState({filteredFamily: filteredFamily});
    }

render() {
    return(
        <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>
        Original: {JSON.stringify(this.state.family, null, 10)}
        </span>
        <input 
        className='inputLine'
        onChange={(e)=> this.handleChange(e.target.value)}
        >
        </input>
        <button 
        className='confirmationButton'
        onClick={() => this.filterFamily(this.state.userInput)}
        >Filter
        </button>
        <span className='resultsBox filterObjectRB'>
        Filtered: {JSON.stringify(this.state.filteredFamily, null, 10)}     
        </span>
       </div>
    )
}
}

export default FilterObject;