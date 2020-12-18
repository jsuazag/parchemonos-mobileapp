import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  public formGroup: FormGroup;
  public minDateBooking: string;
  public maxDateBooking: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.datesMinMax();
    this.buildForm();
  }

  private datesMinMax() {
    const today = new Date();
    this.minDateBooking = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`;
    this.maxDateBooking = `${(today.getFullYear() + 1)}-${(today.getMonth() + 1)}-${today.getDate()}`;
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      date: ['', [ Validators.required ]],
      detail: ['', [ Validators.required, Validators.minLength(10) ]]
    });
  }

  public makeBooking() {
    const booking = this.formGroup.value;
    booking.date = booking.date.split('T')[0];
    console.log('booking data', booking);
    // TODO: invocación al servicio reserva API
  }

}
