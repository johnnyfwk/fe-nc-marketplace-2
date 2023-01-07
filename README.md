# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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



# fe-nc-marketplace

Northcoders are creating an online marketplace where we can find new homes for all of the unused items we have lying around, rather than letting them go to waste or just throwing them out. Users will be able to list items they no longer want and other users can order them from each other. We have a lot of <s>old rubbish</s> retro antiques to get rid of so the items are all sorted into categories to make searching though them easier.

## Getting Started

Use [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) to begin your project:

```bash
npx create-react-app .
```

## Getting The Data

We are going to need some data in order to build the user interface for the marketplace. Our react application can then make API requests and display the information on the page. For this purpose the nc devs have built an API for you to retrieve data about the items, categories and users.

A link to this API will be provided in your seminar channels!

## The Desired Solution

Northcoders have hired you and your pair as contractors to deliver a prototype for 'NC Marketplace.' At this stage we have a database of items and users setup with a rudimentary API. This api has endpoints to allow users to retrieve and add items as well manage which items users would like to buy. You need to create a user friendly interface for this API that will allow users to list and buy items from each other. Northcoder's team have provided a list of user stories for the application:

### Minium Viable Product (MVP) Features

Implement these first:
- As a user, I can view a list of available items.
- As a user, I can view a list of items for a particular category.
- As a user, I can order an item.

Once the MVP is implemented work through the rest:
- As a user, I can list an item to sell.
- As a user, I can delete an item listing if I change my mind.
- As a user, I can view which items I have previously ordered.
- As a user, I can give another user kudos to make them feel good about themselves.
- As a user, I can add an item to my basket to order later if I am still browsing.
- As a user, I can view which items I have added to my basket.
- As a user, I can remove items from my basket.
- As a user, I can create a new user profile.

These user stories do not have to be completed in any particular order and the implementation of them is up to you. As always start by planning your app and work on each feature in turn.

As the api is still in development there are some considerations to make:

1. The api has several endpoints and queries it accepts. You do not have to make use of all of them for now and several have been included to allow future expansion. Focus on your user stories and use appropriate endpoints.
2. Users do not need to authenticate at this time. This will be handled later by the NC auth service so your users just need a username to act as for now. We will add an auth layer at a later point.
3. The items can have prices (or set them to zero if you're feeling generous). No actual money will change hands as part of this app and we will add a separate service to handle this at a later point.

### Advanced

Software development is an ongoing process and there's always more you could add to any application. If you're happy with your implementation of the above stories then there are a few extra things members of the team have requested. Implement some of these features or feel free to add your own that you think will bring value to the app.

### Nice to haves

- As a user, I can sort a large list of items to make them easier to view.
- As a user, I can search through a large list of items to make them easier to view.
- As a user, I can create an additional category if there isn't one that suits my item.
- As a user, I can edit my profile information.
- As a user, I can view a preview of my avatar when changing it to see if I like the look of it.
