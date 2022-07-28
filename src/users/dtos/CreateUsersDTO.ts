export interface CreateUserDTO {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  permissionFlags?: number;
}