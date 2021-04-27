import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface NoteModel{
  id:number,
  text:string
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  notasFake:NoteModel[] = [{id:1, text:"Hola mundo esta es mi app."}, {id:2, text:"Comprar arándanos"}]

  getAllNotes():Observable<NoteModel[]> {
    return of(this.notasFake);
  }

  getNote(id:number):Observable<NoteModel>{
    return of(this.notasFake.find(note => note.id === id)!);
  }

  createNote(text:string):Observable<boolean>{
    let newNote:NoteModel = {id:this.notasFake.length, text:text};
    this.notasFake = this.notasFake.concat([newNote]);
    return of(true);
  }

  updateNote(note:NoteModel){
    this.removeNote(note.id);
    this.createNote(note.text);
  }

  removeNote(id:number):Observable<boolean>{
    this.notasFake = this.notasFake.filter(function(note, index, arr) {
      return note.id != id;
    });
    return of(true)
  }

}
