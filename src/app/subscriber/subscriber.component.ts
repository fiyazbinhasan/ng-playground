import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubscriptionService } from '../shared/subscriber.service';

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

  constructor(
    private fb: FormBuilder,
    private subscriptionSvc: SubscriptionService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.subscriptionForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]]
      },
      { updateOn: 'submit' }
    );
  }

  onSubmit() {
    if (this.subscriptionForm.status === 'VALID') {
      this.subscriptionSvc
        .register(this.url, this.email.value)
        .subscribe(res => this.subscribed.emit(res));
    } else {
      this.subscriptionForm.updateValueAndValidity();
    }
  }
}
