# Emaily App
Emaily is a fullstack web app that enables companies to get customer feedback via simple 'yes/no' email surveys whose result counts are recorded and summarized in the app's main dashboard.  Emaily users add credits to their account via credit card payments which enables sending of user defined email survey campaigns to their provided list of customer email addresses.  Emaily's implementation employs the 'MERN' tech stack which comprises MongoDB, Express Server, React JS (client), and Node JS.  The app is hosted on Heroku.

To deliver the full scope of user features, Emaily integrates with 3rd party services including Google's OAuth API for authentication, Stripe's payments API for basic payments, and Twilio's SendGrid email API for actual sending of email survey campaigns.  From a design standpoint, we leverage [Materialize CSS](https://materializecss.com/) for styling the app - this saves time and ensures the project's primary focus is practicing core fullstack concepts.  Minor additional styling and customization was added by me for improved aesthetics and usability.

This app is the primary project for Stephen Grider's Udemy course, [Node with React: Fullstack Web Development](https://www.udemy.com/course/node-with-react-fullstack-web-development/).  The project provides hands on practice with core MERN fullstack concepts and technologies including the following:

- Server Side Architecture with Express and Heroku deployment
- Implementing Google OAuth authentication
- Implementing MongoDB
- Mastering deployment techniques for prod and dev environments
- Handling Payments with Stripe API
- Creating and Sending emails from a backend server
- Handling Webhook Data
- Integrating the front end React client

## Results - Publicly hosted Site
The Emaily web app is publicly hosted [here](https://calm-fjord-85714.herokuapp.com/).  
Note, in order to add user credits when navigating the demo web app, you can use the test credit card number "4242 4242 4242 4242" plus any 3-4 digit CVC security code with future expiration date.  

## Results - Demo
Demos of core functionality are as follows.  

#### Google OAuth authentication and Stripe credit card payments demo:  
![Emaily App demo 1](emaily_demo_1.gif)

#### Creation of new email survey campaign demo:  
![Emaily App demo 2](emaily_demo_2.gif)


## Tools Required
Tools required to develop and run this project are as follows: 
- code editor (e.g. [Atom](https://atom.io/), [MS Visual Studio](https://code.visualstudio.com/) etc.)
- web browser (e.g. Chrome/Safari/Firefox - preferably Chrome because of all the built-in dev tools)
- Node.js
- 3rd party Node.js packages as listed in the server and client package.json files (further details on tools, loaders and plugins listed in next section)
- free developers accounts from [Stripe](https://stripe.com/docs) for handling (test) payments, [Heroku](https://www.heroku.com/) for cloud hosting, [MongoDB](https://www.mongodb.com/) for backend database hosting, [sendGrid](https://sendgrid.com/) for sending of email campaigns, and Google for OAuth authentication (e.g. [latest developers link](https://developers.google.com/identity/protocols/oauth2).  

## Installation & Configuration
The following tools, loaders and plugins were installed for this project.

### Server Side:
The following commands should be run in the top level 'server' folder:
- nodemon for hot reloading in dev:\
  npm install --save nodemon
- [Mongoose](https://mongoosejs.com/) for mongodb object modeling (e.g. schema creation) with node.js:\
  npm install --save mongoose
- (Passport)(http://www.passportjs.org/) and Passport google oAuth module:\
  npm install --save passport passport-google-oauth20
- cookie-session to manage cookies for authentication:\
  npm install --save cookie-session
- path-parser for parsing URL parameters (from sendGrid):\
  npm install --save path-parser
- sendGrid for sending of email campaigns and receiving webhook data on customer click-throughs:\
  npm install --save sendgrid
- stripe api for handling payments (we only do test payments using dedicated test credit card numbers):\
  npm install --save stripe
- express web app server framework:\
  npm install --save express
- concurrently for running both react frontend server and express backend server in dev:\
  npm install --save concurrently
- ngrok tunnel for testing webhooks on the local dev environment (e.g. at localhost:5000), run following in project's top level 'server' folder:\
  npx ngrok http 5000  
(Note: npx on the first line is not a typo — it’s a package runner tool that comes with npm 5.2+.) 
- lodash utility library of methods for simplified processing of sendGrid's webhook array data:\
  npm install --save lodash 
  
### Client Side
The following commands should be run in the 'client' folder:
- Use of [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) Tool Chain to simplify the React client set up.  This toolchain is preconfigured and bundled with standard tools including the Webpack bundler and Babel compiler:\
  npx create-react-app emaily  
(Note: npx on the first line is not a typo — it’s a package runner tool that comes with npm 5.2+.)

Besides the aforementioned packages that come pre-installed when running create-react-app, additional installed plugins are as follows.  
- react-router-dom for web app client side routing:\
  npm install --save react-router-dom
- Redux and React-Redux for client side state management:\
  npm install --save redux react-redux
- Redux-thunk for handling asynchronous callbacks in our redux action creators:\
  npm install --save redux-thunk
- Axios for handling REST APIs with the backend server:\
  npm install --save axios
- Materialize css for client styling:\
  npm install --save materialize-css
- proxy middleware for toggling the OAuth redirect between Emaily's dev domain (e.g. localhost:5000) and prod domain(Heroku hosted url):\
  npm install --save http-proxy-middleware
- React Stripe checkout for handling Stripe payments API:\
  npm install --save react-stripe-checkout
- [Redux Form](https://redux-form.com/8.3.0/) for simplified handling of form data with redux state management included:\
  npm install redux-form
 
## Available Scripts
In the project top level 'server' directory, the following script will run the app in development mode by initiating both the client and backend server:\
  npm run dev

The production build is performed when pushing to Heroku.  To initiate the push and subsequent build run the follwing from the top level 'server' directory (assuming 'main' is your primary git branch): \
  git push heroku main
