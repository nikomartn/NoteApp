import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteModel, NoteService } from '../note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  constructor(private noteService:NoteService, 
              private activatedRoute:ActivatedRoute,
              private router:Router) { }
  note:NoteModel = {text:"", id:0}
  
  ngOnInit(): void {
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    if (id != 0){
      this.noteService.getNote(id)
      .subscribe((note) => this.note = note)
    }
  }
  
  save(){
    if(this.note.text != ""){
      if(this.note.id == 0)
      {
        this.noteService.createNote(this.note.text);
      }else{
        this.noteService.updateNote(this.note);
      }
    }
    this.router.navigate(['/']);
  }

  remove(){
    if(this.note.id != 0){
      this.noteService.removeNote(this.note.id);
    }
    this.router.navigate(['/']);
  }

}
