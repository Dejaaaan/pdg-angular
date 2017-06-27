import {Component, OnInit, Input} from '@angular/core';
import {Event} from "../event";

@Component({
  selector: 'pdg-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() selectedEvent: Event

  constructor() { }

  ngOnInit() {
  }
}
