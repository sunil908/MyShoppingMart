import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"reversetext"})
export class ReverseTextPipe implements PipeTransform {
    transform(input:string){
        return input.split("").reverse().join("");        
    }
}
