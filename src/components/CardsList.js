import React from 'react'

const CardsList = ({cards, deleteCard}) => (
    <header className='App-header'>{cards.map((card, index) => (
        <h3 key={index}>
            <figure>
                <img src={card.imageUrl} alt={card.name} className='cardImage'/>
                <figcaption><h3>{card.name}</h3> {card.type}</figcaption>
            </figure>
            <button value={card.id} onClick={deleteCard}>Delete</button>
        </h3> 
))}</header>
);

export default CardsList;