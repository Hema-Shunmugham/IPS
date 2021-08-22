import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { PersonalComponent } from './personal.component';

describe('PersonalComponent', () => {
  let component: PersonalComponent;
  let fixture: ComponentFixture<PersonalComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.personalForm.valid).toBeFalsy();
  });

  it('Title Options Type field validity', () => {
    let titleOptions = component.personalForm.controls['titleOptions'];
    expect(titleOptions.valid).toBeFalsy();
    titleOptions.setValue("");
    expect(titleOptions.hasError('required')).toBeTruthy();
  });

  it('First Name field validity', () => {
    let firstName = component.personalForm.controls['firstName'];
    expect(firstName.valid).toBeFalsy();
    firstName.setValue(null);
    expect(firstName.hasError('required')).toBeTruthy();
    firstName.setValue("Test");
    expect(firstName.hasError('pattern')).toBeFalsy()
    firstName.setValue(9);
    expect(firstName.hasError('pattern')).toBeTruthy();
  });
  it('Last Name field validity', () => {
    let lastName = component.personalForm.controls['lastName'];
    expect(lastName.valid).toBeFalsy();
    lastName.setValue(null);
    expect(lastName.hasError('required')).toBeTruthy();
    lastName.setValue("Test");
    expect(lastName.hasError('pattern')).toBeFalsy()
    lastName.setValue(9);
    expect(lastName.hasError('pattern')).toBeTruthy();
  });
  it('DOB field validity', () => {
    let dob = component.personalForm.controls['dob'];
    expect(dob.valid).toBeFalsy();
    dob.setValue("");
    expect(dob.hasError('required')).toBeTruthy();
  });
  it('Bank AcctNo field validity', () => {
    let bankAcctNo = component.personalForm.controls['bankAcctNo'];
    expect(bankAcctNo.valid).toBeFalsy();
    bankAcctNo.setValue(null);
    expect(bankAcctNo.hasError('required')).toBeTruthy();
    bankAcctNo.setValue(12345678);
    expect(bankAcctNo.hasError('pattern')).toBeFalsy()
    bankAcctNo.setValue(9);
    expect(bankAcctNo.hasError('pattern')).toBeTruthy();
  });
  it('Bank Acct BSB field validity', () => {
    let bankAcctBsb = component.personalForm.controls['bankAcctBsb'];
    expect(bankAcctBsb.valid).toBeFalsy();
    bankAcctBsb.setValue(null);
    expect(bankAcctBsb.hasError('required')).toBeTruthy();
    bankAcctBsb.setValue(123456);
    expect(bankAcctBsb.hasError('pattern')).toBeFalsy()
    bankAcctBsb.setValue(9);
    expect(bankAcctBsb.hasError('pattern')).toBeTruthy();
  });
});
