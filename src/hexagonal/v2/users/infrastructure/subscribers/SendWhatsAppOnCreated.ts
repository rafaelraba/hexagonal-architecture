import {EventSubscriber} from "typeorm";
import {User} from "../../domain/User";

@EventSubscriber
export class SendWhatsAppOnCreated {
  sendEmail(user:User) {

  }

}
