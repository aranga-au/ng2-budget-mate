import { Injectable , EventEmitter} from '@angular/core';

import { IRights } from './rights';
@Injectable()
export class AuthService{
    public rightsUpdateEvent$ = new EventEmitter<IRights>();

    public update(role:string[]):void{
           this.rightsUpdateEvent$.emit({id:1,permissions:role});
    }
}