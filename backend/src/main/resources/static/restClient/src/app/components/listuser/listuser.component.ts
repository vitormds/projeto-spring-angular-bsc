import { UserService } from './../../shared_service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
   users: User[];
  constructor(private _userService: UserService, private _router:Router ) { }

  ngOnInit() {
    this._userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    }, (error) => {
      console.log(error);
    })
  }
  deleteUser(user) {
    console.log(user.id);
    this._userService.deleteUser(user.id).subscribe((data) => {
      this.users.splice(this.users.indexOf(user), 1);
    }, (error) => {
      console.log(error);
    })
  }
  updateUser(user){
    this._userService.set(user);
    this._router.navigate(['/op']);
  }
  newUser(){
    let user = new User();
    this._userService.set(user);
    this._router.navigate(['/op']);
  }
}