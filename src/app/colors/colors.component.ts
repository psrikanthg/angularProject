import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RedComponent } from '../red/red.component';
import { GreenComponent } from '../green/green.component';
@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
})
export class ColorsComponent {
 @ViewChild('container', {read: ViewContainerRef, static: true}) container!: ViewContainerRef;
  constructor() {}
  ngOnInit() {}
  buttonClick(component: string) {
    this.container.clear();
    let dynamicComponent = this.getComponent(component);
    if (dynamicComponent) {
      this.container.createComponent(dynamicComponent);
    }
  }
  getComponent(componentName: string) {
    switch (componentName) {
      case 'red':
        return RedComponent;
      case 'green':
        return GreenComponent;
      default:
        return;
    }
  }
}