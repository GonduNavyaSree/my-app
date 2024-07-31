import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterComponent } from "../counter/counter.component";
import { IMovie } from '../app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

// interface Movie {
//   name: string;
//   poster: string;
//   rating: number;
//   summary: string;
// }
@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, CounterComponent, MatIconModule, MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  @Input() movie = {
    id: '99',
    name: 'Vikram',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
    rating: 8.4,
    summary:
      'Members of a black ops team must track and eliminate a gang of masked murderers.',
  };

  show: boolean = true;
  @Input() id = 0;
  @Output() deleteMovieEvent = new EventEmitter<IMovie>();
  showDescription() {
    this.show = !this.show;
  }

  deleteMovie() {
    console.log('Child', this.movie);
    this.deleteMovieEvent.emit(this.movie);
  }
}
