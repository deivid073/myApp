import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/interfaces/product.interface';
import { RegisterService } from 'src/app/services/registerServices.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-show-Products',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css'],

})
export class ShowProductsComponent{
  constructor(private registerService:RegisterService){}

Products = new MatTableDataSource<Product>();

ProductsArr:Product[]=[ ]

filterCity: string = '';
showProduct:any = "";
ngOnInit(): void {
  this.registerService.GetProduct().subscribe(Products=>{
    this.ProductsArr = Products;
    this.ProductsArr.forEach((persona)=>{

      console.log(persona);
    })
    
  });    

}

//Filters
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.Products.filter = filterValue.trim().toLowerCase();
  }

}

