import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { GiftsComponent } from './gifts/gifts.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { GiftDetailComponent } from './gifts/gift-detail/gift-detail.component';
import { GiftListComponent } from './gifts/gift-list/gift-list.component';
import { GiftItemComponent } from './gifts/gift-list/gift-item.component';
import {routing} from "./app.routing";
import { DropdownDirective } from './dropdown.directive';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {AuthService} from "./auth.service";
import {GiftService} from "./gifts/gift.service";
import { EventListComponent } from './events/event-list/event-list.component';
import {EventService} from "./events/event.service";
import { EventItemComponent } from './events/event-list/event-item.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    BodyComponent,
    ContactComponent,
    EventsComponent,
    FooterComponent,
    GiftsComponent,
    HomeComponent,
    UsersComponent,
    GiftDetailComponent,
    GiftListComponent,
    GiftItemComponent,
    DropdownDirective,
    SignupComponent,
    SigninComponent,
    EventListComponent,
    EventItemComponent,
    EventDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [EventService, GiftService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
