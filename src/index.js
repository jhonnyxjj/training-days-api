import express from 'express';
import bodyParser from 'body-parser';
import controllers from './controllers/index.js';


const port = 3000;
const app = express();
app.use(bodyParser.json());

controllers.forEach(c => {
    c.initialize(app);
});


app.listen(port, () => {
    console.log("Estamos rodando na port 3000");
});