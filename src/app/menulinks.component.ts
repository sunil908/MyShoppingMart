import {Component} from "@angular/core";

@Component ({
    selector: "app-home",
    template: `<h3>Welcome to My Shopping App
                <br>Price: {{price|currency:"INR"}}
                <br>Date {{myDate|date:"MM/dd/yyyy"}}
                <br>Product Name {{productName | uppercase | reversetext}}
                </h3>`
})
export class HomeComponent {
    public price=100.1234;
    public myDate=new Date();
    public productName="sony tv"
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
