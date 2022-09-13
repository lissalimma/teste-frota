import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  formulario: FormGroup;
  constructor( private form: FormBuilder) { 
    this.formulario = this.form.group({
      plate: "",
      model:"",
      manufacturer: "",
      color: "",
      status:""
    })
  }

  save (): void {
    console.log(this.formulario.value);
  }

  ngOnInit(): void {
    
  }

}
