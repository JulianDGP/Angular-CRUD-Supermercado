import { Component, OnInit } from '@angular/core';
import { ProductoI } from '../Models/Producto/Producto.interface';
import { DataService } from '../Services/data.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProovedorI } from '../Models/Producto/Proovedores.interface';
import { PumI } from '../Models/Producto/Pum.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  public productos!: ProductoI[];
  public proovedores!: ProovedorI[];
  public pums!: PumI[];

  constructor(private dataSvc: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataSvc.getAllProovedores().subscribe(data => (this.proovedores = data));
    this.dataSvc.getAllPums().subscribe(data => (this.pums = data));   
  }

  Elnombre="";
  Lamarca="";
  Elpu=0;
  Elpum="";
  ElStock=0;

  saveNew(){
    Swal.fire({
      title: '¿Quieres Añadir un nuevo registro?',
      icon: 'warning',
      showCancelButton: true,
      denyButtonText: `Cancelar`,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',

      confirmButtonText: 'Si, Guardalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        const newProducto ={ nombre: this.Elnombre, marca:this.Lamarca, pu:this.Elpu, pum:this.Elpum, stock:this.ElStock }
        this.dataSvc.addNewProducto(newProducto).subscribe(elproducto =>console.log(elproducto));
                Swal.fire({
                title: 'Guardado',
                confirmButtonText: 'Ir a la tabla'
                }).then((result) => {
                if (result.isConfirmed){
                this.router.navigate(['/Listar']);
                }
                })

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
