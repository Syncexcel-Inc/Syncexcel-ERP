import { Component, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AuthGuard } from '../../../shared/services/auth/auth.guard';
import { Router } from '@angular/router';
import { AppConfigService } from '../../../app.Config.Service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from 'app/models/enterprises/user.model';
import { ErrorService } from 'app/services/error.service';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup;
  authOutput: Array<any>;
  headers: Headers;
  user: User;

  constructor(private ref: ChangeDetectorRef, private fb: FormBuilder, private authGaurd: AuthGuard, private router: Router,
    private authService: AuthService, private errorService: ErrorService, private http: HttpClient) {
    //this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.user = new User();
  }

  ngOnInit() {
    const password = new FormControl('', Validators.required);
    const confirmPassword = new FormControl('', CustomValidators.equalTo(password));   
    this.signupForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: password,
        agreed: [false, Validators.required]
      }
    );
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.assignUser(this.signupForm.value);
      const body = JSON.stringify(this.user);
      // this.http.post('http://localhost:5000/auth/signin', body, { headers: this.headers })
      // .subscribe((data: any) => this.authOutput = data,
      // error => () => { }, () =>
      // {
      //   if (true)
      //   {
      //     console.log(JSON.stringify(this.authOutput[0]));
      //     localStorage.setItem('userContext', JSON.stringify(this.authOutput[0]));
      //     this.router.navigate(['admin']);
      //   }
      // });



      this.assignUser(this.signupForm.value);
      this.authService.signin(this.user)
        .subscribe(
          (data: any) => this.redirect(data),
          error => console.log(error)
        );
    }
  }

  redirect(data) {
    alert('hhhhhhhhhhhh');
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    this.authService.isLoggedIn = true;
    this.router.navigate(['/others/blank']);
  }

  assignUser(formValue: any): void {
    this.user.email = formValue.email;
    this.user.password = formValue.password;
    this.user.firstName = formValue.firstName;
    this.user.termsAgreed = formValue.termsAgreed;
  }
}
