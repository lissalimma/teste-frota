import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';


@Component({
  selector: 'app-frota',
  templateUrl: './frota.component.html',
  styleUrls: ['./frota.component.scss']
})
export class FrotaComponent implements OnInit {

  list = [
    {
      plate: "ASD1231",
      model: "c180",
      manufacturer: "Mercedes-Benz",
      status: "Active"
    },
    {
      plate: "ASD1232",
      model: "c180",
      manufacturer: "Mercedes-Benz",
      status: "Inactive"
    },
    {
      plate: "ASD1233",
      model: "c180",
      manufacturer: "Mercedes-Benz",
      status: "Active"
    },
    {
      plate: "ASD1234",
      model: "c180",
      manufacturer: "Mercedes-Benz",
      status: "Active"
    },
    {
      plate: "ASD1235",
      model: "c180",
      manufacturer: "Mercedes-Benz",
      status: "Active"
    },
    {
      plate: "ASD1236",
      model: "c180",
      manufacturer: "Mercedes-Benz",
      status: "Active"
    },
    {
      plate: "ASD1237",
      model: "c180",
      manufacturer: "Mercedes-Benz",
      status: "Active"
    },
    {
      plate: "ASD1238",
      model: "c180",
      manufacturer: "Mercedes-Benz",
      status: "Active"
    },
    {
      plate: "ASD1239",
      model: "c180",
      manufacturer: "Mercedes-Benz",
      status: "Active"
    },
    {
      plate: "ASD1210",
      model: "c180",
      manufacturer: "Mercedes-Benz",
      status: "Active"
    }
  ];
  listFilter = this.list;
  filtro: string = "";

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openModal() {
    this.dialog.open(DeleteComponent, {
      width: '350px'

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
