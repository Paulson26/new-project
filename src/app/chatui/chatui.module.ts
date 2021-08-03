import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserschatComponent } from './userschat/userschat.component';
import { UsersinfoComponent } from './usersinfo/usersinfo.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserschatComponent,
    UsersinfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ UsersComponent,
  UserschatComponent,
  UsersinfoComponent
]
})
export class ChatuiModule { }
