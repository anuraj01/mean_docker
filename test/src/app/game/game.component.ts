import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  clickCounter: number = 0;
  isTimerOn: boolean = false;
  isGameEnd: boolean = false;
  timer: number = 3;
  lastScore: number = 0;
  constructor() { }

  ngOnInit() {
  }

  counterClick() {
  	if (this.isGameEnd) {
  		this.lastScore = this.clickCounter;
  		return;
  	}
  	if (!this.isTimerOn) {
  		this.isTimerOn = true;
  		var clearTimer = setInterval(function(){
  			this.timer -= 1;
  			if (this.timer === 0) {
  				clearInterval(clearTimer);
  				this.isGameEnd = true;
  			}
  		}.bind(this), 1000);
  	}
  	
  	this.clickCounter += 1;
  }

  restartGame() {
  	if (this.isGameEnd) {
  		this.isGameEnd = false;
  		this.timer = 3;
  		this.clickCounter = 0;
  		this.isTimerOn = false;
  	}
  }

}
