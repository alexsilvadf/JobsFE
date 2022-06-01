import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CriarContaComponent } from '../criar-conta/criar-conta.component';
import { CiarContaService } from '../criar-conta/criar-conta.service';
import { Login } from '../interfaces/Login';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   formLogin : FormGroup;
    login = {email: '',
             senha: ''

  };


  constructor(private fb: FormBuilder,
              private _jobsService: JobsService,
              private router : Router,
              private accountService : CiarContaService  ) { }

  ngOnInit(): void {
     this.formLogin = this.fb.group({
       usuario: [''],
       senha: ['']
     })
  }

 async onSubmit(){
  
 }

  validarUsuario(event: any){
    // console.log(this.formLogin);

    
    // const usuario = this.formLogin.get('usuario')?.value;
    // const senha = this.formLogin.get('senha')?.value;
    // this._jobsService.getLogin(usuario, senha).subscribe({
    //   next: (data) => {
    //     this.listLogin = data;
    //   },
    //   error: (error) => {
    //     console.log('erro ao buscar usuario ', error);
    //   }      
    // });
  
  }

}
