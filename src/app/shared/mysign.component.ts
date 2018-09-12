import { Component, Input, Output, EventEmitter, OnDestroy, OnInit, OnChanges } from "@angular/core";

@Component ({
    selector: "my-sign",
    template: `<br>
            <h3 class="ml-3">{{title}}</h3>
            <br>
            <form class="ml-5">
                 UserName: <input type="text" placeholder="Enter User Name" #frmUser><br><br>
                 Password : <input type="password" placeholder="Enter Password" #frmPwd><br><br>
                 <button type="button" class="btn btn-primary" (click)="handleButtonClick(frmUser.value, frmPwd.value)">
                        {{title}}
                 </button>
            </form>
    `
})
export class MySignComponent implements OnDestroy, OnInit, OnChanges {
    @Input ()
    title:string;
    @Output()
    myEvent= new EventEmitter();
    constructor(){
        console.log("MySign Shared Component Constructor");
    }
    handleButtonClick(frmUser:string, frmPwd:string):void {
        console.log("Button is clicked Username",frmUser," Pwd: ", frmPwd);
        this.myEvent.emit({frmUser,frmPwd})
    }

    ngOnDestroy(){
        console.log("MySign Shared Component Destroyed",this.title);
    }

    ngOnInit() {
        console.log("My Sign Component NG ON INIT",this.title);
    }

    ngOnChanges() {
        console.log("My Sign Component NG ON CHANGES");
    }

}




