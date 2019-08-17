import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[] = [
    new User('Rafiou', 'Diallo', 'rafiou@diallo.com', 'jeu d\'orange', ['coder', 'lire', 'voyager'])
  ];

  userSubscription = new Subscription();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error) => {
        console.log('Erreur lors de la récupération des users !');
      },
      () => {
        console.log('Observable terminée !');
      });
    this.userService.emitUser();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
