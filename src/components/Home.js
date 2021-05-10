import React from 'react';

const Home = () => {

    return (
        <div>
            <h1>Welcome to My MTG Card Collection Tracker!</h1>
            <p>This site lets you look at your current collection of cards, (I start you off with 5 from my own collection, including one custom). </p>
            <p>The links to the other pages can be found at the bottom of this page. </p>
            <p>The 'Cards' link will display the cards, as well as a search bar, and the 'Add Card' link will let you add your own!</p>

            <h3>Please make sure you also have entered "json-server --watch -p 4000 db.json" into your command line.</h3>
            <h3>This enables the other two pages and lets them work how they are meant too. Enjoy!</h3>
            <img src="https://images.squarespace-cdn.com/content/v1/5c76bcd990f90464d7970263/1558604299226-ENNZG5QXYFP4F5RZB7DJ/ke17ZwdGBToddI8pDm48kEhRb-mGDiEi0xC18_AR20gUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcsUFtfQr2yxuOzlidL-fYvTwqjsYaERXA-DujV44Tnn4ay3UZP6GxYjP38VLon1Vj/MTG_Ixalan_blogsplash_1200x630.jpg?format=1500w" alt='MTG Landscape Art'/>
        </div>
    )

}

export default Home;