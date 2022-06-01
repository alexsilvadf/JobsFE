import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Usuario } from '../interfaces/Usuario';



@Injectable({
  providedIn: 'root'
})

export class JobsService {
  private myAppUrl = 'https://localhost:37268/';
 // private myAppUrl = 'https://217.21.77.150/';
  private myApiUrl = 'api/Usuario/';

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter: boolean = false;


  constructor(private http: HttpClient,
              private router : Router) { }

  getUsuario(nome : any): Observable<any> {
    const params =  new HttpParams().set('nome', nome);
    return this.http.get(this.myAppUrl + this.myApiUrl + 'listar-por-filtro', {params});
  }

  getTodosUsuarios(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }

  getLogin(usuario: any, senha : any): Observable<any>{
    if(usuario === 'Alex' && senha === '123'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter = true;
      this.router.navigate(['/principal']);
    }else{
      this.usuarioAutenticado = false; 
      this.mostrarMenuEmitter = false;
    }
    const params = new HttpParams().set('usuario', usuario).set('senha', senha);
    return this.http.get(this.myAppUrl + this.myApiUrl + 'getLogin', {params});
  }

  criarConta(usuario : Usuario): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
  }
}
