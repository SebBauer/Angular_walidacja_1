import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { ContactModel } from '../../models/contact-model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact: ContactModel;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadContact();
  }

  loadContact() {
    const id = +this.route.snapshot.params['id']; // + na początku przekonwertuje stringa na int
    this.contactsService.getContact(id).subscribe((contact) => this.contact = contact[0]);
  }

}
