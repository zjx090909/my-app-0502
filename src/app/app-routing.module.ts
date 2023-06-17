import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './component/entry/entry.component';

import { AddIssueComponent } from './components/add-issue/add-issue.component';
import { EditIssueComponent } from './components/edit-issue/edit-issue.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { WelcomeComponent } from './component/entry/welcome/welcome.component';
import { AddUsersComponent } from './add-users/add-users.component';

const routes: Routes = [
  {path: 'entry', component: EntryComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '', pathMatch: 'full', redirectTo: 'add-issue' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'add-issue', component: AddIssueComponent },
  { path: 'edit-issue/:id', component: EditIssueComponent },
  { path: 'issues-list', component: IssueListComponent },
  { path: 'add-users', component: AddUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
