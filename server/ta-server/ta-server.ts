import express = require('express');
import bodyParser = require("body-parser");

import { AtividadeEmCampo } from '../../gui/ta-gui/src/app/atividadeEmCampo/atividadeEmCampo';
import { CadastroDeAtividades } from './cadastrodeatividades';
import { CadastroConsulta } from './cadastroconsultas';
import { CadastroAlunoProfissional } from './cadastroAlunoProfissional'
import { AlunoProfissional } from '../../gui/ta-gui/src/app/atendimento/alunoProfissional';
import { Consulta } from '../../gui/ta-gui/src/app/atendimento/consulta';
//Texero Stuff
import {Profissional} from '../../gui/ta-gui/src/app/atendimentoProfissional/profissional';
import {CadastroDeProfissionais} from './cadastrodeprofissionais';

var app = express();
var cadastroAtividades: CadastroDeAtividades = new CadastroDeAtividades();
var cadastroAlunoProfissional: CadastroAlunoProfissional = new CadastroAlunoProfissional();
var cadastroConsulta: CadastroConsulta = new CadastroConsulta();
var cadastroPro: CadastroDeProfissionais = new CadastroDeProfissionais();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.get('/atividades', function (req, res) {
    console.log('GET /alunos: ' + req)
  res.send(JSON.stringify(cadastroAtividades.getAtividades()));
})

app.post('/atividade', function (req: express.Request, res: express.Response) {
  var atividade : AtividadeEmCampo = <AtividadeEmCampo> req.body; 
  atividade = cadastroAtividades.criar(atividade);
  if (atividade) {
    res.send({"success": "A atividade em campo foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "A atividade em campo não pode ser cadastrado"});
  }
})

app.post('/buscaAtividades', function (req: express.Request, res: express.Response) {
  var atividade : AtividadeEmCampo = <AtividadeEmCampo> req.body; 
  var atividadesBuscadas = cadastroAtividades.busca(atividade);
  if (atividadesBuscadas.length>0) {
    res.send(JSON.stringify(atividadesBuscadas));
  } else {
    res.send({"failure": "A atividade em campo não pode ser cadastrado"});
  }
})

app.put('/atividade', function (req: express.Request, res: express.Response) {
  var atividade: AtividadeEmCampo = <AtividadeEmCampo> req.body;
  atividade = cadastroAtividades.atualizar(atividade);
  if (atividade) {
    res.send({"success": "A atividade em campo foi atualizado com sucesso"});
  } else {
    res.send({"failure": "A atividade em campo não pode ser atualizado"});
  }
})
app.delete('/atividade',function(req: express.Request, res: express.Response){
  var atividade = req.body;
  var removido = cadastroAtividades.remover(atividade); //deveria haver um teste de remoção
  if (removido) {
    res.send({"success": "A atividade em campo foi atualizado com sucesso"});
  } else {
    res.send({"failure": "A atividade em campo não pode ser atualizado"});
  }
});

app.get('/registros', function (req, res) {
    console.log('GET /registros: ' + req)
  res.send(JSON.stringify(cadastroAlunoProfissional.getAlunosProfissionais()));
})

app.post('/registro', function (req: express.Request, res: express.Response) {
  var ap: AlunoProfissional = <AlunoProfissional>req.body;
  ap = cadastroAlunoProfissional.criar(ap);
  if (ap) {
    res.send({ "success": "O registro foi cadastrado com sucesso" });
  } else {
    res.send({ "failure": "O registro não pode ser cadastrado" });
  }
})

app.get('/consultas', function (req, res) {
    console.log('GET /consultas: ' + req)
  res.send(JSON.stringify(cadastroConsulta.getConsultas()));
})

app.post('/consulta', function (req: express.Request, res: express.Response) {
  var consulta: Consulta = <Consulta>req.body;
  consulta = cadastroConsulta.criar(consulta);
  if (consulta) {
    res.send({ "success": "A consulta foi cadastrada com sucesso" });
  } else {
    res.send({ "failure": "A consulta não pode ser cadastrada" });
  }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
//Texero Stuff
app.get('/profissionais', function (req, res) {
  res.send(JSON.stringify(cadastroPro.getAlunos()));
})

app.post('/profissional', function (req: express.Request, res: express.Response) {
  var profissional: Profissional = <Profissional> req.body; //verificar se é mesmo Aluno!
  profissional = cadastroPro.criar(profissional);
  if (profissional) {
    res.send({"success": "O aluno foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O aluno não pode ser cadastrado"});
  }
})
app.delete('/profissional', function (req: express.Request, res: express.Response) {
  var profissional: Profissional = <Profissional> req.body;
  profissional = cadastroPro.remover(profissional);
  if(profissional){
    res.send({"success": "O aluno foi eliminado da face da terra"});
  }else{
    res.send({"failure":"O aluno não pode ser removido"});
  }
})
app.put('/profissional', function (req: express.Request, res: express.Response) {
  var profissional: Profissional = <Profissional> req.body;
  profissional = cadastroPro.atualizar(profissional);
  if (profissional) {
    res.send({"success": "O aluno foi atualizado com sucesso"});
  } else {
    res.send({"failure": "O aluno não pode ser atualizado"});
  }
})
app.post('/buscaProfissional', function (req: express.Request, res: express.Response) {
  var profissional : Profissional = <Profissional> req.body; 
  var profissionaisBuscados = cadastroPro.busca(profissional);
    res.send(JSON.stringify(profissionaisBuscados));
})

export { app }
