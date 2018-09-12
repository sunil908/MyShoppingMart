import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ProductsComponent } from './products.component';
import { CartitemsComponent } from './cartitems.component';
import {FormsModule} from "@angular/forms";
import {CategoriesComponent } from './categories.component';
import {RouterModule} from "@angular/router"
import {LoginGuard} from "../services/login.guard"

@NgModule({  declarations: [ProductsComponent, CartitemsComponent, CategoriesComponent],
    exports: [ProductsComponent, CartitemsComponent],
    imports: [CommonModule,FormsModule,
        RouterModule.forChild(
            [{path:"manage", component: CategoriesComponent,canActivate:[LoginGuard]}]
        )
    ]
    
})
export class ShoppingModule{
    constructor(){
        console.log("Shopping Module Constructor")
    }
}