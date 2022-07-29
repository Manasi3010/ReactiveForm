import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-user-bank',
  templateUrl: './user-bank.component.html',
  styleUrls: ['./user-bank.component.css'],
})
export class UserBankComponent implements OnInit {
  constructor(private container: FormGroupDirective) {}

  ngOnInit(): void {}
}
