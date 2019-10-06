import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../core/auth.service';
import { UiAlertService } from '../../../shared/ui-alert/ui-alert.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  form: FormGroup;
  isPending = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthService,
              private alertService: UiAlertService) {

    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      lastName: this.fb.control('', [Validators.required]),
      firstName: this.fb.control('', [Validators.required]),
      secondName: this.fb.control('', [Validators.required])
    });
  }

  async handleSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      try {
        this.isPending = true;
        await this.authService.registration(this.form.value);
        this.alertService.success('You have successfully registered');
        return this.router.navigate(['/auth']);
      } catch (e) {
        this.alertService.error(e.message);
        this.isPending = false;
      }
    }
  }

}
