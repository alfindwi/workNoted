export interface OAuthDTO {
  email: string;
  username : string;
  provider : "google" | "github" | "local";
  providerId : string;
}

export interface UserDTO {
  id: number;
  email: string;
  username: string;
}