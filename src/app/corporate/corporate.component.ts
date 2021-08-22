import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, ValidatorFn} from '@angular/forms';

const ageValidator = (minAge: number): ValidatorFn => control =>
  (new Date()).getFullYear() - (new Date(control.value)).getFullYear() < minAge  ? { younger: { minAge } } : null;

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {

  titles = [
    { name: 'Mr', value: 'Mr', checked: false },
    { name: 'Mrs', value: 'Mrs', checked: false },
    { name: 'Miss', value: 'Miss', checked: false },
    { name: 'Ms', value: 'Ms', checked: false }
  ];

  corporateForm = new FormGroup({
    titleOptions: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    acctName: new FormControl(''),
    acctHoldFirstName: new FormControl(''),
    acctHoldLastName: new FormControl(''),
    tfn: new FormControl(''),
    bankAcctNo: new FormControl(''),
    bankAcctBsb: new FormControl(''),
    compFirstName: new FormControl(''),
    compLastName: new FormControl('')
  });

  stringRegex = /^[a-zA-Z]+$/;
  numRegex = /^[0-9]*$/;
  bsbRegex = /^\d{3}-?\d{3}$/;
  acctRegex = /^\d{8}$/;
  options: number[] = [1,2,3,4,5,6];
  selectedNoOfCompanyUsers:number = 0;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.corporateForm = this.formBuilder.group({
      titleOptions: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.pattern(this.stringRegex)]],
      lastName: ['', [Validators.required, Validators.pattern(this.stringRegex)]],
      dob: ['', [Validators.required, ageValidator(18)]],
      acctName: ['', [Validators.required, Validators.pattern(this.stringRegex)]],
      companyName: ['', [Validators.required, Validators.pattern(this.stringRegex)]],
      companyOfficers: ['', Validators.required],
      abn: ['', [Validators.required, Validators.pattern(this.numRegex)]],
      bankAcctNo: ['', [Validators.required, Validators.pattern(this.acctRegex)]],
      bankAcctBsb: ['', [Validators.required, Validators.pattern(this.bsbRegex)]],
      compFirstName: ['', [Validators.required, Validators.pattern(this.stringRegex)]],
      compLastName: ['', [Validators.required, Validators.pattern(this.stringRegex)]]
    });
    this.corporateForm.controls.dob.patchValue(CorporateComponent.formatDate(new Date()));

  }
  get f() { return this.corporateForm.controls; }
  changeOption(e:any) {
    this.selectedNoOfCompanyUsers = e.target.value;
  }
  private static formatDate(date: Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }


}
