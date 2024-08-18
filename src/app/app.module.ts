import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyComponentComponent } from './my-component/my-component.component';
import { ColorsComponent } from './colors/colors.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ColorsComponent,
    RedComponent,
    GreenComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
