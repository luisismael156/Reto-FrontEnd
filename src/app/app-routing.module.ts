import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CreateClientesComponent } from './pages/create/create-clientes/create-clientes.component';



const routes: Routes = [
  { path: 'clientes', component: ClientesComponent},
  { path: 'clientes/create', component: CreateClientesComponent},
  { path: '**', component: ClientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
