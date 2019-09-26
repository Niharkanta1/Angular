import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() tabSelectedNum = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  ifSelected(anumber: number) {
    this.tabSelectedNum.emit(anumber);
  }
}
