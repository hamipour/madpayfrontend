import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  returnUrl = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.returnUrl = params['return'] || '/panel');
  }

  login() {
    return this.authService.login(this.authForm.value).subscribe(
      (next) => {
        this.alertService.success('ورود با موفقیت انجام شد.');
        this.router.navigate([this.returnUrl]);
      },
      (error) => {
        this.alertService.error('خطا در احراز هویت', 'خطا');
      }
    );
  }
}
