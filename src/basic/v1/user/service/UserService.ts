import {User} from "../model/User";
import {UserCommand} from "./UserCommand";

export class UserService {

  save(command: UserCommand) {
    const user = new User();
    user.name = command.name
    user.document = command.document
    user.email = command.email
    user.save()
  }

}
