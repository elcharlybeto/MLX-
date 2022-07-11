import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperacionService } from 'src/app/services/operacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  public resultado: any;


  constructor(private _router: Router, private _opService: OperacionService) {}

  ngOnInit(): void {

    this._opService.getTop().subscribe(
      (res) => {
        this.resultado = res.rows;
        console.log(this.resultado);

        if (this.resultado.length == 0) {
          Swal.fire({
            title: 'No hay clientes para mostrar...',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
          });
          this._router.navigate(['/']);
        }
      },
      (err) => {
        console.log('cagamos! :(');
        console.log('módulo top');
        Swal.fire({
          icon: 'error',
          text: 'Oops, algo salió mal!',
        });
      }
    );
  }

}
