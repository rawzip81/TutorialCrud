import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialAddComponent } from './tutorial-add/tutorial-add.component';
import { EditTutorialComponent } from './edit-tutorial/edit-tutorial.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"", redirectTo:"tutorials", pathMatch:"full"},
  {path: "tutorials", component: TutorialListComponent},
  {path: "edit/:id", component: EditTutorialComponent}, 
  {path: "add", component: TutorialAddComponent},
  {path: "**", component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
