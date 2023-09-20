import {UserRepository} from "../../domain/UserRepository";
import { User } from "../../domain/User";
import {MongoClient} from "mongodb";

export class MongoUserRepository implements UserRepository{
  async save(user: User) {
    const client = new MongoClient("");
    const collection = client.db("ecommerce").collection("users");
    await collection.insertOne(user)
  }
}
