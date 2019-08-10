import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus : boolean;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  
  /**
   * Méthode de connexion
   */
  onSignIn(){
    this.authService.signIn().then(
      () => {
        console.log("Sign is successful !");
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
    );
  }


  /**
   * Deconnexion
   */
  onSignOut(){
    this.authService.signOut();
    console.log("SignOut is successful !");
    this.authStatus = this.authService.isAuth;
  }

}
