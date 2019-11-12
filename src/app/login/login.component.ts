
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'

export interface Major {
  value: string;
  viewValue: string;
}
export interface Reason {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string;
  id: number;
  selectedMajor: string;
  selectedReason: string;
  comment: string;
  constructor(private router: Router) { }

  majors: Major[] = [
    {value: 'cs-0', viewValue: 'Computer Science'},
    {value: 'ee-1', viewValue: 'Electrical Engineering'},
    {value: 'me-2', viewValue: 'Mechanical Engineering'},
  ];

  reasons: Reason[] = [
    {value: 'o-0', viewValue: 'Orientation'},
    {value: 'a-1', viewValue: 'Advising'},
    {value: 'r-2', viewValue: 'Research'},
    {value: 'n-3', viewValue: 'Other'},
  ];

  ngOnInit() {
  }
  login() : void {
    if(this.name != null && this.id.toString().length == 8 &&  this.selectedMajor != null && this.selectedReason != null){
     this.router.navigate(["user"]);
    }else {
      alert("Some fields are empty. Make sure all values are filled out");
    }
  }
}