import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClienteModel } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: ClienteModel[] = [];
  promedio = 0;
  desviacion: any = 0;

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe(resp => {
      this.clientes = resp;
    });

    this.clienteService.getpromedioEdad().subscribe(resp => {
      this.promedio = resp[0];
    });

    this.clienteService.getDesviacionEstandar().subscribe(resp => {
      this.desviacion = resp;
    });


  }





}
