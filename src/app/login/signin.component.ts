import {Component} from "@angular/core"
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";


@Component ({
    selector: "app-login-signin",
    template: ` <h4>Welcome {{signInUser}} </h4>
                <my-sign [title]="signInHeading" (myEvent)="handleMyEvent($event)"></my-sign>`
})
export class SignInComponent{
    signInUser:string;
    signInHeading="Sign-In"
    constructor(private ls:LoginService, private signinrouter:Router){}

    handleMyEvent(obj) {
        if(this.ls.isValidUser(obj.frmUser,obj.pwd)) {
            this.signinrouter.navigate(['/manage'])
        }
        else {
            this.signinrouter.navigate(['/error'])
        }
        this.signInUser=obj.frmUser;
        this.ls.setUserData(obj.frmUser);
    }
}