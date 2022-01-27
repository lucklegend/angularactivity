import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';

const routes: Routes = [
  { path : 'users', 
    children:[
      { path : '', component: ListUserComponent },
      { path : 'list', component: ListUserComponent },
      { path : 'create', component: AddUserComponent },
      { path : 'view/:id', component: ViewUserComponent },
      { path : 'edit/:id', component: EditUserComponent },
      { path : 'delete/:id', component: DeleteUserComponent }
    ] 
  },
  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
