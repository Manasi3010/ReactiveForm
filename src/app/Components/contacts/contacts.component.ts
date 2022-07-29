import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, Form, FormGroup } from '@angular/forms';
import { Contact } from 'src/app/shared/model/forms.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  @Input() FormGroupName: string;
  ContactInfo: FormGroup;
  constructor(private conatiner: ControlContainer) {}

  ngOnInit(): void {
    this.ContactInfo = this.conatiner.control.get(
      this.FormGroupName
    ) as FormGroup;
  }
}
