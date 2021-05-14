import React from 'react';
import Search from './Search';
import CardsList from './CardsList';
// import YourCollection from './YourCollection';

class CardDatabase extends React.Component {
    
    constructor() {
        super()
        this.state = {
            yourCards: [],
            searchTerm: '',
            renderTrigger: ''
        }
    }

    handleSearchChange = (event) => {
        this.setState({searchTerm: event.target.value})
        console.log(`${this.state.searchTerm}`);
    }

    deleteCard = (deleter) => {
        
        fetch(`http://localhost:4000/cards/${deleter.target.value}`, {
         method: 'DELETE',
        })
        .then(res => res.text())
        .then(res => console.log(res))
        console.log(this.state)
        this.setState({yourCards: this.state.yourCards.filter(card => card.id !== deleter.target.value)})
    }

    render() {

        const desiredCard = this.state.yourCards.filter(p =>
            p.name.includes(this.state.searchTerm) 
        )

        return (
            <div>
                <h1>Card Search by name</h1>
                <br/>
                <Search onChange={this.handleSearchChange}/>
                <br/>
                <CardsList cards={desiredCard} yourCards={this.state.yourCards} deleteCard={this.deleteCard}/>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://localhost:4000/cards')
          .then(resp => resp.json())
          .catch(eventZ => console.error(eventZ))
          .then((cardBase) => {
              console.log(cardBase)
              this.setState({
                  yourCards: cardBase
              })
              console.log(this.state.yourCards)
            })
          
    }
}

export default CardDatabase;
