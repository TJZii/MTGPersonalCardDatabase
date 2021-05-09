import React from 'react';
import CardAdder from './CardAdder';

class YourCollection extends React.Component{

    render() {
    return(
        <div>
            <br/>
            <CardAdder addCard={this.addCard}/>
        </div>
        );
    }
}
    


export default YourCollection;
