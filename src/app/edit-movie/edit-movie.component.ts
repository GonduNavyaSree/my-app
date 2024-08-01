import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IMovie } from '../app.component';
import { NewMovie } from '../movie';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.scss',
})
export class EditMovieComponent {
  movies: Array<IMovie> = [];
  movieForm: FormGroup;

  constructor(
    public movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private frb: FormBuilder
  ) {
    this.movies = this.movieService.getMovieList();

    // formGroup -> formControlName
    this.movieForm = this.frb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(5)]],
      poster: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(/^https:.*/),
        ],
      ],
      rating: [
        '',
        [Validators.required, Validators.min(1), Validators.max(8)],
      ],
      summary: '',
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.movieService.getMovieByIdP(id).then((data) => {
      console.log(data);
      // this.movieForm.setValue vs this.movieForm.patchValue
      this.movieForm.patchValue(data);
    });
  }
  
  editMovie() {
    console.log(this.movieForm.value);
    // Todo: Fix Add - Technical Debt

    if (this.movieForm.valid) {
      let updatedMovie: IMovie = this.movieForm.value;
      console.log(this.movieForm.value);

      this.movieService.editMovie(updatedMovie).then(() => {
        // Move to movies page
        this.router.navigate(['movies']);
      });
    }
  }

  // getter
  get name() {
    return this.movieForm.get('name');
  }

  get poster() {
    return this.movieForm.get('poster');
  }

  get rating() {
    return this.movieForm.get('rating');
  }
}
