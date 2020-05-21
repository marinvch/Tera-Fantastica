import { MagazinesComponent } from './magazines/magazines.component';
import { BooksComponent } from './books/books.component';
import { NewspaperComponent } from './newspaper/newspaper.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
    path: 'app-newspaper',
    component: NewspaperComponent,
  },
  {
    path: 'app-books',
    component: BooksComponent,
  },
  {
    path: 'app-magazines',
    component: MagazinesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
