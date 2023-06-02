import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  headername = "Angular 14";

  salary = 0.35;

  isdisabled = false;

  colorname = "green";

  font = '40px';

  classname = "headclass";

  stylevalue = { "color": "green", "font-size": "30px" };

  colors = ['green', 'red', 'yellow', 'black', 'blue', 'white'];

  ngOnInit(): void {

  }

  functionClick(name: string) {
    alert(name);
  }
}
