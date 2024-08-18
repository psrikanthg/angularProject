import { Component, OnInit, SimpleChanges } from '@angular/core';
import { from } from 'rxjs';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("inside ngOn Changes")
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('OnInit Called');

    const arraySource = from([1, 2, 3, 4, 5]);
   // Emits: 1, 2, 3, 4, 5

   const stringSource = from('Hello');
   // Emits: 'H', 'e', 'l', 'l', 'o'

   const promiseSource = from(fetch('https://api.example.com/data'));
  
  }

  message: string = 'Initial message';

    changeMessage() {
        this.message = 'New message';
    }

}
