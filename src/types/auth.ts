export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'hr' | 'employee';
  department?: string;
  position?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData extends LoginCredentials {
  name: string;
  role: 'admin' | 'hr' | 'employee';
  department?: string;
  position?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
} 