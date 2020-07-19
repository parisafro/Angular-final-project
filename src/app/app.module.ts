import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// material components
import { MainPageComponent } from './main-page/main-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { IntroductionComponent } from './introduction/introduction.component';
@NgModule({
  imports:[
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path:'',component:MainPageComponent},
    ]) ],
  declarations: [ 
    AppComponent, 
    MainPageComponent, IntroductionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
