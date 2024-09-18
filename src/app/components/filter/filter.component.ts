import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOption } from '../../interfaces/filter-options.interfaces';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filterOptions: IFilterOption = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false }
  ];

  @Output('OnFilter') OnfilterEmitt =  new EventEmitter<IFilterOption>();

  onFilter( ) {
    this.OnfilterEmitt.emit(this.filterOptions);
    // Emit das opções de filtro para o componente pai para filtrar a lista de usuários.
  }
}
