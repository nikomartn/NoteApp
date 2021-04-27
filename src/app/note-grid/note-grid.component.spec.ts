import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteGridComponent } from './note-grid.component';

describe('NoteGridComponent', () => {
  let component: NoteGridComponent;
  let fixture: ComponentFixture<NoteGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
