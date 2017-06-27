import {Component, OnInit, Input} from '@angular/core';
import {Event} from "../event";

@Component({
  selector: 'pdg-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() event: Event;
  event_id: number;

  constructor() { }

  ngOnInit() {
  }

}
