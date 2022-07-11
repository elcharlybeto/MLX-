import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hoy',
  templateUrl: './hoy.component.html',
  styleUrls: ['./hoy.component.css']
})
export class HoyComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
    let hoy=new Date();
    let filtro=hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();
    this._router.navigate(['lista/'+filtro+'/'+filtro])
  }

   
   
   
 

}

