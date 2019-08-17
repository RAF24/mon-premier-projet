export class User {

  firstName: string;
  lastName: string;
  email: string;
  drinkPreference: string;
  hobbies?: string[];

  constructor(firstName: string, lastName: string, email: string, drinkPreference: string, hobbies?: string[]) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.drinkPreference = drinkPreference;
      this.hobbies = hobbies;
  }

}
