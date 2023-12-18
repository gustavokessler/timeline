import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  email: string = "";
  password: string = "";

  emailCreate: string = "";
  passwordCreate: string = "";
  nameCreate: string = "";



  errorLogin = false;

  gameID = '';

  isLogin = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.professor) {
      this.navigateToProfessorModule();
    }
  }

  enterGame() {
    this.router.navigateByUrl('/game?code=' + this.gameID);
  }

  login() {
    this.authService.login(this.email, this.password).subscribe((res) => {
      this.navigateToProfessorModule();
    }, () => this.errorLogin = true)
  }

  create() {
    this.authService.create(this.emailCreate, this.nameCreate, this.passwordCreate).subscribe((res) => {
      this.navigateToProfessorModule();
    }, () => this.errorLogin = true)
  }

  navigateToProfessorModule() {
    this.router.navigate(['/professor']);
  }

}
