import { UserCommand } from "./UserCommand";
import { User } from "../model/User";
import { MailchimpService } from "./MailchimpService";
import { WhatsAppNotification } from "./WhatsAppNotification";

export class UserService {
  private mailchimpService: MailchimpService;
  private whatsAppNotification: WhatsAppNotification;

  constructor(emailService: MailchimpService, whatsAppNotification: WhatsAppNotification) {
    this.mailchimpService = emailService;
    this.whatsAppNotification = whatsAppNotification;
  }

  public save(command: UserCommand) {
    const user = new User();
    user.name = command.name
    user.document = command.document
    user.email = command.email
    user.save()
    this.mailchimpService.sendEmail(user.email)
    this.whatsAppNotification.send(user.phone);
  }

}
