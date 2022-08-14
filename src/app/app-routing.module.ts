import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './cmps/book-details/book-details.component';
import { MsBooksComponent } from './pages/ms-books/ms-books.component';

const routes: Routes = [
  { path: '', component: MsBooksComponent, children:[
    {path:'book/:id', component: BookDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
