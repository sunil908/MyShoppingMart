import {Component} from "@angular/core";

@Component({
    selector: "app-menu-link",
    template: "Resource link for app-menu-link"
})
export class MenuLinksComponent {
    constructor()
    {
        console.log("Menu Links Component");
    }
}

@Component ({
    selector: "app-home",
    template: "<h3>Welcome to My Shopping App</h3>"
})
export class HomeComponent {
    constructor() {
        console.log("Home Component");
    }
}

@Component ({
    selector: "app-list",
    template: `<div class="row mt-2">
                <div class="col-sm-7 ">
                    <app-products></app-products>
                </div>
               <div class="col-sm-5 table-bordered">
                <app-cartitems></app-cartitems>     
               </div>
               </div> `

})
export class ListComponent {
    constructor()
    {
        console.log("List Component");
    }
}

@Component ({
    selector: "app-notfound",
    template: "Not found the Resource"
})
export class NotFoundComponent {
    constructor()
    {
        console.log("NotFoundComponent");
    }
}