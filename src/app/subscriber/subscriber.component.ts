import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {
  @Input() url: string;
  @Output() subscribed: EventEmitter<string> = new EventEmitter<string>();

  subscriptionForm: FormGroup;

  get email() {
    return this.subscriptionForm.get('email');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.subscriptionForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]]
      },
      { updateOn: 'blur' }
    );
  }

  onSubmit() {
    console.log(this.subscriptionForm.value);
    this.subscribed.emit(
      'Please check your email and confirm your subscription'
    );
    console.log(this.url);
  }
}
