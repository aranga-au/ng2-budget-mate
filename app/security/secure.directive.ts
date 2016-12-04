import { Directive ,ElementRef , Renderer,  AfterViewInit} from '@angular/core';
import { Router,RouterModule,RouterLinkWithHref } from '@angular/router';

@Directive({
    selector:'[appSecure]'
})
export class SecureDirective implements  AfterViewInit{
    constructor(private elementRef:ElementRef,private router:Router,private routerLinke :RouterLinkWithHref,private render:Renderer){

    }
    ngAfterViewInit(){
        console.log(this.routerLinke);
         console.log(this.elementRef);
    }
}