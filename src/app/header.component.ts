import {Component} from "@angular/core";
import { LoginService } from "./services/login.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})

export class HeaderComponent {
    appHeading:string;
    userName="Visitor";

    constructor(private lsvc:LoginService){
        console.log("Header Component Created");
        this.appHeading="My Shopping App";
    }

    showUserName():string{
        return this.lsvc.getUserData();
    }

    isUserLoggedIn(){
        return this.lsvc.getIsLogged();
    }
}