import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // ---------------CONSTRUCTOR--------------- //
  constructor() {
    console.log('Ejecutado constructor de app.component');
  }

  // ---------------VARIABLES--------------- //

  // ---------------FUNCTIONS--------------- //
  ngOnInit() {}
}