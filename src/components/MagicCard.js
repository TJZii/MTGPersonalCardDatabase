import React from 'react';
import {Card} from 'semantic-ui-react';


const MagicCard =  ({cards, toggleImage}) => {
    const {name, stats, isClicked} = cards
    const cardArt = isClicked ? stats.imageUrl : 'https://upload.wikimedia.org/wikipedia/en/a/aa/Magic_the_gathering-card_back.jpg'//costToArt(stats.manaCost)
    const cardTypes = stats.find(s => s.name === 'types').value || ''
    const cardSuperTypes = stats.find(s => s.name === 'supertypes').value || ''
    const cardSubTypes = stats.find(s => s.name === 'subtypes').value || ''


    // function costToArt(mana) {
        
    // }


    return (
        <Card>
            <div onClick={() => toggleImage(cards)}>
                <div className='image'>
                    <img src={cardArt} alt='Error!'/>
                </div>
                <div className='content'>
                    <div className='header'>{name}</div>
                </div>
                <div className='extra content'>
                    <span>{cardSuperTypes} {cardTypes} - {cardSubTypes}</span>
                </div>
            </div>
        </Card>
    )

}

export default MagicCard;