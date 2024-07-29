import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserAppComponent } from './user-app/user-app.component';
import { MovieComponent } from './movie/movie.component';
import { CounterComponent } from './counter/counter.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { MovieListComponent } from './movie-list/movie-list.component';
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
  imports: [
    RouterOutlet,
    UserAppComponent,
    MovieComponent,
    CounterComponent,
    ColorGameComponent,
    MovieListComponent,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
      name: 'Roja',
      poster:
        'https://cdn.cinematerial.com/p/297x/njpst7ip/roja-british-movie-cover-md.jpg?v=1456855927',
      summary:
        "Roja's world turns upside down when Rishi is kidnapped by terrorists whose agenda is to separate Kashmir from India and free their leader, Wasim Khan, from judicial custody.",
      rating: 8.7,
    },
    {
      name: 'Baahubali',
      poster: 'https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg',
      rating: 8,
      summary:
        'In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.',
    },
    {
      name: 'Om Bhem Bush',
      poster:
        'https://thesouthfirst.com/wp-content/uploads/2024/03/Om-Bheem-Bush-is-a-buddy-comedy.png',
      rating: 9,
      summary:
        'Om Bheem Bush is a 2024 Indian Telugu-language horror comedy film written and directed by Sree Harsha Konuganti and produced by Sunil Balusu under the banner V Celluloid.',
    },
    {
      name: 'Jai Bhim',
      poster:
        'https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg',
      summary:
        'A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case',
      rating: 7.8,
    },
    {
      name: 'Interstellar',
      poster: 'https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg',
      rating: 7,
      summary:
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.',
    },
    {
      name: 'Thor: Ragnarok',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg',
      summary:
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.',
      rating: 8.3,
    },
    {
      name: 'Ratatouille',
      poster:
        'https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=',
      rating: 8.7,
      summary:
        'Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.',
    },
  ];
}
