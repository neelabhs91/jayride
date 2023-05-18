import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
})
export class TravelComponent implements OnInit {
  travelForm!: FormGroup;
  isComplete: boolean = false;
  disabled: boolean = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createTravelForm();
  }

  createTravelForm(): void {
    this.travelForm = this.formBuilder.group({
      travellerName: ['', Validators.required],
      travellerEmail: ['', [Validators.required, Validators.email]],
      channel: ['', Validators.required],
      meetAndGreet: [false, Validators.required],
      travelDatetime: ['', Validators.required],
      bookingPrice: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.travelForm.valid) {
      console.log(this.travelForm.value);
      this.isComplete = true;
    } else {
      this.isComplete = false;

      // Iterate over each FormControl in the FormGroup
      Object.keys(this.travelForm.controls).forEach((controlName: string) => {
        const control = this.travelForm.get(controlName);

        // Check if the current FormControl has errors
        if (control && control.errors) {
          // Iterate over each error in the FormControl's errors object
          Object.keys(control.errors).forEach((errorKey) => {
            console.log(
              `Validation error: ${errorKey} for control ${controlName}`
            );
          });
          this.disabled = false;
        } else {
          this.disabled = false;
        }
      });
    }
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.travelForm.get(controlName);
    return (
      control !== null &&
      control !== undefined &&
      control.touched &&
      control.invalid
    );
  }

  getErrorMessage(controlName: string): string {
    const control = this.travelForm.get(controlName);

    if (control && control.invalid && control.errors) {
      if (control.hasError('required')) {
        return 'This field is required.';
      }
      if (control.hasError('email')) {
        return 'Please enter a valid email address.';
      }
    }

    return 'Invalid value.';
  }
}
