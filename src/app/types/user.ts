export interface User {
  id: string;
  email: string;
  name: string;
  nickname: string;
  profileUrl: string;
}

export interface LoginResponse {
  user: User;
  hasProfile: boolean;
  agreedTerms: boolean;
}
