import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Profissional } from './profissional';

@Injectable()
export class ProfissionalService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  criar(profissional: Profissional): Promise<Profissional> {
    return this.http.post(this.taURL + "/profissional",JSON.stringify(profissional), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return profissional;} else {return null;}
           })
           .catch(this.tratarErro);
  }
  remover(profissional: Profissional): Promise<Profissional>{
    return this.http.delete(this.taURL + "/profissional",{headers: this.headers, body:JSON.stringify(profissional)})
    .toPromise()
    .then(res => {
      if(res.json().success) {return profissional;} else {return null;}
    })
    .catch(this.tratarErro);
  }
  atualizar(profissional: Profissional): Promise<Profissional> {
    return this.http.put(this.taURL + "/profissional",JSON.stringify(profissional), {headers: this.headers})
         .toPromise()
         .then(res => {
            if (res.json().success) {return profissional;} else {return null;}
         })
         .catch(this.tratarErro);
  }
  buscar(profissional: Profissional): Promise<Profissional> {
    return this.http.post(this.taURL + "/buscaProfissional",JSON.stringify(profissional), {headers: this.headers})
      .toPromise()
      .then(res => {
        if (res.json().failure) {return null;} else {return res.json() as Profissional;}
      })
      .catch(this.tratarErro)
  }
  getAlunos(): Promise<Profissional[]> {
    return this.http.get(this.taURL + "/profissionais")
             .toPromise()
             .then(res => res.json() as Profissional[])
             .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de profissionais',erro);
    return Promise.reject(erro.message || erro);
  }
}
