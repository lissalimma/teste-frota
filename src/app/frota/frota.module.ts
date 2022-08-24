import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrotaComponent } from './frota/frota.component';
import { FrotaRoutingModule } from './frota-routing.module';



@NgModule({
  declarations: [
    FrotaComponent
  ],
  imports: [
    CommonModule,
    FrotaRoutingModule
  ]
})
export class FrotaModule { }
