import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../match-password';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  }, {validators: [this.matchPassword.validate]});

  constructor(private matchPassword: MatchPassword, private authService: AuthService) {}

  ngOnInit(): void {}

  signup(){
    return this.authService.signup(this.authForm.value).subscribe(
      (next) => {
        console.log('signup');
      },
      (error) => {
        console.log('error');
      }
    );
  }
}
