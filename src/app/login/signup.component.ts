import {Component} from "@angular/core"

@Component ({
    selector: "app-login-signup",
    template: ` <h4>Welcome</h4>
                <my-sign [title]="signUpHeading"></my-sign>`

})
export class SignUpComponent{
    signUpHeading="Quick Sign Up";
    constructor(){
    }
}