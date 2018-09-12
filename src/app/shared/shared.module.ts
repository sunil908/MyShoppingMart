import {NgModule } from "@angular/core";
import {MySignComponent } from "./mysign.component";
import {ProductService } from "../services/product.service";
import {CartService} from "../services/cart.service";
import {LoginService} from "../services/login.service";
import {CategoryService} from "../services/category.service";
import {HttpClientModule} from "@angular/common/http";
import {LoginGuard} from "../services/login.guard"


@NgModule ({
    declarations: [MySignComponent],
    // share the component with other modules
    exports: [MySignComponent],
    providers: [ProductService, CartService, LoginService,CategoryService, LoginGuard],
    imports : [HttpClientModule,]
})
export class SharedModule{
    constructor(){
        console.log("Shared Module");
    }
}