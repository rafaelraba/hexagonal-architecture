import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { UserCommand } from "./UserCommand";
import {EventBus} from "../domain/EventBus";

export class UserCreator {

  private readonly userRepository: UserRepository
  private readonly eventBus: EventBus

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  save(command: UserCommand): void {
    const user = new User(command.id, command.name, command.email, command.phone, command.document);
    this.userRepository.save(user);
    this.eventBus.publish(user);
  }
}
