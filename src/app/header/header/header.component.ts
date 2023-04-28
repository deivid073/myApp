import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  myClass:string='black';

  changeBg(n:number) {
    if(n=1){
      this.myClass='orange';
    }
    else if(n=2){
      this.myClass='yellow';
    }
    else this.myClass='pink';
  }
  isCurrentRouteBody() {
    return this.router.url === '/body';
  }
  
}
