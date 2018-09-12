import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

// This component Decorator binds the template to the component for usage
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {
  
  categories:Category[]=[];
  frmCategory:Category=new Category(null, null);

  constructor(private ctgsvc:CategoryService) { }
  ngOnInit() {
      this.ctgsvc.getCategory().subscribe(
        data => this.categories=data,
        err => console.log("Error", err)
      )
  }

  add(){
    this.ctgsvc.addCategory(this.frmCategory).subscribe(
      (data) => {
          console.log("Add Success",data);
          this.categories.push(data);
      }, (err) => console.log("Error",err)
    );
    this.frmCategory = new Category(null,null);
  }

  delete(id:number){
    this.ctgsvc.deleteCategory(id).subscribe(
      (data) => {
              console.log("Delete Success:", data);
              let idx=this.categories.findIndex((e)=> e.id==id);
              this.categories.splice(idx,1);
          },
      (err) => console.log("Delete Error", err)
    );
  }

  edit(editCategory:Category){
    //this.frmCategory= editCategory;
    Object.assign(this.frmCategory, editCategory);
  }

  update(){
      this.ctgsvc.updateCategory(this.frmCategory).subscribe(
        (data) => {
          console.log("Success", data);
          let idx=this.categories.findIndex((e)=> e.id==data.id);
          this.categories[idx]=data;
        }
          ,
        (err) => console.log("Error", err)
    );
  }

}
