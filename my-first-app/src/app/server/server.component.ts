import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverStatus = '';
  serverId = 10;
  server = 'Server';
  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
      this.serverId = Math.floor(Math.random() * 20);
   }

  ngOnInit() {
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
