import {request, Request, Response} from 'express';
import { UserCreator } from "../../application/UserCreator";
import { UserCommand } from "../../application/UserCommand";

type Request = {
  id: string;
  name: string;
  email: string;
  document: string;
  phone: string;
};

export class UserPutController {
  private userCreator: UserCreator

  constructor(userCreator: UserCreator) {
    this.userCreator = userCreator;
  }

  save(request: Request, response: Response) {
    const { id, name, email, phone, document } = request;
    const command: UserCommand = {
      id: request.id,
      name: request.name,
      document: request.document,
      email: request.email,
      phone: request.phone,
    }
    this.userCreator.save(command)
  }
}

