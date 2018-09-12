import {NgModule} from "@angular/core";
import {Router, RouterModule} from "@angular/router";
import {AppComponent } from "./app.component";
import {HeaderComponent } from "./header.component";
import {BrowserModule} from "@angular/platform-browser"
import {ShoppingModule } from "./shopping/shopping.module";
import {LoggingModule } from "./login/login.module";
import {HomeComponent, NotFoundComponent, ListComponent} from "./menulinks.component"
import {ReverseTextPipe} from "./pipetransforms/reversetext.pipe";
let appRoutes = [
{path:""    ,component:HomeComponent},
{path:"list", component: ListComponent},
{path:"**", component: NotFoundComponent}
];

@NgModule({
    //Registor all the Components within this module\
    declarations: [AppComponent,HeaderComponent, HomeComponent, NotFoundComponent, ListComponent, ReverseTextPipe],
    //specify the root component
    bootstrap: [AppComponent],
    //specify the module dependecies
    imports: [BrowserModule, LoggingModule,ShoppingModule, RouterModule.forRoot(appRoutes,{useHash:true})]

})
export class AppModule {
    constructor(){
        console.log("App module Constructor");
    }
}