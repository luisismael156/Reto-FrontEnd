import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteModel } from '../models/cliente.model';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url = 'https://fir-crudangular-cce59.firebaseio.com/';

  constructor(private http: HttpClient) { }

  crearCliente(cliente: ClienteModel) {

    return this.http.post(`${this.url}/clientes.json`, cliente);

  }

  getClientes() {

    return this.http.get(`${this.url}/clientes.json`).pipe(map(this.crearArreglo));

  }

  getpromedioEdad() {

    return this.http.get(`${this.url}/clientes.json`).pipe(map(this.SacarPromedio));

  }
  getDesviacionEstandar() {

    return this.http.get(`${this.url}/clientes.json`).pipe(map(this.DesviacionEstandar));

  }

  private DesviacionEstandar(clientesObj: any) {
    if (clientesObj == null) { return []; }
    const clientes: ClienteModel[] = [];
    let sumatoria: number = 0;
    let media: number = 0;
    let varianza: number = 0;
    let desviacion: number = 0;

    Object.keys(clientesObj).forEach(llave => {
      const cliente: ClienteModel = clientesObj[llave];
      clientes.push(cliente);
    });

    for (let index = 0; index < clientes.length; index++) {
      sumatoria += clientes[index].edad;
    }
    media = sumatoria / clientes.length;
    for (let i = 0; i < clientes.length; i++) {
      let rango;
      rango = Math.pow(clientes[i].edad - media, 2);
      varianza = varianza + rango;
    }
    varianza = varianza / clientes.length;
    desviacion = Math.sqrt(varianza);

    return desviacion;
  }


  private SacarPromedio(clientesObj: any) {
    if (clientesObj == null) { return []; }
    const prom = [];
    let acum: number = 0;
    let cont: number = 0;
    Object.keys(clientesObj).forEach(llave => {
      const cliente: ClienteModel = clientesObj[llave];
      acum += cliente.edad;
      cont++;
    });
    prom.push(acum / cont);
    return prom;
  }

  private crearArreglo(clientesObj: any) {
    if (clientesObj == null) { return []; }
    const clientes: ClienteModel[] = [];
    Object.keys(clientesObj).forEach(llave => {

      const cliente: ClienteModel = clientesObj[llave];

      clientes.push(cliente);

    });
    return clientes;
  }


}
