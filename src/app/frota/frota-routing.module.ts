import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { FrotaComponent } from './frota/frota.component';

const routes: Routes = [{
  path: '',
  component: FrotaComponent
},
{
  path: 'editar',
  component: EditarComponent
},
{
  path: 'editar/:plate',
  component: EditarComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FrotaRoutingModule { }
