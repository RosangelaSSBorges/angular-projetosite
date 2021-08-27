import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {
  n: number = 10
  ;
  
  

  constructor() {}
  ngOnInit() {}

    getNumerosComponent(){
    let list: number[] = [];
    for (let i = 1; i <= this.n; i++) {
      list.push(10 * Math.random());
    }
    return list;
     

  }

  

}