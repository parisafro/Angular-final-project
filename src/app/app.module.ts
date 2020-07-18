import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// material components
import { MainPageComponent } from './main-page/main-page.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports:[
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule ],
  declarations: [ 
    AppComponent, 
    MainPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
