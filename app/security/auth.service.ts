import { Injectable , EventEmitter} from '@angular/core';

import { IRights } from './rights';
@Injectable()
export class AuthService{
    public rightsUpdateEvent$ = new EventEmitter<IRights>();

    public update():void{
           this.rightsUpdateEvent$.emit({id:1});
    }
}