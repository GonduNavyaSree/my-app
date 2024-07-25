import { Routes } from '@angular/router';
import { ColorGameComponent } from './color-game/color-game.component';
import { UserAppComponent } from './user-app/user-app.component';

export const routes: Routes = [
    {
        path: 'color',
        component: ColorGameComponent,
    },
    {
        path: 'user-app',
        component: UserAppComponent,
    }
];
