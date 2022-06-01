import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../interfaces/Usuario';
import { JobsService } from '../services/jobs.service';



@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {
  novoUsuario : FormGroup;
  id = 0;
  usuario : Usuario | undefined;
  nome: string;
  telefone: string;
  email: string;  
  senha: string;
  status: number;


  constructor(private fb: FormBuilder,
             private _jobs : JobsService,
             private router: Router,
             private aRoute: ActivatedRoute) { 
               this.novoUsuario = this.fb.group({
                 nome: ['', Validators.required],
                 telefone: ['', Validators.required],
                 email: ['', Validators.required],
                 senha: ['', Validators.required]                
               })
             }


  ngOnInit(): void {
  }

  salvar(){
  if (this.usuario == undefined){
    //Novo Registro
    const usuario: Usuario = {
      nome : this.novoUsuario.get('nome')?.value,
      email : this.novoUsuario.get('email')?.value,
      telefone : this.novoUsuario.get('telefone')?.value,
      senha : this.novoUsuario.get('senha')?.value,
      status : this.novoUsuario.get('status')?.value,
    }
    this._jobs.criarConta(usuario).subscribe(data => {
    this.router.navigate(['/']);
    }, error =>{
      console.log(error);
    })
      }else{
        console.log('editar registro')
      }
  }

}

