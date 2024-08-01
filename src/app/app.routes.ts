import { Routes } from '@angular/router';
import { ColorGameComponent } from './color-game/color-game.component';
import { UserAppComponent } from './user-app/user-app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { authGuard } from './auth.guard';
import { AddMovieReactiveFormsComponent } from './add-movie-reactive-forms/add-movie-reactive-forms.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

export const routes: Routes = [
    {
        path: '',
        component: MovieListComponent,
    },
    {
        path: 'color',
        component: ColorGameComponent, canActivate: [authGuard]
    },
    {
        path: 'user',
        component: UserAppComponent,
    },
    {
        path: 'movies', // url
        children: [
          { path: '', component: MovieListComponent },
          { path: 'movie', component: MovieComponent },
          { path: 'add', component: AddMovieReactiveFormsComponent },
          { path: 'edit/:id', component: EditMovieComponent },
          { path: ':id', component: MovieDetailsComponent },
        ],
    }
];
