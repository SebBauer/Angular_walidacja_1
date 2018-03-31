import { Injectable } from '@angular/core';
import { ContactModel } from '../models/contact-model';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  private baseApiUrl = 'http://contactsapi';

  constructor(private http: Http) {

   }

   getContacts(): Observable<ContactModel[]> {
    return this.http.get(this.baseApiUrl + '/contacts').map((res) => res.json());
  }

  getContact(id: Number): Observable<ContactModel> {
    return this.http.get(this.baseApiUrl + '/contact/' + id).map((res) => res.json());
  }

  addContact(data): Observable<ContactModel> {
    return this.http.post(this.baseApiUrl + '/contact/add', data).map((res) => res.json());
  }

  removeContact(id: Number): Observable<ContactModel> {
    return this.http.delete(this.baseApiUrl + '/contact/' + id).map((res) => res.json());
  }

}
