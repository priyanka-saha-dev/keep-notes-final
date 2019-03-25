import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent implements OnInit {

  title: string;
  errMessage: string;
  note: Note;
  notes: Array<Note>;

  constructor(private noteSvc: NotesService, private authSvc : AuthenticationService) {
    this.title = 'Take a note';
    this.note = new Note();
    this.note.userId = authSvc.getLoginUserID();
    this.notes = [];

  }

  ngOnInit() {
    const noteObs = this.noteSvc.getNotes();

    noteObs.subscribe(
      (response) => {
        this.notes = response;
      },
      (error) => {
        this.errMessage = error.message;
      }
    );

  }

  addNotes() {

    if (!this.note.title || !this.note.text) {
      this.errMessage = 'Title and Text both are required fields';
    } else {
      const addNoteObs = this.noteSvc.addNote(this.note);

      addNoteObs.subscribe(
        (response) => this.note = new Note(),
        (err) => {
          if (err.error) {
            this.errMessage = err.error.message;
          } else {
            this.errMessage = err.message;
          }
        }
      );

    }
  }


}
