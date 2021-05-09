import React from 'react';
import Search from './Search';
// import YourCollection from './YourCollection';

class CardDatabase extends React.Component {
    
    constructor() {
        super()
        this.state = {
            yourCards: [{}],
            searchTerm: ''
        }
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

    deleteCard = (deleter) => {

        console.log(deleter.target.value)

        fetch(`http://localhost:4000/cards/${deleter.target.value}`, {
         method: 'DELETE',
        })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
    }

    render() {
        console.log(this.state.yourCards)

        return (
            <div>
                <h1>Card Search by name</h1>
                <br/>
                <Search onChange={this.handleSearchChange}/>
                <br/>
                <header className='App-header'>{this.state.yourCards.map((card, index) => (
                        <h3 key={index}>
                            <figure>
                                <img src={card.imageUrl} alt={card.name} className='cardImage'/>
                                <figcaption>{card.name}: {card.type}</figcaption>
                            </figure>
                            <button value={card.id} onClick={this.deleteCard}>Delete</button>
                            </h3> 
                ))}</header>
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
