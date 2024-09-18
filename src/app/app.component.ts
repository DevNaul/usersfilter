import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interfaces';
import { UsersList } from './data/users-list';
import { IFilterOption } from './interfaces/filter-options.interfaces';

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

    this.usersListFiltered =  this.filterUsersList( filterOptions, this.usersList );
  }

  filterUsersList(filterOptions: IFilterOption, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName( filterOptions.name, usersList);
    filteredList = this.filterUsersListByStatus( filterOptions.status, filteredList);

    return filteredList;
  }
  filterUsersListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
      return usersList;
    }
    
    return usersList.filter((user: IUser) => user.ativo === status);
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
      return usersList;
    }
    const filteredList = usersList.filter((user: IUser) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
  }

}
