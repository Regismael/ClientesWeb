import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-autenticar-usuario',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './autenticar-usuario.component.html',
  styleUrl: './autenticar-usuario.component.css'
})
export class AutenticarUsuarioComponent {


  mensagemErro: string = '';


  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService
  ) {}


  //declarando o objeto formulário
  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    senha : new FormControl('', [Validators.required, Validators.minLength(8)])
  });


  //objeto para exibir as mensagems de erro
  //de validação para cada campo do formulário
  get f() {
    return this.form.controls;
  }


  //função para capturar o submit do formulário
  onSubmit() {


    this.spinner.show();
   
    this.httpClient.post(environment.usuariosApi + "/autenticar", this.form.value)
      .subscribe({
        next: (data : any) => {
          //criptografar os dados obtidos
          const usuario = CryptoJS.AES.encrypt(JSON.stringify(data), environment.cryptoKey);
          //salvar os dados obtidos em uma session storage
          sessionStorage.setItem('user-auth', usuario.toString());
          //redirecionar para a página de consulta de clientes
          location.href = '/pages/consultar-clientes';
        },
        error: (e) => {
          this.mensagemErro = e.error.message;
          this.spinner.hide();
        }
      })
  }


}




