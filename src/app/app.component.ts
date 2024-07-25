import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserAppComponent } from "./user-app/user-app.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  movies = [
    {
      id: 0,
      name : "Vikram",
      poster : "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating : 8.4,
      summary : "Members of a black ops team must track and eliminate a gang of masked murderers."
    },
  ]
}

