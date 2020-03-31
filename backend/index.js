require('dotenv-safe').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();

const corsOptions = {
    exposedHeaders: 'X-Total-Count',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.listen(3333);