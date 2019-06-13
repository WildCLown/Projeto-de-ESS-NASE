import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


import { Consulta } from './consulta';

@Injectable()
export class ConsultaService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private taURL = 'http://localhost:3000';

    constructor(private http: Http) { }

    criar(consulta: Consulta): Promise<Consulta> {
        return this.http.post(this.taURL + "/consulta", JSON.stringify(consulta), { headers: this.headers })
            .toPromise()
            .then(res => {
                if (res.json().success) { return consulta; } else { return null; }
            })
            .catch(this.tratarErro);
    }

    getConsultas(): Promise<Consulta[]> {
        return this.http.get(this.taURL + "/consultas")
            .toPromise()
            .then(res => res.json() as Consulta[])
            .catch(this.tratarErro);
    }

    private tratarErro(erro: any): Promise<any> {
        console.error('Acesso mal sucedido ao serviço de consultas.', erro);
        return Promise.reject(erro.message || erro);
    }
}