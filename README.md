# My MTG Card Library App

Magic the Gathering has a great many cards, and I own a ton of them. \
I was trying to think of a way to better organize my library of cards, and decided to go digital.

## How to Open/Start

In order to see or use this Library for yourself, you will first need to clone or download the whole thing from Github.\

Once you have the code, you will need to enter 2 different things into 2 seperate terminals. \
In one terminal you will need to run:
### `json-server --watch -p 4000 db.json`
The reason for this is so that the app can Read, Add to, and Delete from the \
internal API.\

In the second terminal you will need to run:
### `npm start`
This is so that you can actually start the app itself. \
The app should open itself, but if not, you will be able to open it at the address of: \
[HTTP://localhost:3000/](http://localhost:3000)


## Home

Home is just the landing page of my app, and has basic instructions on it to help guide you.

## Cards

The cards tab shows a list of all the cards you added into your collection.\
It also has a search bar to help you look through for specific cards. \

Below each card in the list is a delete button that will allow you to remove the card it is below.

## Add Card

The Add Card page allows users to implement their own collection by typing the name, card type, and providing an image URL.\

In the future I plan to add a preview of a just added card with a delete button, so you can see what you added and remove it if you made a mistake.


## Conclusion
Thank you for checking out my app for React!  This has been Tristan Hawes, thank you for your time.

Below is the initial README I had from using Create React App, many thanks to them!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the file"name"s include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# MTGPersonalCardDatabase
