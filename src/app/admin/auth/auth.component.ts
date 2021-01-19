import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.authForm = this.fb.group({
      'login': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public login(): void {
    this.authService.login(
      this.authForm.controls['login'].value,
      this.authForm.get('password').value  // предпочтительнее
    ).subscribe((res: string | null) => {
      if (res) {
        this.router.navigate(['/admin', 'main', 'products']);
      } else {
        alert('wrong credentials');
      }
    })
  }

}
