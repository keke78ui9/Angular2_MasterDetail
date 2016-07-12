import { Component, OnInit, Input } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'hero-detail',
    template: `
    <div *ngIf="user">
        <div>Id: {{user.id}}</div>
        <div>FirstName: {{user.firstName}}</div>
        <div>LastName: {{user.lastName}}</div>
        <div>Age: {{user.age}}</div>
        <div>Email: {{user.email}}</div>
    </div>
    `
})
export class DetailComponent implements OnInit {
    @Input() user: User;
    constructor() { }

    ngOnInit() { 

    }

}