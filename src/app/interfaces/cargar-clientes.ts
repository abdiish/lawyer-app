
export interface CargarClientes {
  total: number;
  clients: Cliente[];
}

export interface Cliente {
  nombre?       : string;
  telefono?     : string;
  movil?        : string;
  email?        : string;
  img?          : string;
  clasificacion?: number;
  tipo?         : string;
  _id?          : string;
}
