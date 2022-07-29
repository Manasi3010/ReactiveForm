import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-education-info',
  templateUrl: './education-info.component.html',
  styleUrls: ['./education-info.component.css'],
})
export class EducationInfoComponent implements OnInit {
  @Input() FormGroupName: string;
  EducationDetails: FormGroup;
  constructor(private container: ControlContainer) {}

  ngOnInit(): void {
    this.EducationDetails = this.container.control.get(
      this.FormGroupName
    ) as FormGroup;
    // console.log(this.EducationDetails);
  }
}
