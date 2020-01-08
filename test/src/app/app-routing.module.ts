import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { HttpComponent } from './http/http.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'game', component: GameComponent},
	{path: 'http', component: HttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
