import { Component } from '@angular/core';
import { ANGULAR_MATERIAL } from '../../../../core/angular-material/angular-material';
import { TabelaClientesComponent } from '../../components/tabela-clientes/tabela-clientes.component';

@Component({
  selector: 'app-clientes',
  imports: [
    ANGULAR_MATERIAL,
    TabelaClientesComponent
  ],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {

}
