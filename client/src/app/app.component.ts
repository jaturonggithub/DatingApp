import { AccountService } from "./_services/account.service";
import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "./_models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating app';
  users: any;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    //const user: User =   JSON.parse(localStorage.getItem('user') );
    const temp: string | null = localStorage.getItem('user');
    const user: User = JSON.parse(temp == null ? '' : temp);
    this.accountService.setCurrentUser(user);
  }


}
