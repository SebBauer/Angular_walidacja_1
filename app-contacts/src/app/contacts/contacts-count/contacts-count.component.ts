import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-count',
  templateUrl: './contacts-count.component.html',
  styleUrls: ['./contacts-count.component.scss']
})
export class ContactsCountComponent implements OnInit {

  @Input() numberOfContacts;

  constructor() { }

  ngOnInit() {
  }

}
