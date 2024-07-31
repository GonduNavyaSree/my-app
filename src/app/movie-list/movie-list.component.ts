import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IMovie } from '../app.component';
import { MovieComponent } from '../movie/movie.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MovieService } from '../movie.service';
import { AddMovieReactiveFormsComponent } from "../add-movie-reactive-forms/add-movie-reactive-forms.component";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    FormsModule,
    MovieComponent,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    AddMovieReactiveFormsComponent
],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movies: Array<IMovie> = [];

  constructor(public movieservice: MovieService) {
    this.movies = this.movieservice.movies;
  }

  // movieList: Array<IMovie> = []; // Model -> View
  isLoading: boolean = true;
  msg = '';

  name = '';
  poster = '';
  rating = '';
  summary = '';
  addMovie() {
    let newMovie: IMovie = {
      name: this.name,
      poster: this.poster,
      rating: +this.rating,
      summary: this.summary,
      id: ''
    };

    this.movies.push(newMovie);
  }

  // ngOnInit() {
  //   this.loadMovies();
  // }

  // loadMovies() {
  //   this.movieservice
  //     .getAllMoviesP()
  //     .then((data) => {
  //       this.movies = data;
  //       this.isLoading = false;
  //     })
  //     .catch(() => {
  //       this.isLoading = false;
  //       this.msg = 'Something went wrong 🥲';
  //     });
  // }

  // delete -> refresh
  // deleteMovieP(movie: IMovie) {
  //   this.movieservice.deleteMovie(movie).then(() => this.loadMovies());
  // }
}
