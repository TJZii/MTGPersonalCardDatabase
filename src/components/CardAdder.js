import React from 'react';
import {Form} from 'semantic-ui-react';

class CardAdder extends React.Component {
    constructor() {
        super()
        this.state = this.getInitialState()
    }

    getInitialState = () => ({ name: '', type: '', imageUrl: '', addedCard: ''})

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
            alert(`${this.state.name} has been added! To see your card, please return to the 'Cards' tab.`);
        this.setState(this.getInitialState())
        
    }

    render() {
        const {name, type, imageUrl} = this.state
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
                    <figure>
                        <img src='' alt='' id='newCard'/>
                        <figcaption id='newCap'></figcaption>
                    </figure>
                </h3>
            </div>
        )
    }

}

export default CardAdder;