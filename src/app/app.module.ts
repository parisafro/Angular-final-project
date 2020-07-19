import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// material components
import { MainPageComponent } from './main-page/main-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { IntroductionComponent } from './introduction/introduction.component';
import { ContentComponent } from './content/content.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  imports:[
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path:'',component:ContentComponent},
      {path:'introduction',component:IntroductionComponent},
      {path:'register',component:RegisterComponent},
      {path:'contact',component:ContactComponent},
    ]) ],
  declarations: [ 
    AppComponent, 
    MainPageComponent, IntroductionComponent, ContentComponent, RegisterComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
