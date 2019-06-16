import { Profissional } from '../../gui/ta-gui/src/app/atendimentoProfissional/profissional';

export class CadastroDeProfissionais {
  profissionais: Profissional[] = [];

  criar(profissional: Profissional): Profissional {
    var result = null;
    if (this.cpfNaoCadastrado(profissional.cpf)) {
      result = new Profissional();
      result.copyFrom(profissional);
      this.profissionais.push(result);
    }
    return result;
  }
  remover(profissional: Profissional): Profissional{
    var aux = this.profissionais.findIndex(tr => tr.cpf === profissional.cpf);
    console.log(aux);
    var result = this.profissionais.splice(aux,1);
    return result[0];
  }
  cpfNaoCadastrado(cpf: string): boolean {
     return !this.profissionais.find(a => a.cpf == cpf);
  }

  atualizar(profissional: Profissional): Profissional {
    var result: Profissional = this.profissionais.find(a => a.cpf == profissional.cpf);
    if (result) result.copyFrom(profissional);
    return result;
  }
  busca(profissional: Profissional): Profissional{
    var result: Profissional = this.profissionais.find(a => a.cpf == profissional.cpf);
    return result;
  }
  getAlunos(): Profissional[] {
    return this.profissionais;
  }
}
