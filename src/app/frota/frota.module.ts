import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrotaComponent } from './frota/frota.component';
import { FrotaRoutingModule } from './frota-routing.module';
import { CreatComponent } from './create/creat.component';
import { DeleteComponent } from './delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { EditarComponent } from './editar/editar.component';




@NgModule({
  declarations: [
    FrotaComponent,
    CreatComponent,
    DeleteComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    FrotaRoutingModule,
    FormsModule
  ]
})
export class FrotaModule { }
