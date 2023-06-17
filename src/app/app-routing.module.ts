import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './component/entry/entry.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { AddUsersComponent } from './add-users/add-users.component';

const routes: Routes = [
  {path: 'entry', component: EntryComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '', pathMatch: 'full', redirectTo: 'add-issue' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'add-users', component: AddUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
