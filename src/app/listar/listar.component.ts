import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductoI } from '../Models/Producto/Producto.interface';
import { ProovedorI } from '../Models/Producto/Proovedores.interface';
import { PumI } from '../Models/Producto/Pum.interface';
import { DataService } from '../Services/data.service';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  public isDisabled=null;

  public productos!: ProductoI[];
  public proovedores!: ProovedorI[];
  public pums!: PumI[];

  pruebaid=0;
  editnom="";
  editLamarca="";
  editElpu=0;
  editElpum="";
  editElStock=0;

  constructor(private dataSvc: DataService) { }

  ngOnInit() {

  this.dataSvc.getAllProductos().subscribe(data => (this.productos = data));
  this.dataSvc.getAllProovedores().subscribe(data => (this.proovedores = data));
  this.dataSvc.getAllPums().subscribe(data => (this.pums = data));   
  // imprimir data por consola // this.dataSvc.getAllProductos().subscribe(data => console.log( data));
  }
  mostrar(indice:number, id?: number, Elnombre?:string, Lamarca?:string, Elpu?:number, Elpum?:string, ElStock?:number){
    this.pruebaid= id!;
    this.editnom =Elnombre!;
    this.editLamarca= Lamarca!;
    this.editElpu = Elpu!;
    this.editElpum=Elpum!;
    this.editElStock=ElStock!;

    Swal.fire({
      title: 'Datos a modificar',
      width: 600,
      showCancelButton: true,
      denyButtonText: `Cancelar`,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Editar',
      html:
      '<table><tr> <td style="text-align:left"> <label >Id</label> </td>'  +
       '<td style="text-align:left"><input id="swal-input1" value="' +id! +'" class="swal2-input"> </td> </tr>' +
       '<td style="text-align:left"> <label >Nombre</label> </td>' +
       '<td style="text-align:left"><input id="swal-input2" value="' +Elnombre! +'" class="swal2-input"> </td> </tr> ' +
       '<td style="text-align:left"> <label>Marca</label> </td>' +
       '<td style="text-align:left"><input id="swal-input3" value="' +Lamarca! +'" class="swal2-input"> </td> </tr> ' +
       '<td style="text-align:left"> <label>Precio unitario</label> </td>' +
       '<td style="text-align:left"><input id="swal-input4" value="' +Elpu! +'" class="swal2-input">  </td> </tr> ' +
       '<td style="text-align:left"> <label>Unidad de medida</label> </td>' +
       '<td style="text-align:left"><input id="swal-input6" value="' +Elpum! +'" class="swal2-input"> </td> </tr> ' +
       '<td style="text-align:left"> <label>Stock </label>  </td>' +
       '<td style="text-align:left"><input id="swal-input7" value="' +ElStock! +'" class="swal2-input">  </td> </tr> ',
      focusConfirm: false,
      preConfirm: () => {
        return [
          
        ]
      }
    }).then((result) => {
      if (result.isConfirmed) {
        //this.productos.splice(indice,1);
        //this.editar();
        Swal.fire(
          'Editado!',
          'El registro ha sido editado.',
          'success'
        )
      }else{
        Swal.fire(
          'Se ha cancelado la peticion!',
          '',
          'error'
        )
      }
    })
  }

  editar(){
    const updated ={ id:this.pruebaid, nombre: this.editnom, marca:this.editLamarca, pu:this.editElpu, pum:this.editElpum, stock:this.editElStock}
    this.dataSvc.updateProducto(updated).subscribe(elproducto =>console.log(elproducto));
  }

  borrar(indice:number, id?: number){
    console.log(id);
      Swal.fire({
        title: '¿Estas seguro de que quieres borrar el registro?',
        text:"aver",
        icon: 'warning',
        showCancelButton: true,
        denyButtonText: `Cancelar`,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Si, Borralo!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.productos.splice(indice,1);
          this.dataSvc.deleteProducto(id).subscribe(data => console.log(data));
          Swal.fire(
            'Borrado!',
            'El registro ha sido borrado.',
            'success'
          )
        }else{
          Swal.fire(
            'Se ha cancelado la peticion!',
            '',
            'error'
          )
        }
      })
  }
}
