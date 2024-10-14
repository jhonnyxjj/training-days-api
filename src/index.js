import express from "express";
import bodyParser from "body-parser";
import controllers from "./controllers/index.js";
import errorHandler from "./middlewares/error-middleware.js";


const port = 3000;
const app = express();
app.use(bodyParser.json());

controllers.forEach((c) => {
    c.initialize(app);
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Estamos rodando na port ${port}`);
});
