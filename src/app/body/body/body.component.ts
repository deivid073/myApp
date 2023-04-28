import { Component } from '@angular/core';
import serie from '../../interfaces/serie.interface'
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {


  myClass:string='text-danger'
  // myClass1='text-success';
  // myClass2='text-warning;';
  clickNum:number=0;

  changeClass(){
    if(this.myClass==='text-danger'){
  this.myClass = 'text-warning';
  } else{
    this.myClass='text-danger'
  }
}

unBooleano:boolean=false;
changeClassBoolean(){
  this.unBooleano= !this.unBooleano;
}
miObjetoDeClase={
  'badge':true,
  'badge-pill':true,
  'badge-primary':true,
  'text-success':true
};

myStyle={
  'color':'red',
  'Font-weight':'bold'
};






















































































































































































































































































































title = 'myApp';
series:serie[] =[
  {imageUrl:'../../../assets/images/got.png', name:'Game Of Thrones', rating:9.5},
  {imageUrl:'../../../assets/images/bb.png', name:'Breaking Bad', rating:9.0},
  {imageUrl:'../../../assets/images/st.png', name:'Stanger Things', rating:8.2},
  {imageUrl:'../../../assets/images/lof.png', name:'The Last Of Us', rating:7.5},
  {imageUrl:'../../../assets/images/twd.png', name:'The Walking Dead', rating:5},
]
deportistas: string[] = ['Pedri','Raphinha','Messi']
;
}

export class testComponent{

}


