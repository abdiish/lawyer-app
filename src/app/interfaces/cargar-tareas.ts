
export interface cargarTarea {

  total : number;
  tareas: Tarea[];

}

export interface Tarea {

  descripcionTarea?    : string;
  colaboradorAsignado? : string;
  statusTarea?         : string;
  prioridadTarea?      : string;
  comentarios?         : string;
  _id?                 : string;

}


