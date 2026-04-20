import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ApiResponse } from '../../../core/models/api-response.model';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private readonly _baseUrl = environment.url_api;

  constructor(private readonly _httpCliente: HttpClient) {}

  public obterClientes(): Observable<ApiResponse<Cliente>> {
    return this._httpCliente.get<ApiResponse<Cliente>>(
      `${this._baseUrl}/Customer`,
    );
  }
}
