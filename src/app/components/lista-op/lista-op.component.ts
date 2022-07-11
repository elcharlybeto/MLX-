import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Operacion } from 'src/app/models/operacion';
import { OperacionService } from 'src/app/services/operacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-op',
  templateUrl: './lista-op.component.html',
  styleUrls: ['./lista-op.component.css'],
})
export class ListaOpComponent implements OnInit {
  public resultado: Operacion[];
  public desde: string;
  public hasta: string;
  public formEdit: boolean;
  public listar : boolean;
  public hoy = new Date();
  public operacion: Operacion = new Operacion(0, '', this.hoy, '', 0, '');
  public tip = '';

  editaForm = new FormGroup({
    fecha: new FormControl(),
    cliente: new FormControl(),
    importe: new FormControl('', [Validators.required, Validators.min(1)]),
    obs: new FormControl(),
  });
  get fecha(): any {
    return this.editaForm.get('fecha');
  }
  get importe(): any {
    return this.editaForm.get('importe');
  }

  constructor(
    private _opService: OperacionService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.resultado = [];
    this.desde = '';
    this.hasta = '';
    this.listar = false;
    this.formEdit = false;
    this.operacion = new Operacion(0, '', this.hoy, '', 0, '');
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.desde = params.desde;
      this.hasta = params.hasta;

      if (this.desde == undefined) {
        this._opService.getOperaciones().subscribe((res) => {
          this.resultado = res.rows;
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
          }else{
            this.listar=true;
          }
        },
        (err) => {
          console.log('cagamos! :(');
          console.log("módulo lista-op");
          Swal.fire({
            icon: 'error',
            text: 'Oops, algo salió mal!',
          })
        });
      } else {
        console.log("POR LLAMAR AL SERVICIO CON PARÁMETROS DESDE: ",this.desde," Y HASTA: ",this.hasta);
        
        this._opService.getRangoOp(this.desde, this.hasta).subscribe((res) => {
          this.resultado = res.rows;
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
          } else{
            this.listar=true;
            //console.log(this.resultado);
            
          }
        },
        (err) => {
          console.log('cagamos! :(');
          console.log("módulo lista-op");
          Swal.fire({
            icon: 'error',
            text: 'Oops, algo salió mal!',
          })
        });
      }
    });
  }

  editar(operacion: Operacion): void {
    this.listar=false;
    this.formEdit = true;
    this.operacion = operacion;
    this.tip =
      this.operacion.Tipo == 'g'
        ? 'En gastos por Repuestos conviene ponerlo'
        : '';

    this.editaForm.setValue({
      fecha: this.operacion.Fecha.toString().split('T')[0],
      cliente: this.operacion.Cliente,
      importe:
        this.operacion.Importe > 0
          ? this.operacion.Importe
          : -this.operacion.Importe,
      obs: this.operacion.Obs,
    });
  }

  borrar(operacion: Operacion): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: '¿Estás seguro?',
        text: '¡Una vez borrada, no se puede recuperar!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, borrarla!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this._opService.borraOp(operacion.Id).subscribe(
            (res) => {
              swalWithBootstrapButtons.fire(
                '¡Borrada!',
                'La operación se eliminó correctamente.',
                'success'
              );
              setTimeout(() => {
                console.log(location.href);
                this.redirectTo(location.href.substring(17));
              }, 1000);
            },

            (err) => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salió mal!',
              });
            }
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            '¡No se eliminó nada! :)',
            'error'
          );
        }
      });
  }
  redirectTo(uri:string){
    console.log("uri: ",uri);
    
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this._router.navigate([uri]));
 }

  refresh(): void {
    window.location.reload();
  }
  oculta() {
    this.formEdit = false;
    this.listar=true;
  }
  onSubmit(form: any) {
    this.operacion.Fecha = form.fecha;
    this.operacion.Cliente = form.cliente.toLowerCase();
    this.operacion.Importe = form.importe;
    this.operacion.Obs = form.obs.toLowerCase();
    this._opService
      .updateOp('http://localhost:3000/update', this.operacion)
      .subscribe(
        (res) => {
          this.resultado = res.rows;
          console.log('cambios guardados! :)');
          Swal.fire({
            icon: 'success',
            text: 'Cambios Guardados!',
          })
        },
        (err) => {
          console.log('cagamos! :(');
          console.log("módulo lista-op");
          Swal.fire({
            icon: 'error',
            text: 'Oops, algo salió mal!',
          })
        }
      );
    this.formEdit = false;
    this.listar= true;
    setTimeout(() => {
      console.log(location.href);
      
      this.redirectTo(location.href.substring(17));
    }, 1000);
    //  this._router.navigate(['/lista']);
  }
}
