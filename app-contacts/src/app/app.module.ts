import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactsModule } from './contacts/contacts.module';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactsService } from './contacts/contacts.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContactsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

