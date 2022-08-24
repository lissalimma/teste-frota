import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrotaComponent } from './frota/frota.component';

const routes: Routes = [{
  path: '',
  component: FrotaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FrotaRoutingModule { }
