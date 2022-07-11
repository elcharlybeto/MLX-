import { Component, OnInit } from '@angular/core';
import { OperacionService } from 'src/app/services/operacion.service';
import Swal from 'sweetalert2';
import { HoyComponent } from '../hoy/hoy.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  public ingresosHoy = 0;
  public egresosHoy = 0;
  public ingresosMes = 0;
  public egresosMes = 0;
  public ingresosAnio = 0;
  public egresosAnio = 0;
  public hoy = new Date();
  public ultimoDiaMes = () => {
    switch (this.hoy.getMonth() + 1) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return '31';
      case 2:
        return '28';
      default:
        return '30';
    }
  };

  public desdeM = this.hoy.getFullYear()+'-'+(this.hoy.getMonth() + 1)+'-01';
  public hastaM = this.hoy.getFullYear()+'-'+(this.hoy.getMonth() + 1)+'-'+ this.ultimoDiaMes();
  public rutaM = "lista/"+this.desdeM+"/"+this.hastaM;

  public desdeA =  this.hoy.getFullYear()+'-01-01';
  public hastaA = this.hoy.getFullYear()+'-12-31';
  public rutaA = "lista/"+this.desdeA+"/"+this.hastaA;

  constructor(private _opService: OperacionService) {}

  ngOnInit(): void {

    console.log("ruta: ",this.rutaM);
    
    let resH: any;
    this._opService.getResHoy().subscribe(
      (res) => {
        resH = res.rows;
        this.ingresosHoy = resH[0].ingresos != null ? resH[0].ingresos : 0;
        this.egresosHoy = resH[1].ingresos != null ? -resH[1].ingresos : 0;
      },
      (err) => {
        console.log('cagamos! :(');
        console.log("módulo results");
        Swal.fire({
          icon: 'error',
          text: 'Oops, algo salió mal!',
        });
      }
    );

    let resM: any;
    this._opService.getResMes().subscribe(
      (res) => {
        resM = res.rows;
        this.ingresosMes = resM[0].ingresos != null ? resM[0].ingresos : 0;
        this.egresosMes = resM[1].ingresos != null ? -resM[1].ingresos : 0;
      },
      (err) => {
        console.log('cagamos! :(');
        console.log("módulo results")
        Swal.fire({
          icon: 'error',
          text: 'Oops, algo salió mal!',
        });
      }
    );

    let resA: any;
    this._opService.getResAnio().subscribe(
      (res) => {
        resA = res.rows;
        this.ingresosAnio = resA[0].ingresos != null ? resA[0].ingresos : 0;
        this.egresosAnio = resA[1].ingresos != null ? -resA[1].ingresos : 0;
      },
      (err) => {
        console.log('cagamos! :(');
        console.log("módulo results")
        Swal.fire({
          icon: 'error',
          text: 'Oops, algo salió mal!',
        });
      }
    );
  }
}
