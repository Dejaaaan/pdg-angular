import { Component, OnInit } from '@angular/core';
import {Event} from "./event";

@Component({
  selector: 'pdg-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  selectedEvent: Event;

  constructor() { }

  ngOnInit() {
  }

}
