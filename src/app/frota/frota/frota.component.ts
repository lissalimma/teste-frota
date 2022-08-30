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
      plate: "ASD1234",
      model: "c180",
      manufacturer: "Mercedes-Benz",
      status: "Active"
    },
    {
      plate: "ASD1234",
      model: "c180",
      manufacturer: "Mercedes-Benz",
      status: "Inactive"
    },
    {
      plate: "ASD1234",
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
      plate: "ASD1234",
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
      plate: "ASD1234",
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
      plate: "ASD1234",
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
      plate: "ASD1234",
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
      plate: "ASD1234",
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
      plate: "ASD1234",
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
      plate: "ASD1234",
      model: "c180",
      manufacturer: "Mercedes-Benz",
      status: "Active"
    }
  ];
  
  filtro: string = "";

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openModal(){
    this.dialog.open(DeleteComponent, {
      width: '350px'
      
    });
  }

  filtrar(){    
   this.list = this.list.filter(data => data.plate === this.filtro)
  
  }

}
