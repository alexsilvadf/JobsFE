import { inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CiarContaService{

    constructor(){}

    login(user: any){
        return new Promise((resolve) => {
          window.localStorage.setItem('token', 'meu-token');
          resolve(true);
        });  
      }
    
      createAccount(account: any){
        return new Promise((resolve) =>{
          resolve(true);
        });
      }

}