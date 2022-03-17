import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InitialloginComponent } from './logintype/initiallogin/initiallogin.component';
import { LogintypeComponent } from './logintype/logintype.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'logintype',component:LogintypeComponent},
  {path:'login',component:InitialloginComponent},
  //{path:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
