import { Routes } from '@angular/router';
import { CadastrarClientesComponent } from './components/pages/cadastrar-clientes/cadastrar-clientes.component';
import { ConsultarClientesComponent } from './components/pages/consultar-clientes/consultar-clientes.component';
import { EditarClientesComponent } from './components/pages/editar-clientes/editar-clientes.component';
import { CriarUsuarioComponent } from './components/pages/criar-usuario/criar-usuario.component';
import { AutenticarUsuarioComponent } from './components/pages/autenticar-usuario/autenticar-usuario.component';
import { AuthGuard } from './Guards/auth.guard';
import { LoginGuard } from './Guards/login.guard';

export const routes: Routes = [
    {
        path: 'pages/cadastrar-clientes',
        component: CadastrarClientesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'pages/consultar-clientes',
        component: ConsultarClientesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'pages/editar-clientes/:id',
        component: EditarClientesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '', pathMatch: 'full',
        redirectTo: '/pages/autenticar-usuario'

    },
    {
        path: 'pages/criar-usuario',
        component: CriarUsuarioComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'pages/autenticar-usuario',
        component: AutenticarUsuarioComponent,
        canActivate: [LoginGuard]
    }

];
