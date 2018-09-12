import {Console} from "@angular/core/src/console"
let x:number;
x=22;
let y="Text213213";
console.log(x);
console.log(y);

export function add(a:number,b:number):number
    {
        return a+b;
    }

    function show(){
        console.log("Show Function");
    }


export class Emp {
         constructor(){
            console.log("Created object");
        }
    }
