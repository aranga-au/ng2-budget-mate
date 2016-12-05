import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes,RouterLink} from '@angular/router';


import { AppComponent }  from './app.component';
import { appRoute } from './app.route';
import { NavBarComponent} from './main/navbar.component';
import { CategoryModule } from './category/category.module';
import { SecureDirective } from './security/secure.directive';
import { AuthService } from './security/auth.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports:      [ 
      BrowserModule , 
      CategoryModule,
      RouterModule.forRoot(appRoute)],
  exports:[RouterModule,RouterLink],
  declarations: [ AppComponent, HomeComponent,NavBarComponent,SecureDirective],
  providers:[AuthService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
