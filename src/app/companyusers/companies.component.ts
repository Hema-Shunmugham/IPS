import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-company',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  titles = [
    { name: 'Mr', value: 'Mr', checked: false },
    { name: 'Mrs', value: 'Mrs', checked: false },
    { name: 'Miss', value: 'Miss', checked: false },
    { name: 'Ms', value: 'Ms', checked: false }
  ];
  companyUserForm = new FormGroup({
    titleOptions: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  stringRegex = /^[a-zA-Z]+$/;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.companyUserForm = this.formBuilder.group({
      titleOptions: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.pattern(this.stringRegex)]],
      lastName: ['', [Validators.required, Validators.pattern(this.stringRegex)]],
    });

  }
  get f() { return this.companyUserForm.controls; }

}
