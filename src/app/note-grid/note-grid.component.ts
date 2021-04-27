import { Component, OnInit } from '@angular/core';
import { NoteModel, NoteService } from '../note.service';

@Component({
  selector: 'app-note-grid',
  templateUrl: './note-grid.component.html',
  styleUrls: ['./note-grid.component.scss']
})
export class NoteGridComponent implements OnInit {

  constructor(private noteService:NoteService) { }

  notes:NoteModel[] = []

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe(notes => this.notes = notes);
  }

}
