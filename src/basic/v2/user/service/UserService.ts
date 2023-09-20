import {UserCommand} from "./UserCommand";
import {User} from "../model/User";
import {MailchimpService} from "./MailchimpService";

export class UserService {
  private mailchimpService: MailchimpService;

  constructor(mailchimpService: MailchimpService) {
    this.mailchimpService = mailchimpService;
  }

  public save(command: UserCommand) {
    const user = new User();
    user.name = command.name
    user.document = command.document
    user.email = command.email
    user.save()
    this.mailchimpService.sendEmail(user.email)

  }

}
