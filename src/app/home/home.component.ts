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

  errorLogin = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.authService.professor){
      this.navigateToProfessorModule();
    }
  }

  login(){
    if(this.email === "admin@teste.com" && this.password === "teste1234"){
      const professor = {
        email: this.email,
        name: 'admin',
        id: 1
      }
      this.authService.setLogin(professor);
      localStorage.setItem('professor', JSON.stringify(professor));
      this.navigateToProfessorModule();
    }else{
      this.errorLogin = true;
    }
  }

  navigateToProfessorModule(){
    console.log('aaa')
    this.router.navigate(['/professor']);
  }

}
