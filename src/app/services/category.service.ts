import { Injectable } from "@angular/core";
import { Category } from "../models/category.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CategoryService{
    private categoryData: Category[]=[];
    private restUrl="http://localhost:3000/wscategories" ;
constructor(private http:HttpClient) {}

getCategory(){
    return this.http.get<Category[]>(this.restUrl);
}

addCategory(newCategory:Category){
 return this.http.post<Category>(this.restUrl,newCategory);
}

deleteCategory(catId:number){
    return this.http.delete(this.restUrl+"/"+catId);
}

updateCategory(modCategory:Category){
    // Pass data as well as the id that needs to be updated
    return this.http.put<Category>(this.restUrl+"/"+modCategory.id,modCategory);
}

}
