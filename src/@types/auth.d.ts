export interface IDataRegister {
  fullName: string;
  email: string;
  password: string;
  // avatar?: FileList;
  avatar?: File | null | undefined
}