import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rango } from 'src/app/models/rango';

@Component({
  selector: 'app-op-rango',
  templateUrl: './op-rango.component.html',
  styleUrls: ['./op-rango.component.css']
})
export class OpRangoComponent implements OnInit {
  public filtro:Rango=new Rango(new Date(),new Date());
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

 filtrarOp(evento:any) : void{

  this.filtro=evento.info;
   // console.log("POR FILTRAR OPS CON FILTROS: ",this.filtro.desde," y ",this.filtro.hasta);
   this._router.navigate(['lista',this.filtro.desde,this.filtro.hasta])
   
   
   
 }
}
