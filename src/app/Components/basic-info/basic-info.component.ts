import { BaseCdkCell } from '@angular/cdk/table';
import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
  providers: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class BasicInfoComponent implements OnInit {
  @Input() FormGroupName: string;
  basicinfo: FormGroup;
  constructor(private container: FormGroupDirective) {}

  ngOnInit(): void {
    this.basicinfo = this.container.control.get(
      this.FormGroupName
    ) as FormGroup;
    // console.log(this.basicinfo);
  }
}
