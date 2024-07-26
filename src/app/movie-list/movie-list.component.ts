import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IMovie } from '../app.component';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [FormsModule, MovieComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  @Input() movies: Array<IMovie> = [
    //{
    //   name: 'Vikram',
    //   poster:
    //     'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
    //   rating: 8.4,
    //   summary:
    //     'Members of a black ops team must track and eliminate a gang of masked murderers.',
    // },
    // {
    //   name: 'RRR',
    //   poster:
    //     'https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG',
    //   rating: 8.8,
    //   summary:
    //     'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
    // },
  ];

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

  deleteMovieP(movie: IMovie) {
    let index = this.movies.indexOf(movie);
    this.movies.splice(index, 1);
  }
}
