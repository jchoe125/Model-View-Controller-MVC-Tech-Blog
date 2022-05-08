//Dependencies
const path = require("path"); //path module
const express = require("express"); //express.js server
const exphbs = require("express-handlebars"); //handlebars template engine
const allRoutes = require("./controllers"); //routes w/in controllers folder
const session = require("express-session"); //express session to handle session cookies
const sequelize = require("./config/connection"); //sequelize db connection
const SequelizeStore = require("connect-session-sequelize")(session.Store); //save session so user can stay logged in
const helpers = require("./utils/helpers")

//Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;


//Set up sessions
const sess = {
    secret: //add secret to session
        resave: false,
    saveUninitialized: false,
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

//Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//JSON parsing and string data using Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connects server to public directory for static files
app.use(express.static(path.join(__dirname, 'public')));

//Connects server to routes
app.use(routes);

//Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});