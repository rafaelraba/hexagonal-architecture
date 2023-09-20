import {User} from "./User";

export interface EventBus {
  publish(user: User);
}
