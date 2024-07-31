import { Routes } from '@angular/router';
import { ColorGameComponent } from './color-game/color-game.component';
import { UserAppComponent } from './user-app/user-app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
    {
        path: '',
        component: MovieListComponent,
    },
    {
        path: 'color',
        component: ColorGameComponent,
    },
    {
        path: 'user',
        component: UserAppComponent,
    },
    {
        path: 'movie/:id',
        component: MovieComponent,
    },
];
