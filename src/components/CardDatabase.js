import React from 'react';
import CardAdder from './CardAdder';
import Search from './Search';
import Display from './Display';
// import YourCollection from './YourCollection';

const getCards = () => {
    fetch('http://localhost:4000/cards')
    .then(resp => resp.json())
    .catch(error => console.error('Oops', error))
    .then(resp => console.log(resp))
}
const getCardstwo = () => {
    fetch('https://raw.githubusercontent.com/sarahjting/arknights-gql/master/data/json/characters.json')
    .then(resp => resp.json())
    .catch(error => console.error('Oops', error))
    .then(resp => console.log(JSON.stringify(resp)))
}

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


    // displayInfo = (datatype) => {
    //     fetch('http://localhost:4000/cards')
    //         .then(resp => resp.json())
    //         .then((cardBase) => {
    //             console.log(cardBase);
    //             let newData= cardBase[0][datatype]
    //             console.log(newData)

    //             return newData;
    //         })
    //         .catch(eventZ => console.error(eventZ))

    // }

    render() {
        
        // const selectedCard = this.state.yourCards.filter(c => c.name.includes(this.state.searchTerm))

        // console.log(this.cardBase)
        // cardName=this.displayInfo('name');
        // console.log('hello')
        console.log(this.state.yourCards)

        return (
            <div>
                <button onClick={getCards}>one</button>
                <button onClick={getCardstwo}>two</button>
                <h1>Card Search by name</h1>
                <br/>
                <CardAdder addCard={this.addCard}/>
                <br/>
                <Search onChange={this.handleSearchChange}/>
                <br/>
                {/* <YourCollection cards={selectedCard}/> */}
                <header className='App-header'>{this.state.yourCards[0].name}-{this.state.yourCards[0].type}</header>
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
