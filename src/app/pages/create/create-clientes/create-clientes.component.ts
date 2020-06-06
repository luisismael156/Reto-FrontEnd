import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/models/cliente.model';
import { NgForm } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-clientes',
  templateUrl: './create-clientes.component.html',
  styleUrls: ['./create-clientes.component.css']
})
export class CreateClientesComponent implements OnInit {

  cliente = new ClienteModel();

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
  }
  guardar(form: NgForm) {

    if (form.invalid) {
      console.log(form)
      console.log("Formulario no valido")
      return;

    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando Informacion',
    })
    Swal.showLoading();
    this.clienteService.crearCliente(this.cliente).subscribe((resp) => {

      Swal.fire({
        title: 'Espere',
        text: 'Se actualizo correctamente'
      })
    })

  }
}
