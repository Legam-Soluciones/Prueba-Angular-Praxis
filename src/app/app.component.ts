import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Contac } from './models/contac';


@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Praxis';

  contacArray: Contac[] =
  [
    { id: 1, name: "Ryan", apellido: "McDonal's"},
    { id: 2, name: "Angelica", apellido: "Duarte"},
    { id: 3, name: "Joe", apellido: "Cusack"}
  ];

  selectedContac: Contac = new Contac();

  openForEdit(contac: Contac)
  {
    this.selectedContac = contac;
  }

  addOrEdit()
  {
    if (this.selectedContac.id == 0)
    {
      this.selectedContac.id = this.contacArray.length + 1;
      this.contacArray.push(this.selectedContac)
    }
    this.selectedContac = new Contac();
  }

  delete()
  {
    if (confirm('Are you sure you want to delete it?'))
    {
      this.contacArray = this.contacArray.filter(x => x != this.selectedContac)
      this.selectedContac = new Contac()
    }
  }



}
