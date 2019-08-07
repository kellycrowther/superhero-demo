import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RegistrationComponent } from './registration.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSelectModule,
        MatInputModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should call createSubscriptionLevels() and set subscriptionLevels', () => {
      component.ngOnInit();
      expect(component.subscriptionLevels).toBeDefined();
    });

    it('should create the select options for the subscription levels in the DOM', () => {
      component.ngOnInit();
      fixture.detectChanges();
      const trigger = fixture.debugElement.query(By.css('mat-select')).nativeElement;
      trigger.click();
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.mat-option-text')).nativeElement.innerHTML).toContain('Bronze');
    });
  });

  describe('handleRegistrationSubmission()', () => {
    it('should return the inputted values from the registration form', () => {
      component.ngOnInit();
      fixture.detectChanges();
      component.registrationForm.controls.firstName.setValue('John');
      component.registrationForm.controls.lastName.setValue('Doe');
      component.registrationForm.controls.email.setValue('john@doe.com');
      component.registrationForm.controls.subscriptionLevel.setValue(50);
      component.handleRegistrationSubmission();
      expect(component.registrationForm.value).toEqual({ firstName: 'John', lastName: 'Doe', email: 'john@doe.com', subscriptionLevel: 50 });
    });
  });
});
