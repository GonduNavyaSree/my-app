import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserAppComponent } from "./user-app/user-app.component";
import { MovieComponent } from "./movie/movie.component";
import { CounterComponent } from "./counter/counter.component";
import { ColorGameComponent } from "./color-game/color-game.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface IMovie {
  name: string;
  poster: string;
  rating: number;
  summary: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserAppComponent, MovieComponent, CounterComponent, ColorGameComponent, MovieListComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  movies: Array<IMovie> = [
    {
      name: 'Vikram',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
      rating: 8.4,
      summary:
        'Members of a black ops team must track and eliminate a gang of masked murderers.',
    },
    {
      name: 'RRR',
      poster:
        'https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG',
      rating: 8.8,
      summary:
        'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
    },
  ]
}

