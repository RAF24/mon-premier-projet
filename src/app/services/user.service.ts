import { User } from '../models/user';
import { Subject } from 'rxjs';

export class UserService {

  private users: User[] = [
    new User('Rafiou', 'Diallo', 'rafiou@diallo.com', 'jeu d\'orange', ['coder', 'lire', 'voyager'])
  ];

  userSubject = new Subject<User[]>();

  emitUser() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUser();
  }



}
