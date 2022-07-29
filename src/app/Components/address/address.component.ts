import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  Form,
  FormArray,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AddressComponent implements OnInit {
  @Input() FormGroupName: string;
  add: FormGroup;
  constructor(private root: FormGroupDirective, private http: HttpClient) {}

  ngOnInit(): void {
    this.add = this.root.control.get(this.FormGroupName) as FormGroup;
    // console.log(this.add);
  }
  get pincode() {
    return this.add.get('pincode');
  }
  loading: boolean = false;
  pincodevalidate: boolean = true;
  checkforpin() {
    this.loading = true;
    this.pincodevalidate = false;
    this.http
      .get(`https://api.postalpincode.in/pincode/${this.pincode.value}`)
      .subscribe((data: any) => {
        if (data.Status == 'Success') {
          this.pincodevalidate = true;
          this.loading = false;
        } else {
          this.pincodevalidate = false;
        }
        console.log(data);
      });
  }
}
