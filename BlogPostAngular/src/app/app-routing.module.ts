// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './Feature/Catgories/category-list/category-list.component';
import { AddCategoryComponent } from './Feature/Catgories/add-category/add-category.component';

const routes: Routes = [
    { path: 'admin/category', component: CategoryListComponent},
    { path: 'admin/category/add' , component: AddCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
