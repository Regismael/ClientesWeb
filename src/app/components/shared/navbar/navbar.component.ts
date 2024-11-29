import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar', //seletor para exibir o componente em HTML
  standalone: true, //componente independente
  imports: [
    CommonModule,
    RouterLink
  ], //importar bibliotecas ou outros componentes
  templateUrl: './navbar.component.html',
  //define a página HTML do componente
  styleUrl: './navbar.component.css'
  //define a folha de estilos CSS do componente
})
export class NavbarComponent {
  //atributos
  nomeUsuario: string = '';
  nomePerfil: string = '';
  isAuthenticated: boolean = false;
  //função executada no momento em que
  //o componente é carregado (aberto)
  ngOnInit() {
    //ler os dados gravados na session storage
    const data = sessionStorage.getItem('user-auth') as string;
    //verificar se algum valor foi obtido
    if (data != null) {
      this.isAuthenticated = true;
      //descriptografando os dados do usuário
      const usuario = JSON.parse(CryptoJS.AES.decrypt
        (data, environment.cryptoKey)
        .toString(CryptoJS.enc.Utf8));
      this.nomeUsuario = usuario.nome;
      this.nomePerfil = usuario.perfil.nome;
    }
  }
  //função para fazer o logout do usuário
  logout() {
    if (confirm('Deseja realmente sair do sistema?')) {
      //apagar os dados gravados na session storage
      sessionStorage.removeItem('user-auth');
      //redirecionar para a página de login
      location.href = '/';
    }
  }
}