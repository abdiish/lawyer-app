import { Expediente } from "./expediente";
import { Usuario } from "./usuario";

export class Tarea {

  public descripcionTarea? : string;
  public tituloTarea?      : string;
  public statusTarea?      : string;
  public prioridadTarea?   : string;
  public documentos?       : string[];
  public usuario?          : Usuario;
  public expediente?       : Expediente;
  public _id?              : string;

  constructor(

    tituloTarea?      : string,
    descripcionTarea? : string,
    statusTarea?      : string,
    prioridadTarea?   : string,
    documentos?       : string[],
    usuario?          : Usuario,
    expediente?       : Expediente,
    _id?              : string,

  ) {

    this.tituloTarea      = tituloTarea;
    this.descripcionTarea = descripcionTarea;
    this.statusTarea      = statusTarea;
    this.prioridadTarea   = prioridadTarea;
    this.documentos       = documentos;
    this.usuario          = usuario;
    this.expediente       = expediente;
    this._id              = _id;

  }
}
