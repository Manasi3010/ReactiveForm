import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css'],
})
export class Form2Component implements OnInit {
  user: FormGroup;
  info: string;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.user = this.fb.group({
      info: this.fb.group({
        firtName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        maidenName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        age: ['', [Validators.required, Validators.pattern('[0-9]{2}')]],
        phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
        gender: ['', [Validators.required]],
        birthDate: ['', [Validators.required]],
      }),
      address: this.fb.group({
        addresss: ['', [Validators.required]],
        city: ['', [Validators.required]],
        coordinates: ['', [Validators.required]],
        postalCode: ['', [Validators.required]],
        state: ['', [Validators.required]],
      }),
      bank: this.fb.group({
        cardExpire: ['', [Validators.required]],
        cardNumber: ['', [Validators.required]],
        cardType: ['', [Validators.required]],
        currency: ['', [Validators.required]],
        iban: ['', [Validators.required]],
      }),
      company: this.fb.group({
        name: ['', [Validators.required]],
        title: ['', [Validators.required]],
        addresss: ['', [Validators.required]],
        city: ['', [Validators.required]],
        postalCode: ['', [Validators.required]],
        state: ['', [Validators.required]],
        department: ['', [Validators.required]],
      }),
    });
  }
  saveInfo() {}
}
