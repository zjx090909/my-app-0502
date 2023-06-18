import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { provinces } from 'src/app/component/entry/provinces';
import { MatRadioChange } from '@angular/material/radio';
import { Myapp } from 'src/app/myapp';
import { MyappService } from 'src/app/myapp.service';
import { ServerService } from 'src/app/server.service';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  allMyapp:Myapp[]=[];
  displayedColumns: string[] = ['id', 'title','name','mobile','email'];
  constructor(private myapp:MyappService, private server: ServerService) { }

  provinces = provinces;
  number1 = 1;
  
  myForm:FormGroup;

  

  ngOnInit() {
    this.myForm = new FormGroup({

      buttonFormControl : new FormControl('', Validators.required),
  //custom validator
  emailFormControl : new FormControl('', [Validators.required, this.validateEmail]),
  firstNameFormControl : new FormControl('Zhang', Validators.required),
  //built-in validator
  lastNameFormControl : new FormControl('', [Validators.required, Validators.maxLength(10)]),
  selectFormControl : new FormControl('', Validators.required),
  });

  //Subscribing to input changes
  this.myForm.get('lastNameFormControl').valueChanges.subscribe(v=>{
    console.log(v);
    this.myForm.get('emailFormControl').setValue('jz@gmail.com')
    })

    console.log("Provinces = ", this.provinces)

    this.getAllUserData();
  }

  changeEvent(event:MatRadioChange) {
    console.log('Radio changed =',event.value),
    this.myForm.get('lastNameFormControl').setValue('Jess')
  }

  //custom validator function
  //how to validate a formal email???????????????control.value.pattern......
  validateEmail(control:FormControl){
    if(typeof(control.value)==='string'){
      if(control.value.includes("@")){
        return null;
      }else{
        return {validateEmail:{valid:false}}
      }
    }else{
      return null;
    }
  }

  getAllUserData() {
    this.myapp.getAll().subscribe((data: Myapp[] | Myapp) => {
      if (Array.isArray(data)) {
        this.allMyapp = data;
      } else {
        this.allMyapp = [data];
      }
      console.log(this.allMyapp);
    });
  }

  addUser() {
    const newUser = { //jason format value:  key:value
      firstname: this.myForm.get('firstNameFormControl').value, 
      lastname: this.myForm.get('lastNameFormControl').value,
      email: this.myForm.get('emailFormControl').value,
      province: this.myForm.get('selectFormControl').value,
    };
    this.server.createUser(newUser).then(() => {
      this.getUser();    //verify if user added
    });
  }

  private getUser() {
    this.server.getUser().then((response: any) => {
      console.log('Response', response);
      //this.resident = response.map((ev) => {
        //ev.body = ev.description;
        //ev.header = ev.name;
        //ev.icon = 'fa-clock-o';
        //return ev;
      //});
    });
  }



}
