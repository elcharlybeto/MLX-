import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operacion } from '../models/operacion';
import { Rango } from '../models/rango';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {

 
  constructor(private _http: HttpClient ) {}  
  
  getOperaciones(): Observable<any>{
    return this._http.get('http://localhost:3000/lista');
  }

  getRangoOp(desde:string,hasta:string): Observable<any>{

    let headers= new HttpHeaders().set('Content-Type','application/json');
    return this._http.get('http://localhost:3000/listar/'+desde+'/'+hasta,{headers:headers})
  }
  
  createOp(url:string,op:Operacion): Observable<any>{
    let body=JSON.stringify(op);
    let headers= new HttpHeaders().set('Content-Type','application/json');
    console.log(body);
    
    return this._http.post(url,body,{headers:headers})
  }

  borraOp(id:number): Observable<any>{
    return this._http.delete('http://localhost:3000/borra/'+id);

  }

  updateOp(url:string,op:Operacion): Observable<any>{
    let body=JSON.stringify(op);
    let headers= new HttpHeaders().set('Content-Type','application/json');
    console.log(body);
    
    return this._http.put(url,body,{headers:headers})
  }

  
  getResHoy(): Observable<any>{
    return this._http.get('http://localhost:3000/result/h');
  }

  getResMes(): Observable<any>{
    return this._http.get('http://localhost:3000/result/m');
  }

  getResAnio(): Observable<any>{
    return this._http.get('http://localhost:3000/result/a');
  }

  getOpxTipo(tipo:string,desde:string,hasta:string): Observable<any>{
    return this._http.get('http://localhost:3000/oxtr/'+tipo+'/'+desde+'/'+hasta);
  }

  getTop(): Observable<any>{
    return this._http.get('http://localhost:3000/top');
  }
}