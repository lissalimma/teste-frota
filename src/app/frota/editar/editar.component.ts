import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  formulario: FormGroup;
  constructor(private form: FormBuilder, private api: ApiService, private route: Router) {
    this.formulario = this.form.group({
      plate: "",
      model: "",
      manufacturer: "",
      color: "",
      status: ""
    })
  }

  save(): void {
    this.api.save(this.formulario.value).subscribe({
      this.route.navigate(['../']);

    })
  }

  ngOnInit(): void {

  }

}
