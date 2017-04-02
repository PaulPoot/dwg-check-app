import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class User {
  usersKey = 'users';
  activeUserKey = 'activeUser';

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello User Provider');
  }

  getUsers() {
    return this.storage.get(this.usersKey);
  }

  checkUsername(username) {
    var user;
    var userAvailable = true;

    return this.getUsers().then((users) => {
      users = JSON.parse(users);

      if (users) {
        for (user of users) {
          if (username == user.username) {
            userAvailable = false;
            break;
          }
        }
      }
      return userAvailable;
    })
  }

  loginUser(user) {
    var savedUser;

    return this.storage.get(this.usersKey).then((users) => {
      users = JSON.parse(users);

      if (user) {
        for (savedUser of users) {
          if (user.username == savedUser.username) {
            if (user.password == savedUser.password) {
              console.log("Login OK");
              this.setActiveUser(user);
              return true;
            } else {
              console.log("Login FAIL: Password");
              return "Incorrect password";
            }
          }
        }

        console.log("Login FAIL: Username");
        return "User not found";
      }
    })
  }

  createUser(user) {
    return this.checkUsername(user.username).then((userAvailable) => {
      if (userAvailable) {
        var newUser = {
          username: user.username,
          password: user.password,
        };

        this.getUsers().then((users) => {
          users = JSON.parse(users);

          if (users) {
            users.push(newUser)
          } else {
            users = [newUser];
          }

          this.storage.set(this.usersKey, JSON.stringify(users)).then((val) => {
            return true;
          });
        });
      } else {
        console.log("createUser - usernameTaken");
        return false;
      }
    });
  }

  getActiveUser() {
    return this.storage.get(this.activeUserKey);
  }

  setActiveUser(user) {
    return this.storage.set(this.activeUserKey, JSON.stringify(user));
  }
}
