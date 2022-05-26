import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { JobsService } from './services/jobs.service';
import { ClienteComponent } from './cliente/cliente.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    MensagemComponent,
    CriarContaComponent,
    HomeComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
