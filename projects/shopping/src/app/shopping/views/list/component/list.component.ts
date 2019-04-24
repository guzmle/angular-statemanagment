import {Component, OnInit} from '@angular/core';

import {CARS, FILTERS} from "../constants";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

  public filters = FILTERS;
  public cars = CARS;

  constructor() {
  }

  ngOnInit() {
  }

}
