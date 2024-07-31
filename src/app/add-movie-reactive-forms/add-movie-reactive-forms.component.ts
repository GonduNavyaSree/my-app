import { Component, Input } from '@angular/core';
import { IMovie } from '../app.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { NewMovie } from '../movie';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-movie-reactive-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  templateUrl: './add-movie-reactive-forms.component.html',
  styleUrl: './add-movie-reactive-forms.component.scss',
})
export class AddMovieReactiveFormsComponent {
  @Input() movies: Array<IMovie> = [];
  movieForm: FormGroup;

  constructor(
    public movieservice: MovieService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.movies = this.movieservice.getMovieList();

    // formGroup -> formControlName
    this.movieForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      poster: '',
      rating: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      summary: '',
      trailer: '',
    });
  }

  addMovie() {
    console.log(this.movieForm.value);
    // Todo: Fix Add - Technical Debt

    if (this.movieForm.valid) {
      let newMovie: NewMovie = this.movieForm.value;

      this.movieservice.addMovie(newMovie).then(() => {
        // Move to movies page
        this.router.navigate(['movies']);
      });
    }
  }

  // getter
  get name() {
    return this.movieForm.get('name');
  }

  get rating() {
    return this.movieForm.get('rating');
  }
}
