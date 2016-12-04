import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { CategoryListComponent } from './category-list.component';
import { categoryRoutes } from './category.route';


@NgModule({
    imports:[RouterModule.forChild(categoryRoutes)],
    declarations:[CategoryListComponent],
    
})
export class CategoryModule{

};