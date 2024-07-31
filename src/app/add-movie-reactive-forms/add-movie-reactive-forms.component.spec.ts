import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieReactiveFormsComponent } from './add-movie-reactive-forms.component';

describe('AddMovieReactiveFormsComponent', () => {
  let component: AddMovieReactiveFormsComponent;
  let fixture: ComponentFixture<AddMovieReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMovieReactiveFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMovieReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
