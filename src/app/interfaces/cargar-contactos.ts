
export interface CargarContacto {
  total?: number;
  contacts?: Contacto[];
}

export interface Contacto {
  nombre?: string;
  telefono?: string;
  movil?: string;
  email?: string;
  img?: string;
  tipo?: string;
  _id?: string;
}
