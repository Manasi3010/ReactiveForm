import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/Customevalidtors';
import { basicinfo } from 'src/app/shared/model/forms.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class FormsComponent implements OnInit {
  StudentForm!: FormGroup;
  studentInfo: any;
  basicinform: basicinfo[];
  isEditable = true;
  complete: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.StudentForm = this.fb.group({
      basicInfo: this.fb.group({
        firstname: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            CustomValidators.checkforwhitespace,
          ],
        ],
        middelname: [],
        lastname: ['', [Validators.required]],
        age: ['', [Validators.required]],
        gender: [],
        dob: [],
        bloodgrp: ['', [Validators.required]],
        religion: [],
        citizeof: [],
      }),
      address: this.fb.group({
        state: [],
        District: [],
        Teshil: [],
        CityTown: ['', [Validators.required]],
        fulladd: ['', [Validators.required]],
        pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      }),
      contact: this.fb.group({
        studentmob: [
          '',
          [
            Validators.required,
            Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          ],
        ],
        fathermob: ['', [Validators.required]],
        mothermob: [],
        studentemail: [
          '',
          [Validators.required, CustomValidators.emailsLenghtAndFormat],
        ],
      }),
      Educationdetails: this.fb.group({
        nameofexam: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            CustomValidators.checkforwhitespace,
          ],
        ],
        nameofboarduni: ['', [Validators.required]],
        nameofschcol: [''],
        seatno: ['', [Validators.required]],
        credit: ['', [Validators.required]],
        GPA: ['', [Validators.required]],
        tmarks: ['', [Validators.required]],
        outof: [''],
      }),
    });
  }
  saveInfo() {
    // this.studentInfo = this.StudentForm.getRawValue();
    localStorage.setItem(
      'studentInfo',
      JSON.stringify(this.StudentForm.getRawValue())
    );
    this.studentInfo = JSON.parse(localStorage.getItem('studentInfo'));
    this.basicinform = this.studentInfo.basicinfo;
    console.log(this.basicinform);
  }
}
