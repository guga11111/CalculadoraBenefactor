import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {


  constructor() { }
  display = '';
  ngOnInit(): void {
  }
  number(number: Number){
    if(number == 1){
      this.display = this.display +  "1";
      console.log("1");
    }
    if(number == 2){
      this.display = this.display +  "2";
      console.log("2");
    }
    if(number == 3){
      this.display = this.display +  "3";
      console.log("3");
    }
    if(number == 4){
      this.display = this.display +  "4";
      console.log("4");
    }
    if(number == 5){
      this.display = this.display +  "5";
      console.log("5");
    }
    if(number == 6){
      this.display = this.display +  "6";
      console.log("6");
    }
    if(number == 7){
      this.display = this.display +  "7";
      console.log("7");
    }
    if(number == 8){
      this.display = this.display +  "8";
      console.log("8");
    }
    if(number == 9){
      this.display = this.display +  "9";
      console.log("9");
    }
    if(number == 11){
      this.display = this.display +  "*";
      console.log("X");
    }
    if(number == 12){
      this.display = this.display +  "-";
      console.log("-");
    }
    if(number == 13){
      this.display = this.display +  "+";
      console.log("+");
    }
    if(number == 14){
      // this.display = this.display +  "=";
      this.display = eval(this.display)
      console.log("=");
    }
    if(number == 15){
      this.display = "";
      console.log("AC");
    }
    if(number == 16){
      this.display = this.display +  ".";
      console.log(".");
    }
  }


}
