import { User } from "./user.interface";

export interface UserResponse {
  total_count: number;
  incomplete_results: boolean;
  items?: User[];
}
