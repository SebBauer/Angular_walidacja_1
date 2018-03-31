import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsCountComponent } from './contacts-count/contacts-count.component';
import { SharedModule } from '../shared/shared.module';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContactsRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactsListComponent,
    ContactDetailsComponent
  ],
  declarations: [ContactsListComponent, ContactsCountComponent, ContactDetailsComponent, ContactAddComponent]

})
export class ContactsModule { }
