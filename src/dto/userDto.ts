export interface UserDTO {
  email: string;
  username : string;
  provider : "google" | "github" | "local";
  providerId : string;
}
