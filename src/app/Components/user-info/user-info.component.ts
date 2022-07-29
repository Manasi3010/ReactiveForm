import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class UserInfoComponent implements OnInit {
  @Input() FormGroupName: string;
  UserInfo: FormGroup;
  constructor(private container: FormGroupDirective) {}

  ngOnInit(): void {
    this.UserInfo = this.container.control.get(this.FormGroupName) as FormGroup;
    console.log(this.FormGroupName);
  }
}
