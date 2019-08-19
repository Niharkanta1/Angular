import { Component } from '@angular/core';

@Component({
    selector : 'app-success-alert',
    templateUrl : './success-alert.component.html',
    styles: [`
    p {
        padding: 5px;
        color: green;
        border: 1px solid green;
        background-color: lightgreen;
    }
    `]
})
export class SuccessAlertComponent {
}
