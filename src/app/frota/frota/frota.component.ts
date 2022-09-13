import { Component, OnInit, platformCore } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-frota',
  templateUrl: './frota.component.html',
  styleUrls: ['./frota.component.scss']
})
export class FrotaComponent implements OnInit {

  list: any;
  listFilter;
  filtro: string = "";

  constructor(public dialog: MatDialog, private api: ApiService) {
  }

  ngOnInit(): void {

    this.api.getList().subscribe(result => {
      this.list = result;
      this.listFilter = this.list;
    })

  }

  openModal(plate) {
    let dialogRef = this.dialog.open(DeleteComponent, {
      width: '350px',
      data: {
        plate: plate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  filtrar() {
    if (this.filtro.length === 7) {
      this.list = this.list.filter(data => data.plate == this.filtro)
    } else {
      this.list = this.listFilter;
    }


  }



}
