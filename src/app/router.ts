import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routerDeclarer : Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }, {
        path: 'home',
        loadChildren:'./page/home/home.module#HomeModule'
    }, {
        path: '404',
        loadChildren: './page/notfound/notfound.module#NotfoundModule'
    }, {
        path: '**',
        redirectTo: '404'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routerDeclarer)],
    exports: [RouterModule]
})
export class routerModule {}