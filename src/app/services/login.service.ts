import { Injectable } from "@angular/core";

@Injectable()
export class LoginService{
    private userData:string="Visitor"
    private isLoggedIn:boolean=false
    constructor(){}

    setUserData(userData:string){
        this.userData=userData;
    }

    getUserData(){
        return this.userData;
    }

    isValidUser(username:string, pwd:string){
        if(username=="admin") {
            this.setIsLogged(true)
            return true;
        }
        else {
            this.setIsLogged(false);
            return false;
        }
    }

    getIsLogged(){
        return this.isLoggedIn;
    }

    setIsLogged(newval:boolean){
        this.isLoggedIn=newval;
    }

}
