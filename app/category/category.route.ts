import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list.component';

export const categoryRoutes: Routes = [ {
        path: 'category', 
        component: CategoryListComponent,
        data :{
            titel:'Category',
            role:['admin','user']
        } 
    }
];


