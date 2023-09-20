import {UserService} from "../service/UserService";
import {Request, Response} from 'express';
import {UserCommand} from "../../../../hexagonal/v1/users/application/UserCommand";

type Request = {
  name: string;
  email: string;
  document: string;
  phone: string;
};

export class UserController {
  private userService: UserService

  constructor(userService: UserService) {
    this.userService = userService;
  }

  save(request: Request, response: Response) {
    const { name, email, phone, document } = request;
    const command: UserCommand = {
      name: request.name,
      document: request.document,
      email: request.email,
      phone: request.phone
    }
    this.userService.save(command)
  }
}

