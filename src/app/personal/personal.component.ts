import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, ValidatorFn} from '@angular/forms';


const ageValidator = (minAge: number): ValidatorFn => control =>
  (new Date()).getFullYear() - (new Date(control.value)).getFullYear() < minAge  ? { younger: { minAge } } : null;

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})

export class PersonalComponent implements OnInit {
  titles = [
    { name: 'Mr', value: 'Mr', checked: false },
    { name: 'Mrs', value: 'Mrs', checked: false },
    { name: 'Miss', value: 'Miss', checked: false },
    { name: 'Ms', value: 'Ms', checked: false }
  ];
  personalForm = new FormGroup({
    titleOptions: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    acctName: new FormControl(''),
    acctHoldFirstName: new FormControl(''),
    acctHoldLastName: new FormControl(''),
    tfn: new FormControl(''),
    bankAcctNo: new FormControl(''),
    bankAcctBsb: new FormControl('')
  });
  stringRegex = /^[a-zA-Z]+$/;
  numRegex = /^[0-9]*$/;
  bsbRegex = /^\d{3}-?\d{3}$/;
  acctRegex = /^\d{8}$/;


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.personalForm = this.formBuilder.group({
      titleOptions: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.pattern(this.stringRegex)]],
      lastName: ['', [Validators.required, Validators.pattern(this.stringRegex)]],
      dob: ['', [Validators.required, ageValidator(18)] ],
      acctName: ['', [Validators.required, Validators.pattern(this.stringRegex)]],
      acctHoldFirstName: ['', [Validators.required, Validators.pattern(this.stringRegex)]],
      acctHoldLastName: ['', [Validators.required, Validators.pattern(this.stringRegex)]],
      tfn: ['', [Validators.required, Validators.pattern(this.numRegex)]],
      bankAcctNo: ['', [Validators.required, Validators.pattern(this.acctRegex)]],
      bankAcctBsb: ['', [Validators.required, Validators.pattern(this.bsbRegex)]],
    });
    this.personalForm.controls.dob.patchValue(PersonalComponent.formatDate(new Date()));
  }
  get f() { return this.personalForm.controls; }

  private static formatDate(date:any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }






}
