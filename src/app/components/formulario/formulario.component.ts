import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Operacion } from 'src/app/models/operacion';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output()
  enviar = new EventEmitter();
  @Input()
  Tipo: string = '';

  public hoy = new Date();
  public operacion = new Operacion(0, '', this.hoy, '', 0, '');
  public tip = '';

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {
   
    this.tip =
      this.Tipo == 'g' ? 'En gastos por Repuestos conviene ponerlo' : '';
  }
  onSubmit(info: Operacion) {
 
    this.enviar.emit({ info: this.operacion });
    this.operacion = {
      Id: 0,
      Tipo: this.Tipo,
      Fecha: this.hoy,
      Cliente: '',
      Importe: 0,
      Obs: '',
    };
  }
}

