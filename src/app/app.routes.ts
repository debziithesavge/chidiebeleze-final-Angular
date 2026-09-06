import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { About } from './Pages/about/about';

export const routes: Routes = [
        {
        path: "about",
        component: About,
    },
    {
        path:"",
        component: Home,
    },
];
