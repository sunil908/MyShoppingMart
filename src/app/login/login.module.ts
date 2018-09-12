import {NgModule} from "@angular/core";
import {SignInComponent} from "./signin.component"
import { SignUpComponent } from "./signup.component";
import {Router, RouterModule} from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { SignOutComponent, ErrorComponent } from "./login.components";


let loginRoutes = [
    {path:"signin", component: SignInComponent},
    {path:"signup", component: SignUpComponent},
    {path:"signout", component: SignOutComponent},
    {path:"error", component: ErrorComponent}
]

@NgModule({
    declarations: [SignInComponent,SignUpComponent, SignOutComponent, ErrorComponent],
    imports: [RouterModule.forChild(loginRoutes), SharedModule]
})
export class LoggingModule {
    constructor(){
        console.log("Logging Module Constructor");
    }
}