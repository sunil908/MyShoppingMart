// Refers to the component decorator from core library
import {Component} from "@angular/core"
//Decorate the class
@Component({
    //Specify the tag name for the component
    selector: "app-root" ,
    //Provide output for the component
    template: `<app-header></app-header>
    <router-outlet></router-outlet>`
})
export class AppComponent{
    constructor(){
        console.log("App Component Constructor");
    }
}