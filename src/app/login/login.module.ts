import {NgModule} from "@angular/core";
import {SignInComponent} from "./signin.component"
import { SignUpComponent } from "./signup.component";
import {Router, RouterModule} from "@angular/router";
import { SharedModule } from "../shared/shared.module";


let loginRoutes = [
    {path:"signin", component: SignInComponent},
    {path:"signup", component: SignUpComponent}
]

@NgModule({
    declarations: [SignInComponent,SignUpComponent],
    imports: [RouterModule.forChild(loginRoutes), SharedModule]
})
export class LoggingModule {
    constructor(){
        console.log("Logging Module Constructor");
    }
}