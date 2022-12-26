import { Component } from '@angular/core';
import { addservice } from '../addservice.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  
listArray = ["Shirt","Shoe","Socks"]

  constructor(private  product1: addservice) {

  }
  onAdd(message){
    console.log("inside onAdd()")
    this.product1.myEvent.emit(message)
  } 

}
