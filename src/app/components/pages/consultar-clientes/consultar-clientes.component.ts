import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment.development';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-consultar-clientes',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgxPaginationModule,
    NgxMaskPipe
  ],
  templateUrl: './consultar-clientes.component.html',
  styleUrl: './consultar-clientes.component.css'
})

export class ConsultarClientesComponent {

  clientes: any[] = [];
  pagina: number = 1;
  mensagemSucesso: string = '';

  constructor(
    private httpClient: HttpClient,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit() {

    this.spinnerService.show();

    this.httpClient.get(environment.clientesApi)
      .subscribe({
        next: (data) => {
          this.clientes = data as any[];
          this.spinnerService.hide();
        }
      })
  }

  onDelete(id: string) {

    if (confirm('Deseja realmente excluir o cliente selecionado?')) {

      this.spinnerService.show();

      this.httpClient.delete('http://localhost:5022/api/clientes/' + id)
        .subscribe({
          next: (data: any) => {
            this.mensagemSucesso = `O cliente ${data.nome}foi excluído com sucesso!`;
            this.ngOnInit();
            this.spinnerService.hide();
          }
        })
    }

  }
  handlePageChange(event: any) {
    this.pagina = event;
  }

}
