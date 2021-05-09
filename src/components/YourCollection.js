import React from 'react';
import MagicCard from './MagicCard';
import {Card} from 'semantic-ui-react';



const YourCollection = ({ cards}) => {
    <Card.Group itemsPerRow={5}>   
        {cards.map(card => (<MagicCard key={card.number} cardName={card.name}/>))}
    </Card.Group>

    return null;

}

export default YourCollection;