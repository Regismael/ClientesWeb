import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js';

/*
Definir quais ENDPOINTS precisam de autenticão
*/
const endpoints = [environment.clientesApi];
/*
Criando o interceptador
*/
export const AuthInterceptor: HttpInterceptorFn = (request, next) => {
    //verificando se a requisição é para algum dos endopoints acima
    if (endpoints.some((e) => request.url.includes(e))) {
        //ler os dados gravados na session storage
        const data = sessionStorage.getItem('user-auth') as string;
        //descriptografar os dados lidos
        const usuario = JSON.parse(
            CryptoJS.AES.decrypt(data, environment.cryptoKey).toString(
                CryptoJS.enc.Utf8
            )
        );
        //adicionando o TOKEN na requisição
        const cloneRequest = request.clone({
            setHeaders: { Authorization: 'Bearer ' + usuario.accessToken },
        });
        //enviando a requisição com o TOKEN adicionado
        return next(cloneRequest);
    }
    return next(request);
};