import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
  import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogintypeComponent } from './logintype/logintype.component';
import { HomeComponent } from './home/home.component';
import { InitialloginComponent } from './logintype/initiallogin/initiallogin.component';

@NgModule({
  declarations: [
    AppComponent,
    LogintypeComponent,
    HomeComponent,
    InitialloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
