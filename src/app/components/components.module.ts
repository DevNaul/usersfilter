import { NgModule } from "@angular/core";

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { PipesModule } from '../pipes/pipes.module';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
   declarations: [
    
   
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent,
    UsersListComponent,
  ],
   imports: [
      FormsModule,
      AngularMaterialModule,
      CommonModule,
      PipesModule
   ],
   exports: [
      UserDetailsComponent,
      FilterComponent,
      UsersListComponent,
   ],
})

export class ComponentsModule { }