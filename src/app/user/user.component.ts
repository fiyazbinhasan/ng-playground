import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { CustomEmailValidator } from "../shared/custom-email.validator";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  userForm: FormGroup;

  get name() {
    return this.userForm.get("name");
  }

  get email() {
    return this.userForm.get("email");
  }

  constructor(
    private fb: FormBuilder,
    private emailValidator: CustomEmailValidator
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ["", [Validators.required]],
      email: [
        "",
        [Validators.required, Validators.email],
        [this.emailValidator.existingEmailValidator()]
      ]
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
