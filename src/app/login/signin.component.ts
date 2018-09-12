import {Component} from "@angular/core"

@Component ({
    selector: "app-login-signin",
    template: ` <h4>Welcome {{signInUser}} </h4>
                <my-sign [title]="signInHeading" (myEvent)="handleMyEvent($event)"></my-sign>`
})
export class SignInComponent{
    signInUser="Guest"
    signInHeading="Sign-In"
    constructor(){
    }

    handleMyEvent(obj) {
        this.signInUser=obj.frmUser;
    }
}