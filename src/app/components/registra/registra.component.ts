import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Operacion } from 'src/app/models/operacion';
import { OperacionService } from 'src/app/services/operacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registra',
  templateUrl: './registra.component.html',
  styleUrls: [],
})
export class RegistraComponent implements OnInit {
  public Tipo = '';
  public operacion: Operacion = new Operacion(0, this.Tipo, new Date(), '', 0, '');

  constructor(
    private _opService: OperacionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.Tipo = params.Tipo;
    });
  }
  
  registrarOp(evento: any): void {
    this.operacion = evento.info;
    this.operacion.Cliente=this.operacion.Cliente.toLowerCase();
    this.operacion.Obs=this.operacion.Obs.toLowerCase();
    this.operacion.Tipo = this.Tipo;
    switch (this.Tipo) {
      case 'c':
        this._opService
          .createOp('http://localhost:3000/compra', this.operacion)
          .subscribe(
            (res) => Swal.fire({
              icon: 'success',
              text: 'Operación Registrada!',
            }),
            (err) => {console.log('error');
            console.log("módulo registra");
            Swal.fire({
              icon: 'error',
              text: 'Operación NO Registrada!',
            })}
          );
        break;
        case 'v':
          this._opService
            .createOp('http://localhost:3000/venta', this.operacion)
            .subscribe(
              (res) => Swal.fire({
                icon: 'success',
                text: 'Operación Registrada!',
              }),
              (err) => {console.log('error');
              console.log("módulo registra");
              Swal.fire({
                icon: 'error',
                text: 'Operación NO Registrada!',
              })}
            );
          break;
          case 'r':
        this._opService
          .createOp('http://localhost:3000/repa', this.operacion)
          .subscribe(
            (res) => Swal.fire({
              icon: 'success',
              text: 'Operación Registrada!',
            }),
            (err) => {console.log('error');
            console.log("módulo registra");
            Swal.fire({
              icon: 'error',
              text: 'Operación NO Registrada!',
            })}
          );
        break;
        case 'g':
        this._opService
          .createOp('http://localhost:3000/gasto', this.operacion)
          .subscribe(
            (res) => Swal.fire({
              icon: 'success',
              text: 'Operación Registrada!',
            }),
            (err) => {console.log('error');
            console.log("módulo registra");
            Swal.fire({
              icon: 'error',
              text: 'Operación NO Registrada!',
            })}
          );
        break;
      
    }
    this._router.navigate(['/'])
  }
}

