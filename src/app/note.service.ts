import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Dexie } from 'dexie';
export interface NoteModel{
  text:string,
  id?:number
}

class NoteDatabase extends Dexie{
  public notes: Dexie.Table<NoteModel, number>;

  public constructor(){
    super("NoteDatabase");
    this.version(1).stores({
      notes: "++id,text"
    });
    this.notes = this.table("notes");
  }
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  db:NoteDatabase = new NoteDatabase();
  notes:NoteModel[] = []
  public constructor() {
  }

  getAllNotes():Observable<NoteModel[]> {
    return from(this.db.notes.toArray())
  }

  getNote(id:number):Observable<NoteModel|undefined>{
    return from(this.db.notes.get(id));
  }

  createNote(text:string){
    this.db.notes.add({text:text});
  }

  updateNote(noteChange:NoteModel, id:number){
    this.removeNote(id)
    this.createNote(noteChange.text)
  }

  removeNote(id:number){
      this.db.notes.delete(id!);
  }

}
