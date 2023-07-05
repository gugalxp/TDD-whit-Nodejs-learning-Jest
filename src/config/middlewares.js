const bodyParser = require('body-parser');

module.exports = (app) => {
    console.log("ESSE CONSOLE DO APP: ", app);
    app.use(bodyParser.json());
};