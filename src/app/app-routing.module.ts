import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsBooksComponent } from './pages/ms-books/ms-books.component';

const routes: Routes = [
  { path: '', component: MsBooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
