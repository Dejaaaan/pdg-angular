import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Event} from "../event";
import {EventService} from "../event.service";

@Component({
  selector: 'pdg-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = [];

  @Output() eventSelected = new EventEmitter<Event>();

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  onSelected(event: Event){
    this.eventSelected.emit(event);
  }

}
