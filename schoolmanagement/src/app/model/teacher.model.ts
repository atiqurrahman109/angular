import { User } from "./user.model";

export interface Teacher {
  id: number;
  name: string;
  email: string;
  phone: string;
  photo: string;
  user: User;
}