import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  data :object;
  constructor(private _http: HttpService) { }

  ngOnInit() {
  	this._http.getData().subscribe(data => {
  		this.data = data;
  		console.log(this.data);
  	})
  }

}
