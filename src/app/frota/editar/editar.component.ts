import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  id: string = "";
  formulario: FormGroup;
  constructor(private form: FormBuilder, private api: ApiService, private route: Router, private activated: ActivatedRoute) {
    this.formulario = this.form.group({
      plate: "",
      model: "",
      manufacturer: "",
      color: "",
      status: "",
      id: ""
    })
    this.activated.params.subscribe(params => {
      this.id = params['plate'];
      this.api.getPlate(this.id).subscribe((res: any)=>{
        this.formulario.patchValue({
          plate: res.plate,
          id: res.id,
          model: res.model,
          manufacturer: res.manufacturer,
          color: res.color,
          status: res.status
        })
      })
    });
  }

  save(): void {
    this.api.save(this.formulario.value).subscribe(() => {
      this.route.navigate(['/']);
    })
  }

  edit(): void {
    console.log(this.formulario.value.id)
    this.api.edit(this.formulario.value).subscribe((res) => {
      this.route.navigate(['/']);
      
    })
  }

  ngOnInit(): void {

  }

}
