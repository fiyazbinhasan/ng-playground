import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  userForm: FormGroup;

  get email() {
    return this.userForm.get("email");
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email]]
      },
      { updateOn: "submit" }
    );
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
