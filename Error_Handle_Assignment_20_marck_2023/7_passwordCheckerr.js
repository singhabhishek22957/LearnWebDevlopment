/**
 * 7. Password Checker.


Create a class called User with properties username and password. Implement a getter method for password 
that returns the password with all characters replaced by asterisks. Implement a setter method for password 
that checks if the new password is at least 8 characters long and contains at least one number and one 
uppercase letter. If the password is valid, set the new password. If not, log an error message.
 */

class User {
  constructor(Id, password) {
    this.userId = Id;
    this._password = password;
  }
  get password() {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (regex.test(this._password)) {
      let star = "";
      for (let i = 0; i < this._password.length; i++) {
        star = star + "*";
      }
      return (this._password = star);
    } else {
      const message =
        "Error : Password must be at least 8 characters long and contain at least one number and one uppercase letter.";
      return message;
    }
  }

  set password(newpassword) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (regex.test(newpassword)) {
      this._password = newpassword;
    } else {
      const message =
        "Error : Password must be at least 8 characters long and contain at least one number and one uppercase letter.";
      return message;
    }
  }
}
const user1 = new User("singhabhisehk", "Abhishek");
const user3 = new User("singhabhisehk", "Abhishek123");
const user2 = new User("singhabhisehk");
user2.password = "Afffffffffffffffffffffffffffffffffffff123";
console.log(user1.password); //  Error : Password must be at least 8 characters long and contain at least one number and one uppercase letter.

console.log(user3.password); //  ***********
console.log(user2.password); //  *****************************************
