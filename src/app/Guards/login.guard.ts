import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import * as CryptoJS from 'crypto-js';
import { Router } from "@angular/router";
@Injectable({
    providedIn: 'root' //habilitando injeção de dependência
})
export class LoginGuard {
    constructor(
        private router: Router
    ) {
    }
    canActivate(): boolean {
        //ler os dados gravados na session storage
        const data = sessionStorage.getItem('user-auth') as string;
        //verificar se algum dado foi obtido
        if (data) {
            //descriptografar os dados lidos
            const usuario = JSON.parse(
                CryptoJS.AES.decrypt(data, environment.cryptoKey)

                    .toString(CryptoJS.enc.Utf8
                    )
            );
            //capturando a data de expiração do token
            const dataExpiracao = new Date(usuario.dataHoraExpiracao);
            const dataAtual = new Date(); //data atual
            //validar o token e data de expiração
            if (usuario.accessToken && dataExpiracao > dataAtual) {
                //Se o usuário já estiver autenticado,

                //ele será redirecionado

                //para a página de consulta de clientes.
                this.router.navigate(['/pages/consultar-clientes'])
                return false;
            }
        }
        return true;
    }
}