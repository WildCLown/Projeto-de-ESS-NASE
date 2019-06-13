"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cadastrodeatividades_1 = require("./cadastrodeatividades");
const cadastroconsultas_1 = require("./cadastroconsultas");
const cadastroAlunoProfissional_1 = require("./cadastroAlunoProfissional");
var app = express();
exports.app = app;
var cadastroAtividades = new cadastrodeatividades_1.CadastroDeAtividades();
var cadastroAlunoProfissional = new cadastroAlunoProfissional_1.CadastroAlunoProfissional();
var cadastroConsulta = new cadastroconsultas_1.CadastroConsulta();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.get('/atividades', function (req, res) {
    console.log('GET /alunos: ' + req);
    res.send(JSON.stringify(cadastroAtividades.getAtividades()));
});
app.post('/atividade', function (req, res) {
    var atividade = req.body;
    atividade = cadastroAtividades.criar(atividade);
    if (atividade) {
        res.send({ "success": "A atividade em campo foi cadastrado com sucesso" });
    }
    else {
        res.send({ "failure": "A atividade em campo não pode ser cadastrado" });
    }
});
app.post('/buscaAtividades', function (req, res) {
    var atividade = req.body;
    var atividadesBuscadas = cadastroAtividades.busca(atividade);
    if (atividadesBuscadas.length > 0) {
        res.send(JSON.stringify(atividadesBuscadas));
    }
    else {
        res.send({ "failure": "A atividade em campo não pode ser cadastrado" });
    }
});
app.put('/atividade', function (req, res) {
    var atividade = req.body;
    atividade = cadastroAtividades.atualizar(atividade);
    if (atividade) {
        res.send({ "success": "A atividade em campo foi atualizado com sucesso" });
    }
    else {
        res.send({ "failure": "A atividade em campo não pode ser atualizado" });
    }
});
app.delete('/atividade', function (req, res) {
    var atividade = req.body;
    var removido = cadastroAtividades.remover(atividade); //deveria haver um teste de remoção
    if (removido) {
        res.send({ "success": "A atividade em campo foi atualizado com sucesso" });
    }
    else {
        res.send({ "failure": "A atividade em campo não pode ser atualizado" });
    }
});
app.get('/registros', function (req, res) {
    console.log('GET /registros: ' + req);
    res.send(JSON.stringify(cadastroAlunoProfissional.getAlunosProfissionais()));
});
app.post('/registro', function (req, res) {
    var ap = req.body;
    ap = cadastroAlunoProfissional.criar(ap);
    if (ap) {
        res.send({ "success": "O registro foi cadastrado com sucesso" });
    }
    else {
        res.send({ "failure": "O registro não pode ser cadastrado" });
    }
});
app.get('/consultas', function (req, res) {
    console.log('GET /consultas: ' + req);
    res.send(JSON.stringify(cadastroConsulta.getConsultas()));
});
app.post('/consulta', function (req, res) {
    var consulta = req.body;
    consulta = cadastroConsulta.criar(consulta);
    if (consulta) {
        res.send({ "success": "A consulta foi cadastrada com sucesso" });
    }
    else {
        res.send({ "failure": "A consulta não pode ser cadastrada" });
    }
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=ta-server.js.map