import { Directive ,ElementRef , Renderer,  AfterViewInit} from '@angular/core';
import { Router,RouterModule,RouterLinkWithHref } from '@angular/router';

import { AuthService } from './auth.service';
import { IRights } from './rights';

@Directive({
    selector:'[appSecure]'
})
export class SecureDirective implements  AfterViewInit{
    constructor(private elementRef:ElementRef,private router:Router,private routerLinke :RouterLinkWithHref,private authService:AuthService){
        this.authService.rightsUpdateEvent$.subscribe((r:IRights) => this.onRightsUpdate(r))
    }
    ngAfterViewInit(){
        console.log(this.routerLinke);
         console.log(this.elementRef);
    }
    onRightsUpdate(rights :IRights):void{
        console.log(rights);
    }
}