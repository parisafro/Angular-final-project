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
import { ContentComponent } from './content/content.component';
@NgModule({
  imports:[
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path:'',component:ContentComponent},
      {path:'introduction',component:IntroductionComponent},
      // {path:'register', component:RegisterFormComponent},
    ]) ],
  declarations: [ 
    AppComponent, 
    MainPageComponent, IntroductionComponent, ContentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
