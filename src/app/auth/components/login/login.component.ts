import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../core/auth.service';
import { UiAlertService } from '../../../shared/ui-alert/ui-alert.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  pending = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthService,
              private alertService: UiAlertService) {

    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)])
    });
  }

  async handleSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {

      try {
        this.pending = true;
        await this.authService.login(this.form.value);
        return this.router.navigate(['/users']);
      } catch (e) {
        this.alertService.error(e.message);
        this.pending = false;
      }
    }
  }
}
