import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router:Router){}

  goToPage(){
    this.router.navigate(['/entry'])
  }

  birthday: Date =  new Date(1996,9,18);

}
