import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

// @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
export class HomeComponent implements OnInit {

  title = 'hibkk-website';
  constructor() { }

  ngOnInit(): void {
  }

}

