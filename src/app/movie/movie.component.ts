import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterComponent } from "../counter/counter.component";
import { IMovie } from '../app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// interface Movie {
//   name: string;
//   poster: string;
//   rating: number;
//   summary: string;
// }
@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, CounterComponent, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  @Input() movie = {
    name: 'Vikram',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
    rating: 8.4,
    summary:
      'Members of a black ops team must track and eliminate a gang of masked murderers.',
  };

  show: boolean = true;

  showDescription() {
    this.show = !this.show;
  }
  @Output() delete = new EventEmitter<IMovie>();

  onDelete() {
    this.delete.emit(this.movie);
  }
}
