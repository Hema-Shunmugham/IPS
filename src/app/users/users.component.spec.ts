import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.userForm.valid).toBeFalsy();
  });

  it('Account Type field validity', () => {
    let accountType = component.userForm.controls['accountType'];
    expect(accountType.valid).toBeFalsy();
    accountType.setValue("");
    expect(accountType.hasError('required')).toBeTruthy();
  });

  it('No Of Individual field validity', () => {
    let noOfInd = component.userForm.controls['noOfInd'];
    expect(noOfInd.valid).toBeFalsy();
    noOfInd.setValue("");
    expect(noOfInd.hasError('required')).toBeTruthy();
  });
});
