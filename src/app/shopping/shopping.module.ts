import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ProductsComponent } from './products.component';
import { CartitemsComponent } from './cartitems.component';
import {FormsModule} from "@angular/forms";

@NgModule({  declarations: [ProductsComponent, CartitemsComponent],
    exports: [ProductsComponent, CartitemsComponent],
    imports: [CommonModule,FormsModule]
})
export class ShoppingModule{
    constructor(){
        console.log("Shopping Module Constructor")
    }
}