import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { provinces } from '/Users/zhangjianxia/my-app-0502/src/app/component/entry/provinces';
import { MatRadioChange } from '@angular/material/radio';
import { Myapp } from 'src/app/myapp';
import { MyappService } from 'src/app/myapp.service';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  allMyapp:Myapp[]=[];
  displayedColumns: string[] = ['id', 'title','name','mobile','email'];
  constructor(private myapp:MyappService) { }

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



}
