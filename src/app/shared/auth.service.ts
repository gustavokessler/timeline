import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

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

  constructor(
    private http: HttpClient
  ) {
    const professorString = localStorage.getItem('professor');
    if (professorString) {
      this.professor = JSON.parse(professorString);
    }
  }

  login(email: string, password: string) {
    return this.http.post<Professor>(environment.endPointHost + "auth/login", {
      email, password
    }).pipe(
      tap((professor) => this.setLogin(professor))
    )
  }

  create(email: string, name: string, password: string) {
    return this.http.post<Professor>(environment.endPointHost + "auth/register", {
      email, password, name
    }).pipe(
      tap((professor) => this.setLogin(professor))
    )
  }

  setLogin(professor: Professor) {
    this.professor = professor;
    localStorage.setItem('professor', JSON.stringify(professor));
  }


}
