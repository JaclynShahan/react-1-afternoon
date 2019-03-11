import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''

        }
    }
        handleChange(val) {
            this.setState({userInput: val});
        }
        assignEvenAndOdds(userInput) {
            let tempArr= userInput.split(',');
            let evens = [];
            let odds = [];

            for (let i=0; i < tempArr.length; i++) {
                if (tempArr[i] % 2 === 0) {
                    evens.push(parseInt(tempArr[i], 10));
                } else {
                    odds.push(parseInt(tempArr[i],10));
                }
            }
            this.setState({evenArray: evens, oddArray: odds});
        }
    
    render() {
        return(
            <div className='puzzleBox evenAndOddPB'>
            <h4>Evens and Odds</h4>
            <input 
            className='inputLine'
            onChange={(e)=> this.handleChange(e.target.value)}
            ></input>
            <button 
            className='confirmationButton'
            onClick={()=> {this.assignEvenAndOdds(this.state.userInput)}}
            >Split</button>
            <span 
            className='resultsBox'
            value={this.state.evenArray}
            >Evens: {JSON.stringify(this.state.evenArray)}</span>
            <span 
            className='resultsBox'
            value={this.state.oddArray}
            >Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}
export default EvenAndOdd;