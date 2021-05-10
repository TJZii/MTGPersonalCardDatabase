import React from 'react';
import Search from './Search';
import CardsList from './CardsList';
// import YourCollection from './YourCollection';

class CardDatabase extends React.Component {
    
    constructor() {
        super()
        this.state = {
            yourCards: [{}],
            searchTerm: '',
            renderTrigger: ''
        }
    }

    handleSearchChange = (event) => {
        this.setState({searchTerm: event.target.value})
        console.log(`${this.state.searchTerm}`);
    }

    toggleImage = (cards) => {
        const colle = this.state.yourCollection
        const i = colle.indexOf(cards)
        this.setState({
            yourCollection: [
                ...colle.slice(0, i),
                {...cards, isClicked: !cards.isClicked},
                colle.slice(i + 1)
            ]
        })
    }

    addCard = (cards) => {
        this.setState({yourCollection: [...this.state.yourCollection, cards]})
    }

    deleteCard = (deleter) => {

        window.location.reload(false);

        this.setState({renderTrigger: ''})

        fetch(`http://localhost:4000/cards/${deleter.target.value}`, {
         method: 'DELETE',
        })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
    }

    render() {

        const desiredCard = this.state.yourCards.filter(p =>
            p.name && p.name.includes(this.state.searchTerm) 
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
              console.log('hi')
            })
          
    }
}

export default CardDatabase;
