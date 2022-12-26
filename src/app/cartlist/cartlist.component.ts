import { Component } from '@angular/core';
import { addservice } from '../addservice.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent {
listArray=[];
count=0;
total = 0;
totalitems=0;
  constructor(private  product1: addservice) {
    let count=0;
    this.product1.myEvent.subscribe((msg) => {
      if(!this.listArray.includes(msg)) {
      this.listArray.push(msg)
      this.count += 1;
      }
    } )
  }

  handleCapture(value) {
    console.log(value)
  }
}
