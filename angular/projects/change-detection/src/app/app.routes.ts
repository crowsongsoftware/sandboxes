import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
    {path: "/", component: AppComponent},
    {path: "widget-manager", loadChildren: () => import('./widget/widget-manager/widget-manager.module').then(m => m.WidgetManagerModule)}
];