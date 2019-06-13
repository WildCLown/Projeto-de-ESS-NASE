import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import { AlunoProfissional } from './alunoProfissional';

@Injectable()
export class AlunoProfissionalService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  criar(alunoProfissional: AlunoProfissional): Promise<AlunoProfissional> {
    return this.http.post(this.taURL + "/registro",JSON.stringify(alunoProfissional), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return alunoProfissional;} else {return null;}
           })
           .catch(this.tratarErro);
  }

  getAlunosProfissionais(): Promise<AlunoProfissional[]> {
    return this.http.get(this.taURL + "/registros")
             .toPromise()
             .then(res => res.json() as AlunoProfissional[])
             .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de alunos e profissionais.',erro);
    return Promise.reject(erro.message || erro);
  }
}