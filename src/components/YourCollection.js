import React from 'react';
import MagicCard from './MagicCard';
import {Card} from 'semantic-ui-react';

const YourCollection = ({ cards, toggleImage}) => {
    <Card.Group itemsPerRow={5}>
        {cards.map(cards => (<MagicCard key={cards.number} cardName={cards.name} toggleImage={toggleImage}/>))}
    </Card.Group>
}

export default YourCollection;