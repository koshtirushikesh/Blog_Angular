import { Component } from '@angular/core';
import { AddCategoryRequest } from '../../Model/add-catgory-request-model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  model : AddCategoryRequest

  constructor() {
    this.model = {
      name :'',
      urlHandel :''
    };
  }

  onSubmit(){
    console.log(this.model.name+ " "+ this.model.urlHandel);
  }

}
