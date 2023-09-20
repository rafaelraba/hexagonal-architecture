import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { UserCommand } from "./UserCommand";

export class UserCreator {

  private readonly userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  save(command: UserCommand): void {
    const user = new User(command.id, command.name, command.email, command.phone, command.document);
    this.userRepository.save(user);
  }
}
