import { Component, OnInit } from '@angular/core';
import { ANGULAR_MATERIAL } from '../../../../core/angular-material/angular-material';
import { TabelaClientesComponent } from '../../components/tabela-clientes/tabela-clientes.component';
import { ClienteService } from '../../services/cliente.services';

@Component({
  selector: 'app-clientes',
  imports: [
    ANGULAR_MATERIAL,
    TabelaClientesComponent
  ],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent implements OnInit {

  constructor(
    private readonly _clienteService: ClienteService
  ){}

  ngOnInit(): void {
    this.obterClientes();
  }

  obterClientes() {
    this._clienteService.obterClientes().subscribe({
      next: (response) => {
        console.log("data => ", response.data);
        
      }, error: (error) => {
        console.error(error)
      }
    })
  }
}
