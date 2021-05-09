import React from 'react';
import CardAdder from './CardAdder';

class YourCollection extends React.Component{

    constructor() {
        super()
        this.state = {
            yourCards: [{}],
        }
    }

    render() {
    return(
        <div>
            <br/>
            <CardAdder addCard={this.addCard}/>
            <header className='App-header'>{this.state.yourCards.map((card, index) => (
                        <h3 key={index}>
                            <figure>
                                <img src={card.imageUrl} alt={card.name} className='cardImage'/>
                                <figcaption>{card.name}: {card.type}</figcaption>
                            </figure>
                        </h3> 
                ))}</header>
        </div>
        );
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
    


export default YourCollection;
