import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/app.reducers';

import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { FormsModule } from '@angular/forms'; // required to ngModel to work
import { HttpComponent } from './http/http.component';  
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      user: reducer
    }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
