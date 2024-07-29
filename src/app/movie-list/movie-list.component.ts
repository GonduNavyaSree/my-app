import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IMovie } from '../app.component';
import { MovieComponent } from '../movie/movie.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  @Input() movies: Array<IMovie> = [];

  name = '';
  poster = '';
  rating = '';
  summary = '';

  addMovie() {
    let latestMovie: IMovie = {
      name: this.name,
      poster: this.poster,
      rating: +this.rating,
      summary: this.summary,
    };
    this.movies.push(latestMovie);
  }

  deleteMovie(movie: IMovie) {
    let index = this.movies.indexOf(movie);
    this.movies.splice(index, 1);
  }
}
