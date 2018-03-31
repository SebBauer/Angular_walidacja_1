import { NgModule } from '@angular/core';
import { RouterModule, Route, Router } from '@angular/router';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';

const APP_ROUTES: Route[] = [
    {path: '', pathMatch: 'full', redirectTo: 'contacts'},
    {path: 'contacts', component: ContactsListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
