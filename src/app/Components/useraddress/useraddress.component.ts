import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-useraddress',
  templateUrl: './useraddress.component.html',
  styleUrls: ['./useraddress.component.css'],
  providers: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class UseraddressComponent implements OnInit {
  @Input() FormGroupName: string;
  address: FormGroup;
  constructor(private root: FormGroupDirective) {}

  ngOnInit(): void {
    this.address = this.root.control.get(this.FormGroupName) as FormGroup;
    console.log(this.FormGroupName);
  }
}
