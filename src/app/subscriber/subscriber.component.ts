import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-subscriber",
  templateUrl: "./subscriber.component.html",
  styleUrls: ["./subscriber.component.scss"]
})
export class SubscriberComponent implements OnInit {
  subscriptionForm: FormGroup;

  get email() {
    return this.subscriptionForm.get("email");
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.subscriptionForm = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email]]
      },
      { updateOn: "submit" }
    );
  }

  onSubmit() {
    console.log(this.subscriptionForm.value);
  }
}
