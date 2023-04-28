import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  unBooleano:boolean=false;
  changeDarkLigth(){
  this.unBooleano= !this.unBooleano;}
}
