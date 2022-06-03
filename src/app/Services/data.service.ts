import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductoI } from '../Models/Producto/Producto.interface';
import { HttpHeaders } from '@angular/common/http';
import { ProovedorI } from '../Models/Producto/Proovedores.interface';
import { PumI } from '../Models/Producto/Pum.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlApiListar ='http://165.232.153.114:8039/service/api/Inventory/Listar';
  private urlApiListarProovedores='http://165.232.153.114:8039/service/api/Inventory/toProveedores';
  private urlApiListarPums ='http://165.232.153.114:8039/service/api/Inventory/toPums';

  private urlApiCrear ='http://165.232.153.114:8039/service/api/Inventory/create';
  private urlApiBorrar ='http://165.232.153.114:8039/service/api/Inventory/delete'
  private urlApiActualizar ='http://165.232.153.114:8039/service/api/Inventory/update';

  constructor(private http: HttpClient) { }
  //    httpOptions = {
  //    headers: new HttpHeaders({
  //      'Content-Type':  'application/json',
  //      'Authorization': 'Basic ' + btoa('adminApi:Admmin***2022')
  //    })
  // };
  
  getAllProductos(): Observable<ProductoI[]>{
    return this.http.get<ProductoI[]>(this.urlApiListar );
  }

  getAllProovedores(): Observable<ProovedorI[]>{
    return this.http.get<ProovedorI[]>(this.urlApiListarProovedores);
  }

  getAllPums(): Observable<PumI[]>{
    return this.http.get<PumI[]>(this.urlApiListarPums);
  }

  addNewProducto(elproducto:ProductoI): Observable<ProductoI>{
    return this.http.post<ProductoI>(this.urlApiCrear, elproducto);
  }
  deleteProducto(id?: number):Observable<any>{
     return this.http.delete<any>(this.urlApiBorrar +'?id='+ id);
  }

  updateProducto(elproducto:ProductoI):Observable<ProductoI>{
    return this.http.put<ProductoI>(this.urlApiActualizar, elproducto);
  }
  

}
