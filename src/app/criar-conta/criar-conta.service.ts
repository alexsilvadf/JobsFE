import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CiarContaService{

    constructor(private http: HttpClient){}

    // async login(user: any){
    //   const result = await this.http.post<any>(`${environment.api}/auth/login`, user).toPromise();
    //   if (result && result.access_token)   {
    //     window.localStorage.setItem('token', result.access_token);
    //     return true;
    //   }
    //   return false;
    //   }
    
      createAccount(account: any){
        return new Promise((resolve) =>{
          resolve(true);
        });
      }

}