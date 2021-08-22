import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesComponent } from './companies.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('CompanyusersComponent', () => {
  let component: CompaniesComponent;
  let fixture: ComponentFixture<CompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.companyUserForm.valid).toBeFalsy();
  });

  it('Title Options Type field validity', () => {
    let titleOptions = component.companyUserForm.controls['titleOptions'];
    expect(titleOptions.valid).toBeFalsy();
    titleOptions.setValue("");
    expect(titleOptions.hasError('required')).toBeTruthy();
  });

  it('First Name field validity', () => {
    let firstName = component.companyUserForm.controls['firstName'];
    expect(firstName.valid).toBeFalsy();
    firstName.setValue(null);
    expect(firstName.hasError('required')).toBeTruthy();
    firstName.setValue("Test");
    expect(firstName.hasError('pattern')).toBeFalsy()
    firstName.setValue(9);
    expect(firstName.hasError('pattern')).toBeTruthy();
  });
  it('Last Name field validity', () => {
    let lastName = component.companyUserForm.controls['lastName'];
    expect(lastName.valid).toBeFalsy();
    lastName.setValue(null);
    expect(lastName.hasError('required')).toBeTruthy();
    lastName.setValue("Test");
    expect(lastName.hasError('pattern')).toBeFalsy()
    lastName.setValue(9);
    expect(lastName.hasError('pattern')).toBeTruthy();
  });
});
