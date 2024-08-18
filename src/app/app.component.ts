import { Component } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  val:string ="String interpolation";

 
  classtype = "text-danger"; 
  Geeks = "GeeksforGeeks"; 

  num: number = 0; 
    employee: Employee[] = [ 
  
        { name: 'Emp1', age: 30 }, 
        { name: 'Emp2', age: 37 }, 
        { name: 'Emp3', age: 26 }, 
  
    ] 
}


