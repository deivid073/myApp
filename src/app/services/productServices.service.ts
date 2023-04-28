import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class ProductsService{
    constructor(){}
    products:Product[] = [ ];

    public sendProducts(name:string, price:string):Observable<Product[]>{
        if(name != "" && price != ""){
            this.products.push({name: name, price: price});
        }
        return of(this.products);
    }

}
export interface Product {name: string;  price: string; }