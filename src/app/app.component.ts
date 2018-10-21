import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];

  constructor() {
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
  }
}
