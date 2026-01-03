export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
