
export interface cargarUsuarios {

  total?: number;
  usuarios?: Usuario[];

}

export interface Usuario {

  nombre?  : string;
  email?   : string;
  password?: string;
  img?     : string;
  google?  : boolean;
  role?    : 'ADMIN_ROLE' | 'USER_ROLE';
  uid?     : string;

}
