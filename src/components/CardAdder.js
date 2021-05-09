import React from 'react';
import {Form} from 'semantic-ui-react';

class CardAdder extends React.Component {
    constructor() {
        super()
        this.state = this.getInitialState()
    }

    getInitialState = () => ({ name: '', supertypes: '', types: '', subtypes: '', imageUrl: ''})

    handleChange = (eventZ, { name, value }) => this.setState({ [name]: value })

    handleSubmit = (eventZ) => {
        eventZ.preventDefault()
        const {name, supertypes, types, subtypes, imageUrl} = this.state
        fetch('http://localhost:3002/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                name,
                stats: [
                    {
                        value: supertypes,
                        name: 'supertypes'
                    },
                    {
                        value: types,
                        name: 'types'
                    },
                    {
                        value: subtypes,
                        name: 'subtypes'
                    }
                ],
                imageUrl
            })
        })
            .then(resp => resp.json())
            .then(cards => this.props.addCard(cards))
            .catch(error => console.error(error))
        this.setState(this.getInitialState())
    }

    render() {
        const {name, supertypes, types, subtypes} = this.state
        const {handleChange, handleSubmit} = this
        return (
            <div>
                <h3>Add a card to your Collection!</h3>
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
                            label='Supertypes'
                            placeholder='Supertypes'
                            name='supertypes'
                            value={supertypes}
                            onChange={handleChange}
                        />
                        <Form.Input
                            fluid
                            label='Types'
                            placeholder='Types'
                            name='types'
                            value={types}
                            onChange={handleChange}
                        />
                        <Form.Input
                            fluid
                            label='Subtypes'
                            placeholder='Subtypes'
                            name='subtypes'
                            value={subtypes}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Button onClick={handleSubmit}>Submit</Form.Button>
                </Form>
            </div>
        )
    }

}

export default CardAdder;