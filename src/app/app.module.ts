import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './component/entry/entry.component';
import { MatCardModule} from '@angular/material/card'; 
import { MatRadioModule} from '@angular/material/radio'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddIssueComponent } from './components/add-issue/add-issue.component';
import { EditIssueComponent } from './components/edit-issue/edit-issue.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { MatInputModule } from '@angular/material/input';
import { WelcomeComponent } from './component/entry/welcome/welcome.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LOCALE_ID } from '@angular/core';
import { AddUsersComponent } from './add-users/add-users.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    AddIssueComponent,
    EditIssueComponent,
    IssueListComponent,
    WelcomeComponent,
    AddUsersComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
    
  ],
  //providers: [{provide:LOCALE_ID,useValue:'fr-CA'}],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
