export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  token?: string;
  stripe_customer_id?: string;
  created_at: string;
  updated_at: string;
  is_verified?: string;
  is_approved?: string;
  role: string;
  Profile?: any;
}
