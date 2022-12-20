import { AuthService, Professor } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {

  professor: Professor | null = this.authService.professor;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
