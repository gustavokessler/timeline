import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {of} from "rxjs"

@Injectable()
export class CanActiveProfessor implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  canActivate() {
    if(this.authService.professor){
      return of(true);
    }
    this.router.navigateByUrl('')
    return of(false);
  }
}
