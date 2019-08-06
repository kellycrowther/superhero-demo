import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface ISubscriptionLevel {
  name: string;
  value: number;
  id: number;
}

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl('', Validators.email),
    subscriptionLevel: new FormControl()
  });
  public subscriptionLevels: Array<ISubscriptionLevel>;

  constructor() { }

  public ngOnInit(): void {
    this.createSubscriptionLevels();
  }

  public handleRegistrationSubmission(): void {
    console.log('First Name: ' + this.registrationForm.get('firstName').value);
    console.log('Subscription Level: ', this.registrationForm.get('subscriptionLevel').value);
    console.info('Form Data: ', this.registrationForm.value);
  }

  public createSubscriptionLevels(): void {
    this.subscriptionLevels = [
      {
        name: 'Bronze',
        value: 50,
        id: 1
      },
      {
        name: 'Silver',
        value: 100,
        id: 2
      },
      {
        name: 'Gold',
        value: 150,
        id: 3
      },
      {
        name: 'Platinum',
        value: 200,
        id: 4
      }
    ];
  }

}
