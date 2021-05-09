import React from 'react';
import YourCollection from './YourCollection';
import CardAdder from './CardAdder';
import Search from './Search';

class CardDatabase extends React.Component {

    state = {
        yourCollection: [],
        searchTerm: ''
    }

    componentDidMount() {
        fetch('http://localhost:3000/cards')
          .then(resp => resp.json())
          .then(yourCollection => this.setState({yourCollection: yourCollection}))
          .catch(eventZ => console.error(eventZ))
    }

    handleSearchChange = (event) => {
        this.setState({searchTerm: event.target.value})
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

    render() {
        const selectedCard = this.state.yourCollection.filter(c => c.name.includes(this.state.searchTerm))
        return (
            <div>
                <h1>Card Search by name</h1>
                <br/>
                <CardAdder addCard={this.addCard}/>
                <br/>
                <Search onChange={this.handleSearchChange}/>
                <br/>
                <YourCollection cards={selectedCard} toggleImage={this.toggleImage}/>
            </div>
        )
    }
}

export default CardDatabase;
