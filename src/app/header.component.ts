import {Component} from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})

export class HeaderComponent {
    appHeading:string;
    userName="Guest";

    constructor(){
        console.log("Header Component Created");
        this.appHeading="My Shopping App";
    }

    showUserName():string{
        return this.userName;
    }
}