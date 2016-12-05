import { Component } from '@angular/core';
import { AuthService } from '../security/auth.service';
@Component({
    moduleId:module.id,
    templateUrl:'home.component.html'
})
export class HomeComponent{
    
    username:string="hello";

    constructor(private authService:AuthService){

    }
    onClick():void{
        this.authService.update([this.username]);
        console.log('hellooo'+this.username);
    }
}