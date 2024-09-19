import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interfaces';
import { UsersList } from './data/users-list';
import { IFilterOption } from './interfaces/filter-options.interfaces';
import { filterUsersList } from './utils/filter-user-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected!: IUser;
  showUserDetails: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 3);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOption) {
    console.log(filterOptions);

    this.usersListFiltered =  filterUsersList( filterOptions, this.usersList );
  }

}
