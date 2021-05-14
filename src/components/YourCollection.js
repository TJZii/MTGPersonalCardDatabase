import React from 'react';
import CardAdder from './CardAdder';


class YourCollection extends React.Component{

    constructor() {
        super()
        this.state = {
            yourCards: [{}],
        }
    }

    deleteCard = (deleter) => {

        console.log(deleter.target.value)

        this.setState({renderTrigger: ''})

        fetch(`http://localhost:4000/cards/${deleter.target.value}`, {
         method: 'DELETE',
        })
        .then(res => res.text())
        .then(res => console.log(res))
    }

    render() {
    return(
        <div>
            <br/>
            <CardAdder addCard={this.addCard}/>
            <img src='https://strategy.channelfireball.com/wp-content/uploads/2020/10/KaladeshRemastered1024.jpg' alt='The Forge'/>
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
