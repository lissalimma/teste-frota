import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrotaComponent } from './frota/frota.component';
import { FrotaRoutingModule } from './frota-routing.module';
import { CreatComponent } from './create/creat.component';



@NgModule({
  declarations: [
    FrotaComponent,
    CreatComponent
  ],
  imports: [
    CommonModule,
    FrotaRoutingModule
  ]
})
export class FrotaModule { }
