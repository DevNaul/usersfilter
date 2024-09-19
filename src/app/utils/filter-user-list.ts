import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interfaces";
import { IFilterOption } from "../interfaces/filter-options.interfaces";

// Filtro de nome
const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
        return usersList;
    }
    const filteredList = usersList.filter((user: IUser) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
}

// filtro de status
const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
        return usersList;
    }

    return usersList.filter((user: IUser) => user.ativo === status);
}

// filtro de data de cadastro
const filterUsersListByDates = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if (DATES_NOT_SELECTED) {
        return usersList;
    }

    const listFiltered = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endDate,
    }));

    return listFiltered;
}


const filterUsersList = (filterOptions: IFilterOption, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUsersListByName(filterOptions.name, usersList);
    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = filterUsersListByDates(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
}
 export { filterUsersList };