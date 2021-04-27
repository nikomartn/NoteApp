import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteGridComponent } from './note-grid/note-grid.component';

const routes: Routes = [
  {path: 'note/:id', component:NoteDetailComponent},
  {path: '', component:NoteGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
