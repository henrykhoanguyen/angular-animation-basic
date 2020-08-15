import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';

// TODO: check if route to navigate between pages works???
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'todo', component: ToDoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
