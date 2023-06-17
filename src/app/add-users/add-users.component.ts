import { Component, OnInit } from '@angular/core';
import { Myapp } from '../myapp';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit{
  userRecords:Myapp = {
    id:0,
    title:'',
    name:'',
    mobile:'',
    email:''
  }
  constructor(){}
  ngOnInit(): void {   
  }
}
