export interface LoginPayload {
  email: string;
  password: string;
  autoLogin: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  nickname: string;
  profileUrl: string | null;
  agreedTerms: AgreedTerms | null;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
}

export interface AgreedTerms {
  service: boolean;
  privacy: boolean;
  location: boolean;
  thirdParty: boolean;
}

export interface AuthState {
  accessToken: string | null;
  user: User | null;
  setAccessToken: (token: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
}
