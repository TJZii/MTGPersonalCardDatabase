import React from 'react';
import {Form} from 'semantic-ui-react';
// import CardsList from './CardsList';

class CardAdder extends React.Component {
    constructor() {
        super()
        this.state = this.getInitialState()
    }

    getInitialState = () => ({ 
        name: '', 
        type: '', 
        imageUrl: '', 
        newCardSearch: '',
        addedCard: [], 
        yourCards: []
    })

    // fetchMeNewCard = (here) => (
    //     fetch(`http://localhost:4000/cards?name=${here.name}`)
    //         .then(resp => resp.json())
    //         .catch(eventZ => console.error(eventZ))
    //         .then((cardBase) => {
    //             console.log(cardBase)
    //             this.setState({
    //                 addedCard: cardBase
    //             })
    //             console.log(this.state.addedCard)
    //         })
    // )

    handleChange = (eventZ, { name, value }) => this.setState({ [name]: value })

    handleSubmit = (eventZ) => {

        eventZ.preventDefault()
        const {name, type, imageUrl} = this.state;
        fetch('http://localhost:4000/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                name,
                type,
                imageUrl
            })
        })
            .then(resp => resp.json())
            .catch(error => console.error(error))
            .then(this.setState({
                newCardSearch: this.state.name
            }))
            .then((cardBase) => {
                console.log(cardBase)
                document.getElementById(`recentCardImg`).src = cardBase.imageUrl;
                document.getElementById(`thisCardDelete`).value = cardBase.id;
                document.getElementById(`recentName`).innerText = `${cardBase.name}`;
                document.getElementById(`recentType`).innerText = `${cardBase.type}`;

                // this.setState({
                //     addedCard: cardBase
                // })
                // console.log(this.state.addedCard)
            })
            // .then(alert(`${this.state.name} has been added!`))
            //.then(this.fetchMeNewCard(this.state))
            
        this.setState({ name: '', type: '', imageUrl: ''})
        
    }

    deleteCard = (deleter) => {
        
        fetch(`http://localhost:4000/cards/${deleter.target.value}`, {
         method: 'DELETE',
        })
        .then(res => res.text())
        .then(res => console.log(res))
        .then(() => {
            document.getElementById(`recentCardImg`).src = '';
            document.getElementById(`thisCardDelete`).value = '';
            document.getElementById(`recentName`).innerText = 'The most recently added Card';
            document.getElementById(`recentType`).innerText = 'will be displayed here.';
        })
    }

    render() {
        const {name, type, imageUrl} = this.state
        // const newestCard = this.state.addedCard;
        const {handleChange, handleSubmit} = this
        return (
            <div>
                <h3>Add a card to your Collection!</h3>
                <p>The type should be formatted as 'Supertype Type - Subtype' (Supertype, the hyphen, and subtype may not be needed depending on your card types)</p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            label='Name'
                            placeholder='Name'
                            name='name'
                            value={name}
                            onChange={handleChange}
                        />
                        <Form.Input
                            fluid
                            label='Type'
                            placeholder='Supertype Type - Subtype'
                            name='type'
                            value={type}
                            onChange={handleChange}
                        />
                        <Form.Input
                            fluid
                            label='ImageURL'
                            placeholder='ImageURL here'
                            name='imageUrl'
                            value={imageUrl}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Button onClick={handleSubmit}>Submit</Form.Button>
                </Form>
                <h3>
                    <header className='App-header'>
                        <h3>
                            <figure>
                                <img src='' alt='' className='cardImage' id='recentCardImg'/>
                                <figcaption><h3 id='recentName'>The most recently added Card</h3> <h3 id='recentType'>will be displayed here.</h3></figcaption>
                            </figure>
                            <button id='thisCardDelete' value='' onClick={this.deleteCard}>Delete Card</button>
                        </h3> 
                    </header>
                {/* <CardsList cards={newestCard} yourCards={this.state.addedCard} deleteCard={this.deleteCard}/> */}
                </h3>
            </div>
        )
    }
}

export default CardAdder;