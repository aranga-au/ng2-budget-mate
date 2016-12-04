import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoute: Routes = [ {
        path:'welcome',
        component: HomeComponent,
        pathMatch:'full',
        data:{
            
        }

    },
    {
        path:'**',
        redirectTo:'welcome'
    }
];