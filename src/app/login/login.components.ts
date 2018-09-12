import { Component } from "@angular/core";
import { LoginService } from "../services/login.service";

@Component({

    template: `<h2>Logged Out</h2>`
})

export class SignOutComponent{

    constructor(private ls:LoginService){}

    ngOnInit(){
        this.ls.setIsLogged(false); 
    }
}

@Component({
   template:`<h2>Invalid Credentials</h2>`
})
export class ErrorComponent {}