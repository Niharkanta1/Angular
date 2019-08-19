import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  newServerBtnStatus = true;
  serverCreated = false;
  serverName = '';
  serverCreationStatus = '';
  servers = ['TestServer 1', 'TestServer 2'];
  constructor() {
  }

  ngOnInit() {
  }

  checkServerBtnStatus() {
    if (this.serverName === '') {
      this.newServerBtnStatus = true;
      return this.newServerBtnStatus;
    }
  }

  onServerCreate() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Creation Complete! Server Name: ' + this.serverName;
    this.serverCreated = true;
  }

}
