import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactAddComponent } from './contact-add/contact-add.component';

const CONTACTS_ROUTES: Route[] = [
    {path: 'contact/:id', component: ContactDetailsComponent},
    {path: 'contact-add', component: ContactAddComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(CONTACTS_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class ContactsRoutingModule { }
