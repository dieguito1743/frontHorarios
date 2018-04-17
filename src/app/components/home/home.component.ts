import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  programas: string[] = ['ISW', 'GPGE', 'GTI', 'GIC', 'GPTI', 'GTIC', 'ASTI', 'DISI'];

  constructor() { }

  ngOnInit() {
  }

}
