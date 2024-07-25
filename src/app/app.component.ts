import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserAppComponent } from "./user-app/user-app.component";
import { MovieComponent } from "./movie/movie.component";
import { CounterComponent } from "./counter/counter.component";
import { ColorGameComponent } from "./color-game/color-game.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserAppComponent, MovieComponent, CounterComponent, ColorGameComponent, MovieListComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}

