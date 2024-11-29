
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-criar-usuario',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './criar-usuario.component.html',
  styleUrl: './criar-usuario.component.css'
})
export class CriarUsuarioComponent {


  mensagemSucesso: string = '';
  mensagemErro: string = '';


  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService
  ) {}


  form = new FormGroup({
    nome : new FormControl('', [Validators.required, Validators.minLength(8)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    senha : new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    senhaConfirmacao : new FormControl('', [Validators.required])
  },
  { validators: this.senhaConfirmacaoValidator  }
  );


  get f() {
    return this.form.controls;
  }


  onSubmit() {


    this.mensagemSucesso = '';
    this.mensagemErro = '';


    this.spinner.show();


    this.httpClient.post(environment.usuariosApi + "/criar", this.form.value)
      .subscribe({
        next: (data: any) => {
          this.mensagemSucesso = `Parabéns ${data.nome}, sua conta foi criada com sucesso. Clique no link no rodapé da página para acessar sua conta.`;
          this.form.reset();
          this.spinner.hide();
        },
        error: (e) => {
          this.mensagemErro = e.error.message;
          this.spinner.hide();
        }
      })    
  }


  senhaConfirmacaoValidator(abstractControl: AbstractControl) {
    let senha = abstractControl.get('senha')?.value;
    let senhaConfirmacao = abstractControl.get('senhaConfirmacao')?.value;
    if (senhaConfirmacao != null && senhaConfirmacao.length > 0 && senhaConfirmacao != senha) {
      abstractControl.get('senhaConfirmacao')?.setErrors({
        matchPassword: true,
      });
    }
    return null;
  }


}



