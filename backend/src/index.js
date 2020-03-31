//importando express (framework web para configuração node)
const express = require('express');
//modulo de segurança - define quem pode acessar a aplicacao
const cors = require('cors');
const routes = require('./routes');

//armazena a aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);