
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ClienteComponent } from './cliente/cliente.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './login/login.component';
import { MensagemComponent } from './mensagem/mensagem.component';




const routes: Routes = [
  {
    path: '',
    component : HomeComponent,
    children:[     
      {path: '', component: AppComponent},
      {path: 'cliente', component : ClienteComponent},
      {path: 'mensagem', component : MensagemComponent}
    ],
    canActivate: [AuthGuard]
  },
  {
   path: '',
   component : AuthenticationComponent,
   children:[
    {path: '', redirectTo : 'login', pathMatch: 'full'},
    {path: 'login', component : LoginComponent},
    {path: 'criar-conta', component : CriarContaComponent},
   ]
  
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
