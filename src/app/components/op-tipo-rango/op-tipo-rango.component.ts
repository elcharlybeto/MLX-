import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperacionService } from 'src/app/services/operacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-op-tipo-rango',
  templateUrl: './op-tipo-rango.component.html',
  styleUrls: ['./op-tipo-rango.component.css'],
})
export class OpTipoRangoComponent implements OnInit {
  public hoy = new Date();
  public desde =
    this.hoy.getFullYear() +
    '-' +
    (this.hoy.getMonth() + 1) +
    '-' +
    this.hoy.getDate();
  public hasta =
    this.hoy.getFullYear() +
    '-' +
    (this.hoy.getMonth() + 1) +
    '-' +
    this.hoy.getDate();
  public args = true;
  public tipOp = 'c';
  public resultado: any;
  public tipoString = 'COMPRAS';

  constructor(private _router: Router, private _opService: OperacionService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.args = false;

    console.log(this.tipOp, this.desde, this.hasta);

    this._opService.getOpxTipo(this.tipOp, this.desde, this.hasta).subscribe(
      (res) => {
        this.resultado = res.rows;
        console.log(this.resultado);

        if (this.resultado.length == 0) {
          Swal.fire({
            title: 'No hay operaciones para mostrar...',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
          });
          this._router.navigate(['/']);
        } else {
          switch (this.tipOp) {
            case 'c':
              this.tipoString = 'COMPRAS';
              break;
            case 'v':
              this.tipoString = 'VENTAS';
              break;
            case 'g':
              this.tipoString = 'GASTOS';
              break;
            default:
              this.tipoString = 'REPARACIONES';
              break;
          }
        }
      },
      (err) => {
        console.log('cagamos! :(');
        console.log('módulo op-tipo-rango');
        Swal.fire({
          icon: 'error',
          text: 'Oops, algo salió mal!',
        });
      }
    );
  }
}
