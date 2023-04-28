import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, throwError } from "rxjs";
import { Product } from "../interfaces/product.interface";
import { FormControl, Validators } from "@angular/forms";

@Injectable()
export class RegisterService {
    
    private urlLocal = "http://localhost:8080/product";
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
  
    constructor(private http: HttpClient) { }

    GetProduct(): Observable<Product[]> {
        
        return this.http.get<Product[]>(this.urlLocal);
    }

    PostProducts(Product: Product): Observable<Product> {
        console.log('Request payload:', JSON.stringify(Product));

        return this.http.post<Product>(this.urlLocal, JSON.stringify(Product), this.httpOptions).pipe(
            catchError((err) => {
                console.log('Error caught creating product:');
                console.log(err);
                return throwError(err);
            })
        );
    }
    DeleteProduct(id: number): Observable<any> {
        const urlDelete = this.urlLocal + id
        return this.http.delete(urlDelete).pipe(
            catchError((err) => {
                console.log('Error caught deleting product:');
                console.log(err);
                return throwError(err);
            })
        );
    }

    Products: Product[] = [];

    public sendProducts(formProducts: Product): Observable<Product[]> {
        this.Products.push({
            name: formProducts.name,
            birthDate: formProducts.birthDate,
            email: formProducts.email,
            gender: formProducts.gender,
            address: formProducts.address,
            city: formProducts.city,
            state: formProducts.state,
            postalCode: formProducts.postalCode,
            services: formProducts.services
        });
        console.log(this.Products);
        return of(this.Products);
    }


    public getProducts(): Observable<Product[]> {
        return of(this.Products)
    }
}


