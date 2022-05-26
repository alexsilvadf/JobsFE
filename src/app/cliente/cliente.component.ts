import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface DialogData {

}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  telMask= '(00) 0000-0000' //comece com a que faz sentido
 
  constructor(private fb: FormBuilder,) { } 

  ngOnInit(): void {
           
      }
  


  getCliente(){    
  }
 
}

