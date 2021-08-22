import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm = new FormGroup({
    accountType: new FormControl(''),
    noOfInd: new FormControl(''),
  });

  accountTypes: string[] = ["Personal", "Corporate"];
  options: number[] = [1,2,3,4,5,6];
  selectedAccountType:String = "";
  selectedNoOfInd:number = 0;
  noUserRegex = /^[1-6]/;


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      accountType: ['', [Validators.required]],
      noOfInd: ['', [Validators.required,Validators.pattern(this.noUserRegex)]]
    });
  }
  get f() { return this.userForm.controls; }

  changeType(e:any) {
    this.selectedAccountType = e.target.value;
  }

  changeOption(e:any) {
    this.selectedNoOfInd = e.target.value;
  }

}
