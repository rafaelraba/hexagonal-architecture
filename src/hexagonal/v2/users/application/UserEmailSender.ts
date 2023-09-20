import {User} from "../domain/User";
import {UserNotification} from "../domain/UserNotification";


export class UserEmailSender {
  private readonly userNotification: UserNotification
  sendEmail(user:User) {
    this.userNotification.ship();
  }

}
