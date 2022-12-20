import { Injectable } from '@angular/core';

export interface Professor {
  id: number;
  email: string;
  password?: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  professor: Professor | null = null;

  constructor() {
    const professorString = localStorage.getItem('professor');
    if (professorString) {
      this.professor = JSON.parse(professorString);
    }
  }

  setLogin(professor: Professor){
    this.professor = professor;
  }


}
