import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: SharedService) { }

  ifLogged: boolean = false;
  userId?: number;
  userPass: string;
  userName: string;

  ngOnInit(): void {
    this.checkIfLogged();
  }

  doLogin() {
    if (this.userId != null && this.userPass != null) {
      this.service.getUser(this.userId).subscribe(data => {
        this.userName = data[0].userName;
        this.ifLogged = true;
        sessionStorage.setItem('userId', data[0].userId);
        sessionStorage.setItem('userName', data[0].userName);
      });
    }
  }

  doLogOut() {
    this.ifLogged = false;
    this.userId = null;
    this.userName = null;
    this.userPass = null;
    sessionStorage.clear();
  }

  checkIfLogged() {
    const uN = sessionStorage.getItem('userName');
    if (uN) {
      this.ifLogged = true;
      this.userName = uN;
    }
  }
}
