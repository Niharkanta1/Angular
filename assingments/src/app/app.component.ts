import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assingments';
  username = '';
  resetUserBtnStatus = 'false';
  showDetails = false;
  clicks = [];

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  resetUserName() {
    this.username = '';
    this.resetUserBtnStatus = 'true';
  }

  checkUserBtnStatus() {
    if (this.username === '') {
      this.resetUserBtnStatus = 'true';
      return this.resetUserBtnStatus;
    }
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.clicks.push(new Date());
  }

  getColor() {
    if (this.clicks.length >= 5) {
      return 'blue';
    } else {
      return 'green';
    }
  }
  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

}
