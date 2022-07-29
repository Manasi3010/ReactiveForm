export interface basicinfo {
  firstname: string;
  middelname: string;
  lastname: string;
  age: number;
  gender: string;
  dob: number;
  bloodgrp: string;
  religion: string;
  citizeof: string;
  address?: Address;
  contact?: Contact;
  education?: EductionDetails;
}
export interface Address {
  state: string;
  District: string;
  Teshil: string;
  CityTown: string;
  fulladd: string;
  pincode: number;
}
export interface Contact {
  studentmob: number;
  fathermob: number;
  mothermob: number;
  studentemail: string;
}
export interface EductionDetails {
  nameofexam: string;
  nameofboarduni: string;
  nameofschcol: string;
  seatno: number;
  credit: number;
  GPA: number;
  grade: string;
  tmarks: number;
  outof: number;
  monthyearofpass: number;
  atkts: number;
}
