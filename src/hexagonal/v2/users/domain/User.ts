export class User {
  id: string
  name: string
  email: string
  phone: string
  document: string


  constructor(id: string, name: string, email: string, phone: string, document: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.document = document;
  }
}
