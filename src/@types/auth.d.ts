export interface IDataRegister {
  fullName: string;
  email: string;
  password: string;
  // avatar?: FileList;
  avatar?: File | null | undefined
}

export interface IDataLogin {
  email: string;
  password: string;
}