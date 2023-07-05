const app = require('express')();
const bodyParser = require('body-parser');
const consign = require('consign');

consign({ cwd: 'src', verbose: false })
    .include('./config/middlewares.js')
    .into(app);
    
app.use(bodyParser.json());

app.get('/', (req, res) => {

    res.status(200).send();
})

app.get('/users', (req, res) => {

    const users = [
        {
            name: 'Gustavo',
            mail: 'gustavo@gmail.com',
        }
    ];
    res.status(200).json(users);
})

app.post('/users', (req, res) => {

    console.log("valor vindo da req: ",req.body)
    res.status(201).json(req.body);
})

module.exports = app;