import { HttpClientModule } from '@angular/common/http'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {HttpModule} from '@angular/http';
import { UserService } from './shared_service/user.service';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';


const appRoutes:Routes=[
  {path: '', component:ListuserComponent},
  {path: 'op', component: UserFormComponent}

]; 
@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserFormComponent, 
   
    ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:  [UserService,{provide: APP_BASE_HREF, useValue: '/dist/'}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}
