import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { User } from './../model/app.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: Observable<User>;

  constructor(private store: Store<AppState>) { 
  	this.user = store.select('user'); // from app module
  }

  ngOnInit() {
  }
 
}
