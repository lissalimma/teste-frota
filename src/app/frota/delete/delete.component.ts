import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor( private api: ApiService, public dialogRef: MatDialogRef<DeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: any, 
    ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  delete(){
    this.api.deleteItens(this.data.plate).subscribe(result => {
      this.close();
    })
  }

}
