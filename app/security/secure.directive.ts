import { Directive ,ElementRef , Renderer,  AfterViewInit, Input} from '@angular/core';
import { Router,RouterModule,RouterLinkWithHref } from '@angular/router';

import { AuthService } from './auth.service';
import { IRights } from './rights';

@Directive({
    selector:'[appSecure]'
})
export class SecureDirective implements  AfterViewInit{
    @Input('appSecure') role:string[];
    constructor(private elementRef:ElementRef,private router:Router,private routerLinke :RouterLinkWithHref,private authService:AuthService){
        this.authService.rightsUpdateEvent$.subscribe((r:IRights) => this.onRightsUpdate(r))
    }
    ngAfterViewInit(){

    }
    onRightsUpdate(rights :IRights):void{
        console.log(this.routerLinke.href);
       
        for(let r of rights.permissions)
        {
            if (this.role.indexOf(r) == -1){
                this.elementRef.nativeElement.style.display='none';
            }
            else{
              this.elementRef.nativeElement.style.display='block';
            }

        } 
        
        console.log(rights);
    }
}