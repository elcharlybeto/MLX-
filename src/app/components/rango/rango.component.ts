import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Rango } from 'src/app/models/rango';

@Component({
  selector: 'app-rango',
  templateUrl: './rango.component.html',
  styleUrls: ['./rango.component.css'],
})
export class RangoComponent implements OnInit {
  @Output()
  filtro = new EventEmitter();

  public rango= new Rango(new Date(),new Date());

  constructor() {
   
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.filtro.emit({ info: this.rango});
    

  }
}
